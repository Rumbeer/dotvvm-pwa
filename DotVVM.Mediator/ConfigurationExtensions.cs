using System.Reflection;
using DotVVM.BusinessPack;
using DotVVM.Framework.Configuration;
using DotVVM.Framework.ResourceManagement;
using DotVVM.Mediator.Controls;

namespace Microsoft.Extensions.DependencyInjection
{
    public static class ConfigurationExtensions
    {
        public static IServiceCollection AddDotvvmMediator(this IServiceCollection services)
        {
            services.AddSignalR();
            services.Configure<DotvvmConfiguration>(config =>
                {
                    config.Markup.AddCodeControls("dot", typeof(Mediator));

                    config.Resources.Register("mediator-js", new ScriptResource(new EmbeddedResourceLocation(typeof(ConfigurationExtensions).GetTypeInfo().Assembly, "DotVVM.Mediator.Resources.Controls.Mediator.script.js"))
                    {
                        Dependencies = new[] { BusinessPackResources.BusinessPackScript }
                    });
                });
            return services;
        }

        public static IDotvvmServiceCollection AddDotvvmMediator(this IDotvvmServiceCollection services)
        {

            return services;
        }
    }
}