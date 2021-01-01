using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Chat.Common.DTOs;
using Chat.DAL.Repositories;
using DotVVM.Framework.ViewModel;
using Microsoft.AspNetCore.SignalR;

namespace Chat.Web.Services
{
    public class ChatMessageService
    {
        private readonly IChatMessageRepository _chatMessageRepository;
        private readonly IHubContext<ChatHub> _chatHubContext;

        public ChatMessageService(IChatMessageRepository chatMessageRepository, 
            IHubContext<ChatHub> chatHubContext)
        {
            _chatMessageRepository = chatMessageRepository;
            _chatHubContext = chatHubContext;
        }

        public async Task AddChatMessageAsync(ChatMessageDetailDTO chatMessage)
        {
            await _chatMessageRepository.AddMessageAsync(chatMessage);
            await _chatHubContext.AddChatMessageAsync(chatMessage);
        }

        [AllowStaticCommand]
        public Task<List<ChatMessageDTO>> GetChatMessagesAsync(int currentUserId, int receiverId)
        {
            return _chatMessageRepository.GetChatMessagesAsync(currentUserId, receiverId);
        }
    }
}