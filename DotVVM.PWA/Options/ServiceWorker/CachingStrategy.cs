using System.Collections.Generic;

namespace DotVVM.PWA.Options.ServiceWorker
{
    public class ServiceWorkerOptions
    {
        public bool UseCustomServiceWorker { get; set; }
        public List<CachingStrategy> CacheStrategies { get; set; }
    }

    public class CachingStrategy
    {
        public string RouteName { get; set; }
        public string CacheName { get; set; }
        public StrategyType StrategyType { get; set; }
        public ContentType ContentType { get; set; }
        public ExpirationPlugin ExpirationPlugin { get; set; }
    }

    public class ExpirationPlugin
    {
        public int MaxEntries { get; set; }
        public int MaxAgeSeconds { get; set; }
    }

    public enum ContentType
    {
        DotvvmRoute,
        Images,
        Styles,
        Scripts
    }

    public enum StrategyType
    {
        NetworkFirst,
        CacheFirst,
        StaleWhileRevalidate
    }
}