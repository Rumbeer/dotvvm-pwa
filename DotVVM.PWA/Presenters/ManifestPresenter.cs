using System.IO;
using System.Threading.Tasks;
using DotVVM.Framework.Hosting;
using DotVVM.PWA.Templates.Manifest;
using Microsoft.Extensions.Options;

namespace DotVVM.PWA.Presenters
{
    public class ManifestPresenter : IDotvvmPresenter
    {
        private readonly IOptions<ManifestOptions> _manifestOptions;

        public ManifestPresenter(IOptions<ManifestOptions> manifestOptions)
        {
            _manifestOptions = manifestOptions;
        }

        public async Task ProcessRequest(IDotvvmRequestContext context)
        {
            context.HttpContext.Response.ContentType = "application/json";
            using (var writer = new StreamWriter(context.HttpContext.Response.Body))
            {
                var template = new ManifestTemplate()
                {
                    Options = _manifestOptions.Value
                };

                await writer.WriteAsync(template.TransformText());
                await writer.FlushAsync();
            }
        }
    }
}