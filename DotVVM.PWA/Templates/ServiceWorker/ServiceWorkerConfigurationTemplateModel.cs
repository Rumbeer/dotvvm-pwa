using System.Collections.Generic;
using DotVVM.PWA.Options.ServiceWorker;

namespace DotVVM.PWA.Templates.ServiceWorker
{
    public class ServiceWorkerConfigurationTemplateModel
    {
        public List<RouteRegex> RouteUrls { get; set; }
        public List<CachingStrategy> CacheStrategies { get; set; }
    }

    public class RouteRegex
    {
        public string RouteName { get; set; }
        public string RouteUrlRegex { get; set; }
    }
}