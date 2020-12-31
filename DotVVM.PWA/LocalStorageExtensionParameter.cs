using System;
using System.Linq.Expressions;
using DotVVM.Framework.Binding.HelperNamespace;
using DotVVM.Framework.Compilation.ControlTree;
using DotVVM.Framework.Compilation.ControlTree.Resolved;
using DotVVM.Framework.Compilation.Javascript;
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

    public class LocalStorageInfo
    {
        public T Get<T>(string name)
        {
            throw new NotImplementedException();
        }

        public void Set<T>(string name, T obj)
        {
            throw new NotImplementedException();
        }

        public static void RegisterJavascriptTranslations(JavascriptTranslatableMethodCollection methods)
        {
            methods.AddMethodTranslator(typeof(LocalStorageInfo), nameof(Get),
                new GenericMethodCompiler((a, m) =>
                    new JsIdentifierExpression("dotvvm").Member("pwa").Member("get").Invoke(
                            a[1].WithAnnotation(ObservableUnwrapInvocationAnnotation.Instance)
                        )
                        .WithAnnotation(MayBeNullAnnotation.Instance)
                        .WithAnnotation(new ViewModelInfoAnnotation(m.ReturnType))
                ));
            methods.AddMethodTranslator(typeof(LocalStorageInfo), nameof(Set),
                new GenericMethodCompiler(a =>
                    new JsIdentifierExpression("dotvvm").Member("pwa").Member("set").Invoke(
                        a[1].WithAnnotation(ObservableUnwrapInvocationAnnotation.Instance),
                        a[2].WithAnnotation(ShouldBeObservableAnnotation.Instance)
                    )
                ));
        }
    }
}