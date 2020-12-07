using System;
using System.Linq;
using DotVVM.Framework.Utils;

namespace DotVVM.PWA
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

    public class Icon
    {
        /// <summary>
        /// The path to the image file. If Src is a relative URL, the base URL will be the URL of the manifest.
        /// </summary>
        public string Src { get; set; }

        /// <summary>
        /// A hint as to the media type of the image. The purpose of this member is to allow a user agent to quickly ignore images with media types it does not support.
        /// </summary>
        public string Type { get; set; }

        /// <summary>
        /// A string containing space-separated image dimensions.
        /// </summary>
        public string Sizes { get; set; }

        /// <summary>
        /// Defines the purpose of the image, for example if the image is intended to serve some special purpose in the context of the host OS (i.e., for better integration).
        /// </summary>
        public IconPurpose[] Purposes { get; set; }
    }

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
    public class RelatedApplication
    {
        public RelatedApplicationPlatform Platform { get; set; }
    }

    [AttributeUsage(AttributeTargets.Field)]
    internal class ManifestValueAttribute : Attribute
    {

        public ManifestValueAttribute(string manifestValue)
        {
            ManifestValue = manifestValue;
        }

        public string ManifestValue { get; private set; }

        public static string ToManifestValue(Enum value)
        {
            var type = value.GetType();
            var fieldInfo = type.GetField(value.ToString());

            var attributes = fieldInfo.GetCustomAttributes(typeof(ManifestValueAttribute), false) as ManifestValueAttribute[];
            return attributes?.Any() == true ? attributes[0].ManifestValue : value.ToString();
        }
    }

    internal static class EnumExtensions
    {
        public static string ToManifestValue(this Enum value)
        {
            var type = value.GetType();
            var fieldInfo = type.GetField(value.ToString());

            var attributes = fieldInfo.GetCustomAttributes(typeof(ManifestValueAttribute), false) as ManifestValueAttribute[];
            return attributes?.Any() == true ? attributes[0].ManifestValue : value.ToString();
        }
    }
}