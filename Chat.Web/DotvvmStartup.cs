using System.Linq;
using DotVVM.Framework.Configuration;
using DotVVM.Framework.ResourceManagement;
using DotVVM.Framework.Routing;
using DotVVM.PWA;
using Microsoft.Extensions.DependencyInjection;

namespace Chat.Web
{
    public class DotvvmStartup : IDotvvmStartup, IDotvvmServiceConfigurator
    {
        // For more information about this class, visit https://dotvvm.com/docs/tutorials/basics-project-structure
        public void Configure(DotvvmConfiguration config, string applicationPath)
        {
            ConfigureRoutes(config, applicationPath);
            ConfigureControls(config, applicationPath);
            ConfigureResources(config, applicationPath);

            config.ConfigurePwa();
        }

        private void ConfigureRoutes(DotvvmConfiguration config, string applicationPath)
        {
            config.RouteTable.Add("Welcome", "", "Views/Welcome.dothtml");
            config.RouteTable.Add("Dashboard", "dashboard", "Views/Dashboard.dothtml");
            config.RouteTable.Add("Authentication_SignIn", "authentication/signin",
                "Views/Authentication/SignIn.dothtml");
            config.RouteTable.Add("Authentication_Register", "authentication/register",
                "Views/Authentication/Register.dothtml");
            config.RouteTable.Add("Chat", "chat/{UserId}", "Views/Chat.dothtml", new {UserId = 0});
            //config.RouteTable.AutoDiscoverRoutes(new DefaultRouteStrategy(config));    
        }

        private void ConfigureControls(DotvvmConfiguration config, string applicationPath)
        {
            // register code-only controls and markup controls
        }

        private void ConfigureResources(DotvvmConfiguration config, string applicationPath)
        {
            config.Resources.Register("signalr",
                new ScriptResource
                {
                    Location = new UrlResourceLocation("https://cdnjs.cloudflare.com/ajax/libs/microsoft-signalr/3.1.7/signalr.min.js"),
                    RenderPosition = ResourceRenderPosition.Body
                });
            config.Resources.Register("chat",
                new ScriptResource
                {
                    Location = new UrlResourceLocation("~/Resources/Scripts/chat.js"),
                    Dependencies = new[] { "dotvvm", "signalr" },
                    RenderPosition = ResourceRenderPosition.Body
                }); 
            // register custom resources and adjust paths to the built-in resources
            config.Resources.Register("Styles", new StylesheetResource()
            {
                Location = new UrlResourceLocation("~/styles.css")
            });

            ((ScriptResource) config.Resources.FindNamedResource("dotvvm.debug").Resource).Dependencies =
                ((ScriptResource) config.Resources.FindNamedResource("dotvvm.debug").Resource).Dependencies
                .Concat(new[] {"offline-handler"}).ToArray();

            LocalStorageInfo.RegisterJavascriptTranslations(config.Markup.JavascriptTranslator.MethodCollection);
        }

        public void ConfigureServices(IDotvvmServiceCollection options)
        {
            options.AddDefaultTempStorages("temp");
        }
    }
}