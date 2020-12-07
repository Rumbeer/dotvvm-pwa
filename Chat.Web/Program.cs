using System;
using System.Threading.Tasks;
using Chat.DAL;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace Chat.Web
{
    public class Program
    {
        public static async Task Main(string[] args)
        {
            var webHost = BuildWebHost(args);
            await InitializeAsync(webHost.Services);
            webHost.Run();
        }

        public static async Task InitializeAsync(IServiceProvider serviceProvider)
        {
            using var serviceScope = serviceProvider.CreateScope();
            using var dbSeed = serviceScope.ServiceProvider.GetService<Seed>();
            await dbSeed.MigrateAndSeedDataAsync();
        }

        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>()
                .ConfigureLogging((context, builder) =>
                {
                    builder.AddConsole();
                })
                .Build();
    }
}
