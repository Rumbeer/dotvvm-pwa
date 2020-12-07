using System;
using DotVVM.Framework.Binding;
using DotVVM.Framework.Controls;
using DotVVM.Framework.Hosting;

namespace DotVVM.PWA.Controls
{
    public class RegisterServiceWorker : HtmlGenericControl
    {
        [MarkupOptions(AllowBinding = false)]
        public string ServiceWorkerPath
        {
            get { return (string)GetValue(ServiceWorkerPathProperty); }
            set { SetValue(ServiceWorkerPathProperty, value); }
        }
        public static readonly DotvvmProperty ServiceWorkerPathProperty
            = DotvvmProperty.Register<string, RegisterServiceWorker>(c => c.ServiceWorkerPath, "/ServiceWorker.js");

        [MarkupOptions(AllowBinding = false)]
        public string Scope
        {
            get { return (string)GetValue(ScopeProperty); }
            set { SetValue(ScopeProperty, value); }
        }
        public static readonly DotvvmProperty ScopeProperty
            = DotvvmProperty.Register<string, RegisterServiceWorker>(c => c.Scope, "/");


        public RegisterServiceWorker() : base(null)
        {
            
        }
        protected override void OnInit(IDotvvmRequestContext context)
        {
            context.ResourceManager.AddRequiredResource("register-sw");
            base.OnPreRender(context);
        }

        protected override void AddAttributesToRender(IHtmlWriter writer, IDotvvmRequestContext context)
        {
            var knockoutBindingGroup = new KnockoutBindingGroup();
            {
                knockoutBindingGroup.Add("swPath", this, ServiceWorkerPathProperty);
                knockoutBindingGroup.Add("scope", this, ScopeProperty);
            }
            writer.AddKnockoutDataBind("dotvvm-pwa-registerServiceWorker", knockoutBindingGroup);
        }
    }
}