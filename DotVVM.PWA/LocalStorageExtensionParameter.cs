using System.Linq.Expressions;
using DotVVM.Framework.Binding.HelperNamespace;
using DotVVM.Framework.Compilation.ControlTree;
using DotVVM.Framework.Compilation.ControlTree.Resolved;
using DotVVM.Framework.Compilation.Javascript.Ast;
using DotVVM.Framework.Utils;

namespace DotVVM.PWA
{
    public class LocalStorageExtensionParameter : BindingExtensionParameter
    {
        public LocalStorageExtensionParameter() 
            : base("_localStorage", new ResolvedTypeDescriptor(typeof(LocalStorageInfo)), true)
        {
        }

        public override Expression GetServerEquivalent(Expression controlParameter)
        {
            return Expression.New(typeof(LocalStorageInfo));
        }

        public override JsExpression GetJsTranslation(JsExpression dataContext)
        {
            return new JsObjectExpression();
        }
    }
}