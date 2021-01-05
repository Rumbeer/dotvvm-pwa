using System;
using System.Reflection;
using DotVVM.Framework.Configuration;
using DotVVM.Framework.ResourceManagement;
using DotVVM.PWA.Controls;
using DotVVM.PWA.Options.Manifest;
using DotVVM.PWA.Options.ServiceWorker;
using DotVVM.PWA.Presenters;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;

namespace DotVVM.PWA
{
    public static class PwaInstaller
    {
        public static void ConfigurePwa(this DotvvmConfiguration config)
        {
            config.ConfigureManifest();
            config.ConfigureServiceWorker();
            config.ConfigureControls();
            config.ConfigureResources();
        }

        public static IServiceCollection AddPwaManifest(this IServiceCollection services, Action<ManifestOptions> setupManifest)
        {
            services.Configure(setupManifest);
            services.AddTransient<ManifestPresenter>();

            return services;
        }

        public static IServiceCollection AddPwaServiceWorker(this IServiceCollection services, Action<ServiceWorkerOptions> setupServiceWorker)
        {
            services.Configure(setupServiceWorker);
            services.AddTransient<ServiceWorkerConfigurationPresenter>();

            var serviceWorkerOptions = new ServiceWorkerOptions();
            setupServiceWorker(serviceWorkerOptions);
            if (!serviceWorkerOptions.UseCustomServiceWorker)
            {
                services.AddTransient<ServiceWorkerPresenter>();
            }

            return services;
        }

        private static void ConfigureManifest(this DotvvmConfiguration config)
        {
            if (config.ServiceProvider.GetService<ManifestPresenter>() != default)
            {
                config.RouteTable.Add("Manifest", "Manifest.json", typeof(ManifestPresenter));
            }
        }

        private static void ConfigureServiceWorker(this DotvvmConfiguration config)
        {
            if (config.ServiceProvider.GetService<ServiceWorkerConfigurationPresenter>() != default)
            {
                config.RouteTable.Add("ServiceWorkerConfiguration", "ServiceWorkerConfiguration.js", typeof(ServiceWorkerConfigurationPresenter));
            }

            if (config.ServiceProvider.GetService<ServiceWorkerPresenter>() != default)
            {
                config.RouteTable.Add("ServiceWorker", "ServiceWorker.js", typeof(ServiceWorkerPresenter));
            }
        }

        private static void ConfigureControls(this DotvvmConfiguration config)
        {
            config.Markup.AddCodeControls("pwa", typeof(RegisterServiceWorker));
            config.Markup.AddCodeControls("pwa", typeof(OfflineHandler));
            config.Markup.AddCodeControls("pwa", typeof(OfflineAlert));
            config.Markup.AddMarkupControl("pwa", "RegisterManifest", "embedded://DotVVM.PWA/Controls/RegisterManifest.dotcontrol");

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
                    RenderPosition = ResourceRenderPosition.Body,
                    Dependencies = new[] { "dotvvm", "knockout" }
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