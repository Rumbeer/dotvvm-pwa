using System.Collections.Generic;
using System.Threading.Tasks;
using Chat.Common.DTOs;

namespace Chat.DAL.Repositories
{
    public interface IChatMessageRepository
    {
        Task<List<ChatMessageDTO>> GetChatMessagesAsync(int currentUserId, int receiverId);
        Task AddMessageAsync(ChatMessageDetailDTO message);
    }
}