using System.Security.Claims;
using System.Threading.Tasks;
using Chat.DAL.Entities;
using Microsoft.AspNetCore.Identity;

namespace Chat.Web.Services
{
    public class UserService
    {
        private readonly UserManager<User> _userManager;
		
        public UserService(UserManager<User> userManager)
        {
            this._userManager = userManager;
        }

        public async Task<ClaimsIdentity> SignInAsync(string userName, string password)
        {
            var user = await _userManager.FindByNameAsync(userName);
            if (user != null)
            {
                var result = await _userManager.CheckPasswordAsync(user, password);
                if (result)
                {
                    return CreateIdentity(user);
                }
            }
            return null;
        }

        public async Task<IdentityResult> RegisterAsync(string userName, string firstName, string lastName, string password)
        {
            var user = new User(userName, firstName, lastName);
            return await _userManager.CreateAsync(user, password);
        }

        private ClaimsIdentity CreateIdentity(User user)
        {
            var identity = new ClaimsIdentity(
                new []
                {
                    new Claim(ClaimTypes.Name, user.UserName),
                    new Claim(ClaimTypes.NameIdentifier, user.Id.ToString())
                },"Cookie");
            return identity;
        }

    }
}
