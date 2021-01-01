using System.IO;
using System.Reflection;
using System.Threading.Tasks;
using DotVVM.Framework.Hosting;
using DotVVM.Framework.Utils;

namespace DotVVM.PWA.Presenters
{
    public class ServiceWorkerPresenter : IDotvvmPresenter
    {
        public async Task ProcessRequest(IDotvvmRequestContext context)
        {
            context.HttpContext.Response.ContentType = "text/javascript";
            var serviceWorker = LoadResource();
            await serviceWorker.CopyToAsync(context.HttpContext.Response.Body);
        }

        private Stream LoadResource()
        {
            return typeof(PwaInstaller)
                .GetTypeInfo().Assembly
                .GetManifestResourceStream("DotVVM.PWA.Resources.Scripts.ServiceWorker.js")
                .NotNull();
        }
    }
}