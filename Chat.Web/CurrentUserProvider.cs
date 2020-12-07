using System;
using System.Security.Claims;
using Microsoft.AspNetCore.Http;

namespace Chat.Web
{
    public class CurrentUserProvider
    {
        private readonly HttpContext _httpContext;

        public int Id => TryGetId() ?? throw new Exception($"Claim with {nameof(Id)} doesn't exist.");
        public string FullName => TryGetFullName() ?? throw new Exception($"Claims with {nameof(FullName)} don't exist.");
        public string Email => TryGetEmail() ?? throw new Exception($"Claim with {nameof(Email)} doesn't exist.");
        public string Role => TryGetRoleName();

        public CurrentUserProvider(IHttpContextAccessor httpContextAccessor)
        {
            _httpContext = httpContextAccessor.HttpContext;
        }

        private string TryGetRoleName()
        {
            var claimsIdentity = _httpContext.User.Identity as ClaimsIdentity;
            return claimsIdentity?.FindFirst(ClaimTypes.Role)?.Value;
        }

        public int? TryGetId()
        {
            var claimsIdentity = _httpContext.User.Identity as ClaimsIdentity;
            return TryParseClaim(claimsIdentity?.FindFirst(ClaimTypes.NameIdentifier)?.Value);
        }

        private string TryGetFullName()
        {
            var claimsIdentity = _httpContext.User.Identity as ClaimsIdentity;
            var firstName = claimsIdentity?.FindFirst(ClaimTypes.GivenName)?.Value;
            var lastName = claimsIdentity?.FindFirst(ClaimTypes.Surname)?.Value;
            if (firstName == null || lastName == null)
            {
                return null;
            }
            return $"{firstName} {lastName}";
        }

        private string TryGetEmail()
        {
            var claimsIdentity = _httpContext.User.Identity as ClaimsIdentity;
            return claimsIdentity?.FindFirst(ClaimTypes.Name)?.Value;
        }

        private int? TryParseClaim(string value)
        {
            if (value != null && int.TryParse(value, out var id))
            {
                return id;
            }
            else
            {
                return null;
            }
        }
    }
}