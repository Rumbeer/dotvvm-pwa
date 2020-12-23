namespace DotVVM.PWA.Options.Manifest
{
    public enum Orientation
    {
        [ManifestValue("any")]
        Any = 0,
        [ManifestValue("natural")]
        Natural = 1,
        [ManifestValue("landscape")]
        Landscape = 2,
        [ManifestValue("landscape-primary")]
        LandscapePrimary = 3,
        [ManifestValue("landscape-secondary")]
        LandscapeSecondary = 4,
        [ManifestValue("portrait")]
        Portrait = 5,
        [ManifestValue("portrait-primary")]
        PortraitPrimary = 6,
        [ManifestValue("portrait-secondary")]
        PortraitSecondary = 7,
    }
}