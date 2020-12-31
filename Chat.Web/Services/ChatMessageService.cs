using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Chat.Common.DTOs;
using Chat.DAL.Repositories;
using DotVVM.Framework.ViewModel;
using DotVVM.Mediator;
using Microsoft.AspNetCore.SignalR;

namespace Chat.Web.Services
{
    public class ChatMessageService
    {
        private readonly IChatMessageRepository _chatMessageRepository;
        private readonly IHubContext<MediatorHub> _mediatorHubContext;

        public ChatMessageService(IChatMessageRepository chatMessageRepository, 
            IHubContext<MediatorHub> mediatorHubContext)
        {
            _chatMessageRepository = chatMessageRepository;
            _mediatorHubContext = mediatorHubContext;
        }

        public async Task AddChatMessageAsync(ChatMessageDetailDTO chatMessage)
        {
            await _chatMessageRepository.AddMessageAsync(chatMessage);
            await _mediatorHubContext.Clients
                .Group($"{chatMessage.SenderId}_{chatMessage.ReceiverId}")
                .SendAsync("ChatMessageAdded", CancellationToken.None);
            await _mediatorHubContext.Clients
                .Group($"{chatMessage.ReceiverId}_{chatMessage.SenderId}")
                .SendAsync("ChatMessageAdded", CancellationToken.None); 
            await _mediatorHubContext.Clients
                .Group($"{chatMessage.SenderId}")
                .SendAsync("ChatMessageAdded", CancellationToken.None);
            await _mediatorHubContext.Clients
                .Group($"{chatMessage.ReceiverId}")
                .SendAsync("ChatMessageAdded", CancellationToken.None);
        }

        [AllowStaticCommand]
        public Task<List<ChatMessageDTO>> GetChatMessagesAsync(int currentUserId, int receiverId)
        {
            return _chatMessageRepository.GetChatMessagesAsync(currentUserId, receiverId);
        }
    }
}