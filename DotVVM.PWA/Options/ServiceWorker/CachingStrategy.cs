namespace DotVVM.PWA.Options.ServiceWorker
{
    public class CachingStrategy
    {
        public string RouteName { get; set; }
        public string CacheName { get; set; }
        public StrategyType StrategyType { get; set; }
        public ContentType ContentType { get; set; }
        public ExpirationPlugin ExpirationPlugin { get; set; }
    }
}