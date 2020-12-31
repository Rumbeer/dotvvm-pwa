using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Chat.Common.DTOs;
using Chat.Common.Enums;
using Chat.DAL.Entities;
using Microsoft.EntityFrameworkCore;

namespace Chat.DAL.Repositories
{
    public class ChatMessageRepository : IChatMessageRepository
    {
        private readonly AppDbContext _context;

        public ChatMessageRepository(AppDbContext context)
        {
            _context = context;
        }
        public Task<List<ChatMessageDTO>> GetChatMessagesAsync(int currentUserId, int receiverId)
        {
            var messages = _context.ChatMessages
                .Where(m => m.ChatMembers.All(cm => cm.UserId == currentUserId || cm.UserId == receiverId))
                .OrderByDescending(m => m.SentDateTime);

            return messages.Select(m => new ChatMessageDTO()
            {
                MessageType = m.ChatMembers.First(cm => cm.UserId == currentUserId).Type,
                Text = m.Text
            }).ToListAsync();
        }

        public async Task AddMessageAsync(ChatMessageDetailDTO message)
        {
            var newMessage = new ChatMessage()
            {
                Text = message.Text,
                SentDateTime = message.SentDateTime,
                ChatMembers = new List<ChatMember>()
                {
                    new ChatMember()
                    {
                        Type = ChatMemberType.Sender,
                        UserId = message.SenderId
                    },
                    new ChatMember()
                    {
                        Type = ChatMemberType.Receiver,
                        UserId = message.ReceiverId
                    }
                }
            };

            await _context.ChatMessages.AddAsync(newMessage);
            await _context.SaveChangesAsync();
        }
    }
}