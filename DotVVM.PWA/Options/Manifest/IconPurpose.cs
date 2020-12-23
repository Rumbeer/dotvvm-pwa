namespace DotVVM.PWA.Options.Manifest
{
    public enum IconPurpose
    {
        /// <summary>
        /// The user agent is free to display the icon in any context (this is the default value).
        /// </summary>
        [ManifestValue("any")]
        Any = 0,

        /// <summary>
        /// A user agent can present this icon where a monochrome icon with a solid fill is needed. The color information in the icon is discarded and only the alpha data is used. The icon can then be used by the user agent like a mask over any solid fill.
        /// </summary>
        [ManifestValue("monochrome")]
        Monochrome = 1,

        /// <summary>
        /// The image is designed with icon masks and safe zone in mind, such that any part of the image outside the safe zone can safely be ignored and masked away by the user agent.
        /// </summary>
        [ManifestValue("maskable")]
        Maskable = 2,
    }
}