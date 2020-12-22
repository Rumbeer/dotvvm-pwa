using System.IO;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using DotVVM.Framework.Hosting;
using DotVVM.PWA.Templates.Manifest;
using Microsoft.Extensions.Options;
using Newtonsoft.Json.Linq;

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
                var json = BuildManifest().ToString();
                await writer.WriteAsync(json);
                await writer.FlushAsync();
            }
        }

        public JObject BuildManifest()
        {
            
            var manifest = new JObject();
            if (!string.IsNullOrWhiteSpace(_manifestOptions.Value.Name))
            {
                manifest.Add("name", _manifestOptions.Value.Name);
            }
            if (!string.IsNullOrWhiteSpace(_manifestOptions.Value.ShortName))
            {
                manifest.Add("short_name", _manifestOptions.Value.ShortName);
            }
            if (!string.IsNullOrWhiteSpace(_manifestOptions.Value.Scope))
            {
                manifest.Add("scope", _manifestOptions.Value.Scope);
            }
            if (!string.IsNullOrWhiteSpace(_manifestOptions.Value.StartUrl))
            {
                manifest.Add("start_url", _manifestOptions.Value.StartUrl);
            }
            if (!string.IsNullOrWhiteSpace(_manifestOptions.Value.BackgroundColor))
            {
                manifest.Add("background_color", _manifestOptions.Value.BackgroundColor);
            }
            if (!string.IsNullOrWhiteSpace(_manifestOptions.Value.ThemeColor))
            {
                manifest.Add("theme_color", _manifestOptions.Value.ThemeColor);
            }
            if (_manifestOptions.Value.Categories?.Any() == true)
            {
                manifest.Add("categories", new JArray(_manifestOptions.Value.Categories));
            }
            if (!string.IsNullOrWhiteSpace(_manifestOptions.Value.Description))
            {
                manifest.Add("description", _manifestOptions.Value.Description);
            }
            if (!string.IsNullOrWhiteSpace(_manifestOptions.Value.Lang))
            {
                manifest.Add("lang", _manifestOptions.Value.Lang);
            }
            if (!string.IsNullOrWhiteSpace(_manifestOptions.Value.IarcRatingId))
            {
                manifest.Add("iarc_rating_id", _manifestOptions.Value.IarcRatingId);
            }
            manifest.Add("display", _manifestOptions.Value.Display.ToManifestValue());
            manifest.Add("dir", _manifestOptions.Value.Dir.ToManifestValue());
            manifest.Add("orientation", _manifestOptions.Value.Orientation.ToManifestValue());
            manifest.Add("prefer_related_applications", _manifestOptions.Value.PreferRelatedApplications);

            var icons = new JArray();
            foreach (var icon in _manifestOptions.Value.Icons)
            {
                var manifestIcon = new JObject();
                if (icon.Purposes?.Any() == true)
                {
                    manifestIcon.Add("purpose", string.Join(" ", icon.Purposes.Select(p => p.ToManifestValue())));
                }
                manifestIcon.Add("src", icon.Src);
                manifestIcon.Add("type", icon.Type);
                manifestIcon.Add("sizes", icon.Sizes);
                icons.Add(manifestIcon);
            }

            manifest.Add("icons", icons);
            return manifest;
        }
    }
}