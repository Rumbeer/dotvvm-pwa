using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices.ComTypes;
using System.Threading.Tasks;
using Chat.Common.DTOs;
using Chat.DAL.Entities;
using Microsoft.EntityFrameworkCore;

namespace Chat.DAL.Repositories
{
    public class ChatContactRepository : IChatContactRepository
    {
        private readonly AppDbContext _context;

        public ChatContactRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<List<ChatContactDTO>> GetChatContactsAsync(int userId)
        {
            var contacts = await _context.ChatMessages
                .Include(cm => cm.ChatMembers)
                .ThenInclude(members => members.User)
                .Where(cm => cm.ChatMembers.Any(member => member.UserId == userId))
                .SelectMany(cm => cm.ChatMembers.Where(member => member.UserId != userId))
                .ToListAsync();
                
                
            return contacts
                .GroupBy(cm => cm.UserId)
                .Select(g => g.First().User)
                .Select(c => new ChatContactDTO()
                {
                    UserId = c.Id, 
                    FirstName = c.FirstName,
                    ImageUrl = c.ImageUrl,
                    LastNameName = c.LastName
                })
                .ToList();
        }

        private class ChatMemberUserIdEqualityComparer : EqualityComparer<ChatMember>
        {
            public override bool Equals(ChatMember x, ChatMember y)
            {
                if (x == null && y == null)
                {
                    return true;
                }

                if (x == null || y == null)
                {
                    return false;
                }

                return x.UserId == y.UserId;
            }

            public override int GetHashCode(ChatMember obj)
            {
                return obj.GetHashCode();
            }
        }
    }

}