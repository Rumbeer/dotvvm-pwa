using System.ComponentModel.DataAnnotations;
using System.Security.Claims;
using System.Threading.Tasks;
using Chat.Web.Services;
using DotVVM.Framework.Hosting;
using DotVVM.Framework.ViewModel.Validation;
using Microsoft.AspNetCore.Identity;

namespace Chat.Web.ViewModels.Authentication
{
    public class SignInViewModel : MasterPageViewModel
    {

        private readonly UserService userService;
        private readonly CurrentUserProvider _currentUserProvider;

        [Required]
        public string UserName { get; set; }
        public string Password { get; set; }

        public SignInViewModel(UserService userService, CurrentUserProvider currentUserProvider)
        {
            this.userService = userService;
            _currentUserProvider = currentUserProvider;
        }

        public override Task PreRender()
        {
            if (!Context.IsPostBack)
            {
                if (_currentUserProvider.TryGetId() != null)
                {
                    Context.RedirectToRoute("Dashboard");
                }
            }
            return base.PreRender();
        }

        public async Task SignIn()
        {
            var identity = await userService.SignInAsync(UserName, Password);
            if (identity == null)
            {
                Context.ModelState.Errors.Add(new ViewModelValidationError
                {
                    ErrorMessage = "Incorrect login",
                    PropertyPath = nameof(Password)
                });
                Context.FailOnInvalidModelState();
            }
			else
            {
                await Context.GetAuthentication().SignInAsync(IdentityConstants.ApplicationScheme, new ClaimsPrincipal(identity));
				Context.RedirectToRoute("Dashboard", allowSpaRedirect: false);
			} 
        }
    }
}
