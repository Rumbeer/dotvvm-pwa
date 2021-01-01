using System.Threading;
using System.Threading.Tasks;
using Chat.Common.DTOs;
using DotVVM.Framework.Runtime.Filters;
using Microsoft.AspNetCore.SignalR;

namespace Chat.Web.Services
{
    [Authorize]
    public class ChatHub : Hub
    {
        public async Task JoinToGroup(string groupName)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, groupName);
        }
    }

    public static class ChatHubExtensions
    {
        public static async Task AddChatMessageAsync(this IHubContext<ChatHub> chatHub, ChatMessageDetailDTO chatMessage)
        {
            await chatHub.Clients
                .Group($"Chat_{chatMessage.SenderId}_{chatMessage.ReceiverId}")
                .SendAsync("addChatMessage", CancellationToken.None);
            await chatHub.Clients
                .Group($"Chat_{chatMessage.ReceiverId}_{chatMessage.SenderId}")
                .SendAsync("addChatMessage", CancellationToken.None);
            await chatHub.Clients
                .Group($"Chat_{chatMessage.SenderId}")
                .SendAsync("addChatMessage", CancellationToken.None);
            await chatHub.Clients
                .Group($"Chat_{chatMessage.ReceiverId}")
                .SendAsync("addChatMessage", CancellationToken.None);
        }
    }
}