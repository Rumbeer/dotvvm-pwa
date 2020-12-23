namespace DotVVM.PWA.Options.Manifest
{
    public enum Dir
    {
        /// <summary>
        /// Text direction is determined by the user agent
        /// </summary>
        [ManifestValue("auto")]
        Auto = 0,
        
        /// <summary>
        /// Left to right
        /// </summary>
        [ManifestValue("ltr")]
        LeftToRight = 1,

        /// <summary>
        /// Right to left
        /// </summary>
        [ManifestValue("rtl")]
        RightToLeft = 2
    }
}