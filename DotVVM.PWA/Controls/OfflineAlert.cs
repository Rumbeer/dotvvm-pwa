using System;
using DotVVM.Framework.Binding;
using DotVVM.Framework.Controls;
using DotVVM.Framework.Hosting;

namespace DotVVM.PWA.Controls
{
    public class OfflineAlert : HtmlGenericControl
    {
        /// <summary>
        /// Gets or sets the text on the offline alert.
        /// </summary>
        public string Text
        {
            get { return (string) GetValue(TextProperty)!; }
            set { SetValue(TextProperty, value ?? throw new ArgumentNullException(nameof(value))); }
        }

        public static readonly DotvvmProperty TextProperty =
            DotvvmProperty.Register<string, OfflineAlert>(t => t.Text, "");


        public OfflineAlert() : base("div")
        {
        }

        protected override void OnInit(IDotvvmRequestContext context)
        {
            context.ResourceManager.AddRequiredResource("offline-alert");
            base.OnPreRender(context);
        }

        protected override void OnPreRender(IDotvvmRequestContext context)
        {
            if ((HasBinding(TextProperty) || !string.IsNullOrEmpty(Text)) && !HasOnlyWhiteSpaceContent())
            {
                throw new DotvvmControlException(this,
                    "Text property and inner content of the <pwa:OfflineAlert> control cannot be set at the same time!");
            }
            if (HasValueBinding(TextProperty))
            {
                var literal = new Literal {RenderSpanElement = false};
                literal.SetBinding(c => c.Text, GetBinding(TextProperty));
                Children.Add(literal);
            }

            base.OnPreRender(context);
        }

        protected override void RenderContents(IHtmlWriter writer, IDotvvmRequestContext context)
        {
            if (!HasValueBinding(TextProperty) && IsPropertySet(TextProperty))
            {
                if (!HasOnlyWhiteSpaceContent())
                {
                    throw new DotvvmControlException(this,
                        "Text property and inner content of the <pwa:OfflineAlert> control cannot be set at the same time!");
                }

                writer.WriteText(Text);
            }
            else
            {
                base.RenderContents(writer, context);
            }
        }

        protected override void AddAttributesToRender(IHtmlWriter writer, IDotvvmRequestContext context)
        {
            base.AddAttributesToRender(writer, context);

            writer.AddKnockoutDataBind("dotvvm-pwa-offlineAlert", new KnockoutBindingGroup());
            writer.AddStyleAttribute("display", "none");
        }
    }
}