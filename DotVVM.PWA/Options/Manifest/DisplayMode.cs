namespace DotVVM.PWA.Options.Manifest
{
    public enum DisplayMode
    {
        /// <summary>
        /// The application opens in a conventional browser tab or new window, depending on the browser and platform. This is the default.
        /// </summary>
        [ManifestValue("browser")]
        Browser = 0,

        /// <summary>
        /// All of the available display area is used and no user agent chrome is shown.
        /// </summary>
        [ManifestValue("fullscreen")]
        Fullscreen = 1,

        /// <summary>
        /// The application will look and feel like a standalone application, but will have a minimal set of UI elements for controlling navigation. The elements will vary by browser.
        /// </summary>
        [ManifestValue("minimal-ui")]
        MinimalUi = 2,

        /// <summary>
        /// The application will look and feel like a standalone application.
        /// This can include the application having a different window, its own icon in the application launcher, etc.
        /// In this mode, the user agent will exclude UI elements for controlling navigation, but can include other UI elements such as a status bar.
        /// </summary>
        [ManifestValue("standalone")]
        Standalone = 3,
    }
}