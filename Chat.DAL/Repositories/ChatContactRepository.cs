using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices.ComTypes;
using System.Threading.Tasks;
using Chat.Common.DTOs;
using Chat.Common.Enums;
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
            var chatMembers = await _context.ChatMessages
                .Include(cm => cm.ChatMembers)
                .ThenInclude(members => members.User)
                .Where(cm => cm.ChatMembers.Any(member => member.UserId == userId))
                .SelectMany(cm => cm.ChatMembers.Where(member => member.UserId != userId))
                .ToListAsync();


            var contacts = chatMembers
                .GroupBy(cm => cm.UserId)
                .Select(g => g.First().User)
                .Select(c => new ChatContactDTO()
                {
                    UserId = c.Id,
                    FirstName = c.FirstName,
                    ImageUrl = c.ImageUrl,
                    LastNameName = c.LastName,
                })
                .ToList();

            foreach (var contact in contacts)
            {
                var lastChatMessage = _context.ChatMessages
                    .Include(cm => cm.ChatMembers)
                    .ThenInclude(members => members.User)
                    .Where(cm => cm.ChatMembers.Any(member => member.UserId == contact.UserId)
                                 && cm.ChatMembers.Any(member => member.UserId == userId))
                    .OrderByDescending(cm => cm.SentDateTime)
                    .First();
                contact.LastMessage = new LastMessageDTO()
                {
                    LastMessageText = lastChatMessage.Text,
                    LastMessageDateTime = lastChatMessage.SentDateTime,
                    IsCurrentUserSender = lastChatMessage.ChatMembers.First(member => member.UserId == userId).Type == ChatMemberType.Sender
                };
            }
            return contacts;
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