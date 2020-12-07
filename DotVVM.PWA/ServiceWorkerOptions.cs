namespace DotVVM.PWA
{
    public class ServiceWorkerOptions
    {
        
    }

    public interface ICachingStrategy
    {
        public string CacheName { get; set; }
        public ExpirationPlugin ExpirationPlugin { get; set; }
    }

    public class ExpirationPlugin
    {
        public int MaxAgeSeconds { get; set; }
        public int MaxEntries { get; set; }
    }
}