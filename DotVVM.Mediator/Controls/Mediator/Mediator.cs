using DotVVM.BusinessPack.Controls;
using DotVVM.Framework.Binding;
using DotVVM.Framework.Binding.Expressions;
using DotVVM.Framework.Controls;
using DotVVM.Framework.Hosting;
using DotVVM.Utils.HtmlElements;

namespace DotVVM.Mediator.Controls
{
    public class Mediator : CompositeHtmlControlBase
    {
        [MarkupOptions(Required = true, AllowBinding = false)]
        public static readonly DotvvmProperty MethodNameProperty = DotvvmProperty.Register<string, Mediator>(c => c.MethodName);

        public string MethodName
        {
            get => (string)(GetValue(MethodNameProperty) ?? string.Empty);
            set => SetValue(MethodNameProperty, value);
        }

        [MarkupOptions(AllowBinding = true)]
        public static readonly DotvvmProperty GroupNameProperty = DotvvmProperty.Register<string, Mediator>(c => c.GroupName);
        public string GroupName
        {
            get => (string)(GetValue(GroupNameProperty) ?? string.Empty);
            set => SetValue(GroupNameProperty, value);
        }

        [MarkupOptions(Required = true, AllowHardCodedValue = false)]
        public static readonly DotvvmProperty CommandProperty = DotvvmProperty.Register<Command, Mediator>(t => t.Command);
        public Command Command
        {
            get => (Command)GetValue(CommandProperty)!;
            set => SetValue(CommandProperty, value);
        }

        [MarkupOptions(AllowHardCodedValue = false)]
        public static readonly DotvvmProperty IsConnectedProperty = DotvvmProperty.Register<bool, Mediator>(c => c.IsConnected, false);
        public bool IsConnected
        {
            get => (bool?)GetValue(IsConnectedProperty) ?? false;
            set => SetValue(IsConnectedProperty, value);
        }

        [MarkupOptions(AllowHardCodedValue = true, AllowBinding = true)]
        public static readonly DotvvmProperty RunCommandOnReconnectProperty = DotvvmProperty.Register<bool, Mediator>(c => c.RunCommandOnReconnect, false);
        public bool RunCommandOnReconnect
        {
            get => (bool?)GetValue(RunCommandOnReconnectProperty) ?? false;
            set => SetValue(RunCommandOnReconnectProperty, value);
        }

        public Mediator(BindingCompilationService bindingService)
            : base(bindingService)
        {
        }

        protected override void OnInit(IDotvvmRequestContext context)
        {
            base.OnInit(context);
            SetValue(Validation.EnabledProperty, false);
            context.ResourceManager.AddRequiredResource("mediator-js");
        }

        protected override void OnLoad(IDotvvmRequestContext context)
        {
            PopulateChildren();
            base.OnLoad(context);
        }

        protected virtual void PopulateChildren()
        {
            Children.Clear();

            var wrapper = CreateWrapper();
            {
                wrapper.Attributes.Add("style", "display: none;");
            }

            Children.Add(wrapper);
        }

        protected virtual WrapperElement CreateWrapper()
        {
            var wrapper = HtmlFactory.CreateWrapper("div");
            {
                wrapper.AddControlKnockoutDataBinding(ControlName, GetControlBinding());
            }

            return wrapper;
        }

        protected virtual ControlBinding GetControlBinding()
        {
            var binding = new ControlBinding
            {
                {this, MethodNameProperty},
                {this, GroupNameProperty},
                {this, IsConnectedProperty},
                {this, RunCommandOnReconnectProperty}
            };
            binding.AddCommand(this, CommandProperty);
            return binding;
        }
    }

}