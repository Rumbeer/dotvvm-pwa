using System.Threading.Tasks;
using DotVVM.Framework.Hosting;
using DotVVM.Framework.ViewModel;
using Microsoft.AspNetCore.Identity;

namespace Chat.Web.ViewModels
{
    public class MasterPageViewModel : DotvvmViewModelBase
    {
		public async Task SignOut()
        {
            await Context.GetAuthentication().SignOutAsync(IdentityConstants.ApplicationScheme);
            Context.RedirectToRoute("Authentication_SignIn", null, false, false);
        }
    }
}
