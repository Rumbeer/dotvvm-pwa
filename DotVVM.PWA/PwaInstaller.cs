using System;
using System.Reflection;
using DotVVM.Framework.Configuration;
using DotVVM.Framework.ResourceManagement;
using DotVVM.PWA.Controls;
using DotVVM.PWA.Presenters;
using Microsoft.Extensions.DependencyInjection;

namespace DotVVM.PWA
{
    public static class PwaInstaller
    {
        public static void ConfigurePwa(this DotvvmConfiguration config)
        {
            config.ConfigureControls();
            config.ConfigureResources();
        }

        public static IServiceCollection AddPwa(this IServiceCollection services, Action<ManifestOptions> setupManifest)
        {
            services.Configure(setupManifest);
            var a = DisplayMode.Browser;
            a.ToManifestValue();
            services.AddTransient<ServiceWorkerPresenter>();
            services.AddTransient<ManifestPresenter>();

            return services;
        }

        private static void ConfigureControls(this DotvvmConfiguration config)
        {
            config.RouteTable.Add("ServiceWorker", "ServiceWorker.js", typeof(ServiceWorkerPresenter));
            config.RouteTable.Add("Manifest", "Manifest.json", typeof(ManifestPresenter));
            // register code-only controls and markup controls
            config.Markup.AddCodeControls("pwa", typeof(RegisterServiceWorker));
            config.Markup.AddCodeControls("pwa", typeof(OfflineHandler));
            config.Markup.AddCodeControls("pwa", typeof(OfflineAlert));

            config.Markup.DefaultExtensionParameters.Add(
                new LocalStorageExtensionParameter());
        }

        private static void ConfigureResources(this DotvvmConfiguration config)
        {
            config.Resources.Register("register-sw",
                new ScriptResource(
                    new EmbeddedResourceLocation(
                        typeof(PwaInstaller).GetTypeInfo().Assembly,
                        "DotVVM.PWA.Resources.Scripts.Controls.RegisterServiceWorker.js"))
                {
                    RenderPosition = ResourceRenderPosition.Body
                });
            config.Resources.Register("offline-handler",
                new ScriptResource(
                    new EmbeddedResourceLocation(
                        typeof(PwaInstaller).GetTypeInfo().Assembly,
                        "DotVVM.PWA.Resources.Scripts.Controls.OfflineHandler.js"))
                {
                    RenderPosition = ResourceRenderPosition.Body,
                    Dependencies = new []{ "dotvvm", "knockout" }
                });
            config.Resources.Register("offline-alert",
                new ScriptResource(
                    new EmbeddedResourceLocation(
                        typeof(PwaInstaller).GetTypeInfo().Assembly,
                        "DotVVM.PWA.Resources.Scripts.Controls.OfflineAlert.js"))
                {
                    RenderPosition = ResourceRenderPosition.Body,
                    Dependencies = new[] { "dotvvm", "knockout" }
                });
            config.Resources.Register("local-storage",
                new ScriptResource(
                    new EmbeddedResourceLocation(
                        typeof(PwaInstaller).GetTypeInfo().Assembly,
                        "DotVVM.PWA.Resources.Scripts.Controls.LocalStorage.js"))
                {
                    RenderPosition = ResourceRenderPosition.Body,
                    Dependencies = new [] { "dotvvm", "knockout" }
                });
        }
    }
}