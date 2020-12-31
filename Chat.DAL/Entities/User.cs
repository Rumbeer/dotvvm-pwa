using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace Chat.DAL.Entities
{
    public class User : IdentityUser<int>
    {
        public User(string userName, string firstName, string lastName)
            :base(userName)
        {
            FirstName = firstName;
            LastName = lastName;
        }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string ImageUrl { get; set; }
    }

    public class Role : IdentityRole<int>
    {

    }
}