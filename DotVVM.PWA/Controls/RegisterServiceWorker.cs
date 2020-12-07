using System;
using DotVVM.Framework.Controls;
using DotVVM.Framework.Hosting;

namespace DotVVM.PWA.Controls
{
    public class RegisterServiceWorker : HtmlGenericControl
    {
        public RegisterServiceWorker() : base(null)
        {
            
        }
        protected override void OnInit(IDotvvmRequestContext context)
        {
            context.ResourceManager.AddRequiredResource("register-sw");
            base.OnPreRender(context);
        }
    }
}