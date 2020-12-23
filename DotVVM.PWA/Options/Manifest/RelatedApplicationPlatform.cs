namespace DotVVM.PWA.Options.Manifest
{
    public enum RelatedApplicationPlatform
    {
        [ManifestValue("chrome_web_store")]
        ChromeWebStore = 0,
        [ManifestValue("play")]
        GooglePlay = 1,
        [ManifestValue("itunes")]
        Itunes = 2,
        [ManifestValue("windows")]
        Windows = 3

    }
}