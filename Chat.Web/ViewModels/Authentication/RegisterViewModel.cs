using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Chat.Common.Resources;
using Chat.Web.Services;
using DotVVM.Framework.Hosting;
using DotVVM.Framework.ViewModel.Validation;
using Microsoft.AspNetCore.Identity;

namespace Chat.Web.ViewModels.Authentication
{
   public class RegisterViewModel : MasterPageViewModel, IValidatableObject
    {
        private readonly UserService userService;


        [Required]
        public string UserName { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }

        [Required]
        public string Password { get; set; }
        [Required]
        public string ConfirmPassword { get; set; }

        public RegisterViewModel(UserService userService)
        {
            this.userService = userService;
        }


        public async Task Register()
        {

            var identityResult = await userService.RegisterAsync(UserName, FirstName, LastName, Password);
            if (identityResult.Succeeded)
            {
                await SignIn();
            }
            else
            {
                var modelErrors = ConvertIdentityErrorsToModelErrors(identityResult);
                Context.ModelState.Errors.AddRange(modelErrors);
                Context.FailOnInvalidModelState();
            }

            Context.RedirectToRoute("Dashboard", allowSpaRedirect: false);
        }
        
        public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
        {
            if (Password != ConfirmPassword)
            {
                yield return new ValidationResult(Texts.Error_PasswordsMatch, new[] { nameof(ConfirmPassword) });
            }
        }

        private async Task SignIn()
        {
            var claimsIdentity = await userService.SignInAsync(UserName, Password);
			await Context.GetAuthentication().SignInAsync(IdentityConstants.ApplicationScheme, new ClaimsPrincipal(claimsIdentity));
        }

        private IEnumerable<ViewModelValidationError> ConvertIdentityErrorsToModelErrors(IdentityResult identityResult)
        {
            return identityResult.Errors.Select(identityError => new ViewModelValidationError
            {
                ErrorMessage = identityError.Description,
                PropertyPath = nameof(UserName)
            });
        }
    }
}
