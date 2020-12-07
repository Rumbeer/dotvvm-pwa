using DotVVM.Framework.Controls;
using DotVVM.Framework.Hosting;

namespace DotVVM.PWA.Controls
{
    public class OfflineAlert : HtmlGenericControl
    {
        public OfflineAlert() : base("span")
        {

        }

        protected override void OnInit(IDotvvmRequestContext context)
        {
            context.ResourceManager.AddRequiredResource("offline-alert");
            base.OnPreRender(context);
        }

        protected override void AddAttributesToRender(IHtmlWriter writer, IDotvvmRequestContext context)
        {
            base.AddAttributesToRender(writer, context);

            writer.AddKnockoutDataBind("dotvvm-pwa-offlineAlert", new KnockoutBindingGroup());
            writer.AddStyleAttribute("display", "none");

        }
    }
}