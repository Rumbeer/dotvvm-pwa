using DotVVM.Framework.Binding;
using DotVVM.Framework.Binding.Expressions;
using DotVVM.Framework.Controls;
using DotVVM.Framework.Hosting;

namespace DotVVM.PWA.Controls
{
    public class OfflineHandler : HtmlGenericControl
    {
        [MarkupOptions(Required = true)]
        public Command OnlinePageLoad
        {
            get { return (Command)GetValue(OnlinePageLoadProperty); }
            set { SetValue(OnlinePageLoadProperty, value); }
        }
        public static readonly DotvvmProperty OnlinePageLoadProperty
            = DotvvmProperty.Register<Command, OfflineHandler>(c => c.OnlinePageLoad, null);

        [MarkupOptions(Required = true)]
        public Command OfflinePageLoad
        {
            get { return (Command)GetValue(OfflinePageLoadProperty); }
            set { SetValue(OfflinePageLoadProperty, value); }
        }
        public static readonly DotvvmProperty OfflinePageLoadProperty
            = DotvvmProperty.Register<Command, OfflineHandler>(c => c.OfflinePageLoad, null);


        public OfflineHandler() : base("div")
        {

        }

        protected override void OnInit(IDotvvmRequestContext context)
        {
            context.ResourceManager.AddRequiredResource("offline-handler");
            base.OnPreRender(context);
        }

        protected override void AddAttributesToRender(IHtmlWriter writer, IDotvvmRequestContext context)
        {
            writer.AddStyleAttribute("display", "none");
            writer.AddAttribute("class", "dotvvm__pwa__offline-handler", true);
            var onlinePageLoadBinding = GetCommandBinding(OnlinePageLoadProperty);
            if (onlinePageLoadBinding != null)
            {
                writer.AddAttribute("onlinepageload", KnockoutHelper.GenerateClientPostBackScript(nameof(OnlinePageLoad), onlinePageLoadBinding, this), true, ";");
            }
            var offlinePageLoadBinding = GetCommandBinding(OfflinePageLoadProperty);
            if (offlinePageLoadBinding != null)
            {
                writer.AddAttribute("offlinepageload", KnockoutHelper.GenerateClientPostBackScript(nameof(OfflinePageLoad), offlinePageLoadBinding, this, new PostbackScriptOptions()), true, ";");
            }
            base.AddAttributesToRender(writer, context);

            writer.AddKnockoutDataBind("dotvvm-pwa-offlineHandler", new KnockoutBindingGroup());
        }
    }
}