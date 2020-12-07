using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using DotVVM.Framework.Hosting;
using DotVVM.Framework.Routing;
using DotVVM.PWA.Templates.ServiceWorker;

namespace DotVVM.PWA.Presenters
{
    public class ServiceWorkerPresenter : IDotvvmPresenter
    {
        public async Task ProcessRequest(IDotvvmRequestContext context)
        {
            context.HttpContext.Response.ContentType = "text/javascript";

            var routeUrls = BuildRouteUrls(context);
            var templateModel = new ServiceWorkerTemplateModel()
            {
                RouteUrls = routeUrls
            };
            using (var writer = new StreamWriter(context.HttpContext.Response.Body))
            {
                var template = new ServiceWorkerTemplate()
                {
                    Model = templateModel
                };

                await writer.WriteAsync(template.TransformText());
                await writer.FlushAsync();
            }
        }

        private static List<string> BuildRouteUrls(IDotvvmRequestContext context)
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
                return regex.Replace(@"/", @"\/");
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