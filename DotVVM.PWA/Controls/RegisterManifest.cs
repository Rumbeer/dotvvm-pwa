using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using DotVVM.Framework.Binding;
using DotVVM.Framework.Controls;
using DotVVM.Framework.Hosting;
using DotVVM.PWA.Options.Manifest;
using Microsoft.Extensions.Options;

namespace DotVVM.PWA.Controls
{
    public class RegisterManifest : DotvvmMarkupControl
    {
        /// <summary>
        /// Sets the value of meta tag with name "apple-mobile-web-app-title". ThemeColor value of manifest will be used if no other value is specified.
        /// </summary>
        [MarkupOptions(AllowBinding = false)]
        public string AppleWebAppTitle
        {
            get { return (string)GetValue(AppleWebAppTitleProperty); }
            set { SetValue(AppleWebAppTitleProperty, value); }
        }
        public static readonly DotvvmProperty AppleWebAppTitleProperty
            = DotvvmProperty.Register<string, RegisterManifest>(c => c.AppleWebAppTitle, null);

        /// <summary>
        /// Defines path to the apple touch icon.
        /// </summary>
        [MarkupOptions(AllowBinding = false)]
        public string AppleTouchIconPath
        {
            get { return (string)GetValue(AppleTouchIconPathProperty); }
            set { SetValue(AppleTouchIconPathProperty, value); }
        }
        public static readonly DotvvmProperty AppleTouchIconPathProperty
            = DotvvmProperty.Register<string, RegisterManifest>(c => c.AppleTouchIconPath, null);

        /// <summary>
        /// Sets the value of meta tag with name "apple-mobile-web-app-status-bar-style". Supported values are default, black and black-translucent.
        /// </summary>
        [MarkupOptions(AllowBinding = false)]
        public string AppleStatusBarColor
        {
            get { return (string)GetValue(AppleStatusBarColorProperty); }
            set { SetValue(AppleStatusBarColorProperty, value); }
        }
        public static readonly DotvvmProperty AppleStatusBarColorProperty
            = DotvvmProperty.Register<string, RegisterManifest>(c => c.AppleStatusBarColor, "default");

        /// <summary>
        /// Path to the web app manifest. Default value is "/manifest.json".
        /// </summary>
        [MarkupOptions(AllowBinding = false)]
        public string ManifestPath
        {
            get { return (string)GetValue(ManifestPathProperty); }
            set { SetValue(ManifestPathProperty, value); }
        }
        public static readonly DotvvmProperty ManifestPathProperty
            = DotvvmProperty.Register<string, RegisterManifest>(c => c.ManifestPath, "/manifest.json");

        /// <summary>
        /// Sets the value of meta tag with name "theme-color". ThemeColor value of manifest will be used if no other value is specified.
        /// </summary>
        public string ThemeColor
        {
            get { return (string)GetValue(ThemeColorProperty); }
            set { SetValue(ThemeColorProperty, value); }
        }
        public static readonly DotvvmProperty ThemeColorProperty
            = DotvvmProperty.Register<string, RegisterManifest>(c => c.ThemeColor, null);

        /// <summary>
        /// If content is set to yes, the web application runs in full-screen mode; otherwise, it does not. Display value of manifest will be used if no other value is specified.
        /// </summary>
        public bool? AppleMobileWebAppCapable
        {
            get { return (bool?)GetValue(AppleMobileWebAppCapableProperty); }
            set { SetValue(AppleMobileWebAppCapableProperty, value); }
        }
        public static readonly DotvvmProperty AppleMobileWebAppCapableProperty
            = DotvvmProperty.Register<bool?, RegisterManifest>(c => c.AppleMobileWebAppCapable, null);


        protected override void OnInit(IDotvvmRequestContext context)
        {
            if (context.Services.GetService(typeof(IOptions<ManifestOptions>)) is IOptions<ManifestOptions> manifestOptions)
            {
                if (string.IsNullOrWhiteSpace(AppleWebAppTitle))
                {
                    AppleWebAppTitle = manifestOptions.Value.Name;
                }
                if (string.IsNullOrWhiteSpace(ThemeColor))
                {
                    ThemeColor = manifestOptions.Value.ThemeColor;
                }
                if (AppleMobileWebAppCapable == null)
                {
                    AppleMobileWebAppCapable = manifestOptions.Value.Display != DisplayMode.Browser;
                }
            }
            base.OnPreRender(context);
        }   
    }
}

