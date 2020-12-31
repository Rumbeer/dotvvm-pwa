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

        public async Task<List<ChatContactDTO>> GetChatContactsAsync(int userId, string filterName = null)
        {
            var contacts = await FilterChatContactsAsync(userId, filterName);

            foreach (var contact in contacts)
            {
                var lastChatMessage = _context.ChatMessages
                    .Include(cm => cm.ChatMembers)
                    .ThenInclude(members => members.User)
                    .Where(cm => cm.ChatMembers.Any(member => member.UserId == contact.UserId)
                                 && cm.ChatMembers.Any(member => member.UserId == userId))
                    .OrderByDescending(cm => cm.SentDateTime)
                    .FirstOrDefault();
                if (lastChatMessage == null)
                {
                    continue;
                }
                contact.LastMessage = new LastMessageDTO()
                {
                    LastMessageText = lastChatMessage.Text,
                    LastMessageDateTime = lastChatMessage.SentDateTime,
                    IsCurrentUserSender = lastChatMessage.ChatMembers.First(member => member.UserId == userId).Type == ChatMemberType.Sender
                };
            }
            return contacts;
        }

        private async Task<List<ChatContactDTO>> FilterChatContactsAsync(int userId, string filterName)
        {
            if (!string.IsNullOrWhiteSpace(filterName))
            {
                return await _context.Users.Where(u => u.FirstName.Contains(filterName))
                    .Select(c => new ChatContactDTO()
                    {
                        UserId = c.Id,
                        FirstName = c.FirstName,
                        ImageUrl = c.ImageUrl,
                        LastNameName = c.LastName,
                    })
                    .ToListAsync();
            }

            var chatMembers = await _context.ChatMessages
                .Include(cm => cm.ChatMembers)
                .ThenInclude(members => members.User)
                .Where(cm => cm.ChatMembers.Any(member => member.UserId == userId))
                .SelectMany(cm => cm.ChatMembers.Where(member => member.UserId != userId))
                .ToListAsync();

            return chatMembers
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