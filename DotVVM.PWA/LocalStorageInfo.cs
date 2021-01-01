using System;
using DotVVM.Framework.Compilation.Javascript;
using DotVVM.Framework.Compilation.Javascript.Ast;

namespace DotVVM.PWA
{
    public class LocalStorageInfo
    {
        public T Get<T>(string name)
        {
            throw new NotSupportedException("LocalStorage extension parameter translation is not supported on server. Use StaticCommand instead.");
        }

        public void Set<T>(string name, T obj)
        {
            throw new NotSupportedException("LocalStorage extension parameter translation is not supported on server. Use StaticCommand instead.");
        }

        public static void RegisterJavascriptTranslations(JavascriptTranslatableMethodCollection methods)
        {
            methods.AddMethodTranslator(typeof(LocalStorageInfo), nameof(Get),
                new GenericMethodCompiler((a, m) =>
                    new JsIdentifierExpression("dotvvm").Member("pwa").Member("get").Invoke(a[1])
                        .WithAnnotation(MayBeNullAnnotation.Instance)
                        .WithAnnotation(new ViewModelInfoAnnotation(m.ReturnType))
                ));
            methods.AddMethodTranslator(typeof(LocalStorageInfo), nameof(Set),
                new GenericMethodCompiler(a =>
                    new JsIdentifierExpression("dotvvm").Member("pwa").Member("set").Invoke(
                        a[1], a[2].WithAnnotation(ShouldBeObservableAnnotation.Instance)
                    )
                ));
        }
    }
}