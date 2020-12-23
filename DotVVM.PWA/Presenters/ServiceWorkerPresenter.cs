using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using DotVVM.Framework.Hosting;
using DotVVM.Framework.Routing;
using DotVVM.PWA.Options.ServiceWorker;
using DotVVM.PWA.Templates.ServiceWorker;
using Microsoft.Extensions.Options;

namespace DotVVM.PWA.Presenters
{
    public class ServiceWorkerPresenter : IDotvvmPresenter
    {
        private readonly IOptions<ServiceWorkerOptions> _options;

        public ServiceWorkerPresenter(IOptions<ServiceWorkerOptions> options)
        {
            _options = options;
        }
        public async Task ProcessRequest(IDotvvmRequestContext context)
        {
            context.HttpContext.Response.ContentType = "text/javascript";

            var routeUrls = BuildRouteUrls(context);
            var templateModel = new ServiceWorkerTemplateModel()
            {
                RouteUrls = routeUrls,
                CacheStrategies = BuildDefaultCacheStrategies()
            };
            using (var writer = new StreamWriter(context.HttpContext.Response.Body))
            {
                var template = new ServiceWorkerTemplate()
                {
                    Model = templateModel
                };
                try
                {
                    var transformText = template.TransformText();
                    await writer.WriteAsync(transformText);

                }
                catch (Exception e)
                {

                }
                await writer.FlushAsync();
            }
        }

        private List<CachingStrategy> BuildDefaultCacheStrategies()
        {
            var cachingStrategies = _options.Value.CacheStrategies;
            if (cachingStrategies.All(cs => cs.ContentType != ContentType.Scripts))
            {
                cachingStrategies.Add(new CachingStrategy()
                {
                    CacheName = "scripts",
                    ContentType = ContentType.Scripts,
                    StrategyType = StrategyType.StaleWhileRevalidate
                });
            }
            if (cachingStrategies.All(cs => cs.ContentType != ContentType.Styles))
            {
                cachingStrategies.Add(new CachingStrategy()
                {
                    CacheName = "styles",
                    ContentType = ContentType.Styles,
                    StrategyType = StrategyType.StaleWhileRevalidate
                });
            }
            if (cachingStrategies.All(cs => cs.ContentType != ContentType.Images))
            {
                cachingStrategies.Add(new CachingStrategy()
                {
                    CacheName = "images",
                    ContentType = ContentType.Images,
                    StrategyType = StrategyType.CacheFirst
                });
            }
            if (cachingStrategies.All(cs => cs.ContentType != ContentType.DotvvmRoute && !string.IsNullOrWhiteSpace(cs.RouteName)))
            {
                cachingStrategies.Add(new CachingStrategy()
                {
                    CacheName = "dotvvm-routes",
                    ContentType = ContentType.DotvvmRoute,
                    StrategyType = StrategyType.NetworkFirst
                });
            }

            return cachingStrategies;
        }

        private static List<RouteRegex> BuildRouteUrls(IDotvvmRequestContext context)
        {
            var urlPrefix = BuildUrlPrefix(context);

            return context.Configuration.RouteTable.Select(r =>
            {
                var parser = new DotvvmRouteParser(context.Configuration.RouteConstraints);

                var regex = parser.ParseRouteUrl(r.Url, r.DefaultValues).RouteRegex.ToString();
                regex = regex.Replace("/?$", @"(\?.*?)?/?$");
                regex = regex.StartsWith("^")
                    ? $"^{urlPrefix}{regex.Substring(1, regex.Length - 1)}"
                    : $"^{urlPrefix}{regex}";
                return new RouteRegex()
                {
                    RouteName = r.RouteName,
                    RouteUrlRegex = regex.Replace(@"/", @"\/")
                };
            }).ToList();
        }

        private static string BuildUrlPrefix(IDotvvmRequestContext context)
        {
            var urlPrefix = new UriBuilder(context.HttpContext.Request.Url)
            {
                Path = context.HttpContext.Request.PathBase.HasValue()
                    ? context.HttpContext.Request.PathBase.Value ?? string.Empty
                    : string.Empty,
                Query = string.Empty,
                Fragment = string.Empty
            }.ToString();

            return urlPrefix.EndsWith("/") ? urlPrefix.Substring(0, urlPrefix.Length - 1) : urlPrefix;
        }
    }
}