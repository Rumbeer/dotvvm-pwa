namespace DotVVM.PWA.Options.Manifest
{
    public class ManifestOptions
    {
        /// <summary>
        /// The Display member is a string that determines the developers’ preferred display mode for the website. The display mode changes how much of browser UI is shown to the user and can range from browser (when the full browser window is shown) to fullscreen (when the app is full-screened).
        /// </summary>
        public DisplayMode Display { get; set; }

        /// <summary>
        /// The ShortName member is a string that represents the name of the web application displayed to the user if there is not enough space to display Name (e.g., as a label for an icon on the phone home screen).
        /// </summary>
        public string ShortName { get; set; }

        /// <summary>
        /// The Name member is a string that represents the name of the web application as it is usually displayed to the user (e.g., amongst a list of other applications, or as a label for an icon).
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// The start_url member is a string that represents the start URL of the web application — the prefered URL that should be loaded when the user launches the web application (e.g., when the user taps on the web application's icon from a device's application menu or homescreen).
        /// </summary>
        public string StartUrl { get; set; }

        /// <summary>
        /// The BackgroundColor member defines a placeholder background color for the application page to display before its stylesheet is loaded. This value is used by the user agent to draw the background color of a shortcut when the manifest is available before the stylesheet has loaded.
        /// </summary>
        public string BackgroundColor { get; set; }

        /// <summary>
        /// The theme_color member is a string that defines the default theme color for the application.
        /// </summary>
        public string ThemeColor { get; set; }

        /// <summary>
        /// The scope member is a string that defines the navigation scope of this web application's application context.
        /// It restricts what web pages can be viewed while the manifest is applied.
        /// If the user navigates outside the scope, it reverts to a normal web page inside a browser tab or window.
        /// </summary>
        public string Scope { get; set; }

        /// <summary>
        /// The Description member is a string in which developers can explain what the application does.
        /// </summary>
        public string Description { get; set; }

        /// <summary>
        /// The icons member specifies an array of objects representing image files that can serve as application icons for different contexts.
        /// </summary>
        public Icon[] Icons { get; set; }

        /// <summary>
        /// The lang member is a string containing a single language tag.
        /// </summary>
        public string Lang { get; set; }

        /// <summary>
        /// The Categories member is an array of strings defining the names of categories that the application supposedly belongs to. There is no standard list of possible values, but the W3C maintains a list of known categories.
        /// </summary>
        public string[] Categories { get; set; }

        /// <summary>
        /// The base direction in which to display direction-capable members of the manifest (Name, ShortName, Description). Together with the lang member, it helps to correctly display right-to-left languages.
        /// </summary>
        public Dir Dir { get; set; }

        /// <summary>
        /// The iarc_rating_id member is a string that represents the International Age Rating Coalition (IARC) certification code of the web application. It is intended to be used to determine which ages the web application is appropriate for.
        /// </summary>
        public string IarcRatingId { get; set; }

        /// <summary>
        /// The orientation member defines the default orientation for all the website's top-level browsing contexts.
        /// </summary>
        public Orientation Orientation { get; set; }

        /// <summary>
        /// The PreferRelatedApplications member is a boolean value that specifies that applications listed in RelatedApplications should be preferred over the web application. If the PreferRelatedApplications member is set to true, the user agent might suggest installing one of the related applications instead of this web app.
        /// If omitted, PreferRelatedApplications defaults to false.
        /// </summary>
        public bool PreferRelatedApplications { get; set; }
    }
}