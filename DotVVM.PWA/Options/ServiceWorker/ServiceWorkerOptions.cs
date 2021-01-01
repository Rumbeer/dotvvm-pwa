using System.Collections.Generic;

namespace DotVVM.PWA.Options.ServiceWorker
{
    public class ServiceWorkerOptions
    {
        public bool UseCustomServiceWorker { get; set; }
        public List<CachingStrategy> CacheStrategies { get; set; }
    }
}