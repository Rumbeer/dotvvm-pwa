using System.Collections.Generic;
using Chat.DAL;
using Chat.DAL.Entities;
using Chat.DAL.Repositories;
using Chat.Web.Services;
using DotVVM.Framework.Routing;
using DotVVM.PWA;
using DotVVM.PWA.Options.Manifest;
using DotVVM.PWA.Options.ServiceWorker;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;

namespace Chat.Web
{
    public class Startup
    {
        public IConfiguration Configuration { get; private set; }
        public Startup(IWebHostEnvironment env)
        {
            // Set up configuration sources.
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json");
            
            builder.AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDataProtection();
            services.AddAuthorization();
            services.AddWebEncoders();

            services.AddTransient<UserService>();
            services.AddTransient<IChatContactRepository, ChatContactRepository>();
            services.AddTransient<IChatMessageRepository, ChatMessageRepository>();
            services.AddTransient<CurrentUserProvider>();
            services.AddTransient<ChatContactsService>();
            services.AddTransient<ChatMessageService>();
            services.AddTransient<Seed>();

            services.AddEntityFrameworkSqlServer()
                .AddDbContext<AppDbContext>(options =>
                {
                    options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection"));
                });
            services.AddIdentity<User, Role>(options =>
                {
                    options.Password.RequireNonAlphanumeric = false;
                    options.Password.RequireDigit = false;
                    options.Password.RequiredLength = 3;
                    options.Password.RequireUppercase = false;
                })
                .AddEntityFrameworkStores<AppDbContext>()
                .AddDefaultTokenProviders();

            services.AddSignalR();
            services.ConfigureApplicationCookie(o => { o.LoginPath = new PathString("/Authentication/SignIn"); });
            services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
                .AddCookie(options =>
                {
                    options.LoginPath = "/Authentication/SignIn";
                });

            services.AddPwaServiceWorker(swOptions =>
            {
                swOptions.UseCustomServiceWorker = true;
                swOptions.CacheStrategies = new List<CachingStrategy>()
                {
                    new CachingStrategy()
                    {
                        CacheName = "custom-images",
                        ContentType = ContentType.Images,
                        StrategyType = StrategyType.CacheFirst,
                        ExpirationPlugin = new ExpirationPlugin()
                        {
                            MaxAgeSeconds = 60*60*24*30
                        }
                    },
                    new CachingStrategy()
                    {
                        CacheName = "custom-dotvvm-route",
                        ContentType = ContentType.DotvvmRoute,
                        RouteName = "Authentication_Register",
                        StrategyType = StrategyType.StaleWhileRevalidate
                    }
                };
            });

            services.AddPwaManifest(manifestOptions =>
            {
                manifestOptions.Name = "Chat Generated";
                manifestOptions.ShortName = "Chat";
                manifestOptions.StartUrl = "/";
                manifestOptions.Scope = "/";
                manifestOptions.Display = DisplayMode.Standalone;
                manifestOptions.BackgroundColor = "#FFFFFF";
                manifestOptions.ThemeColor = "#3176bb";
                manifestOptions.Categories = new[] {"business", "social"};
                manifestOptions.Description = "Chat application for testing PWA integration to DotVVM";
                manifestOptions.Dir = Dir.LeftToRight;
                manifestOptions.IarcRatingId = "IarcRatingId";
                manifestOptions.Lang = "cs";
                manifestOptions.Orientation = Orientation.Natural;
                manifestOptions.PreferRelatedApplications = true;
                manifestOptions.Icons = new[]
                {
                    new Icon
                    {
                        Src = "/Resources/Images/favicons/favicon-32x32.png",
                        Sizes = "32x32",
                        Type = "image/png",
                        Purposes = new[] {IconPurpose.Maskable}
                    },
                    new Icon
                    {
                        Src = "/Resources/Images/favicons/favicon-64x64.png",
                        Sizes = "64x64",
                        Type = "image/png",
                        Purposes = new[] {IconPurpose.Maskable}
                    },
                    new Icon
                    {
                        Src = "/Resources/Images/favicons/favicon-128x128.png",
                        Sizes = "128x128",
                        Type = "image/png",
                        Purposes = new[] {IconPurpose.Maskable}
                    },
                    new Icon
                    {
                        Src = "/Resources/Images/favicons/favicon-192x192.png",
                        Sizes = "192x192",
                        Type = "image/png"
                    },
                    new Icon
                    {
                        Src = "/Resources/Images/favicons/favicon-256x256.png",
                        Sizes = "256x256",
                        Type = "image/png"
                    },
                    new Icon
                    {
                        Src = "/Resources/Images/favicons/favicon-512x512.png",
                        Sizes = "512x512",
                        Type = "image/png",
                        Purposes = new[] {IconPurpose.Any}
                    },
                };
            });
            services.AddDotVVM<DotvvmStartup>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
			app.UseAuthentication();
            // use DotVVM
            var dotvvmConfiguration = app.UseDotVVM<DotvvmStartup>(env.ContentRootPath);
            dotvvmConfiguration.AssertConfigurationIsValid();
            
            // use static files
            app.UseStaticFiles(new StaticFileOptions
            {
                FileProvider = new PhysicalFileProvider(env.WebRootPath)
            });

            app.UseRouting();
            app.UseHttpsRedirection();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapHub<ChatHub>("/chat-hub");
            });
        }
    }
}
