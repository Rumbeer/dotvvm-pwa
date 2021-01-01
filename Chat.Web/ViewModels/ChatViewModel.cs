using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Chat.Common.DTOs;
using Chat.DAL.Repositories;
using Chat.Web.Services;
using DotVVM.Framework.ViewModel;
using Microsoft.AspNetCore.Authorization;

namespace Chat.Web.ViewModels
{
    [Authorize]
    public class ChatViewModel : MasterPageViewModel
    {
        private readonly ChatMessageService _chatMessageService;
        private readonly CurrentUserProvider _currentUserProvider;

        [FromRoute("UserId")]
        public int ChatMemberUserId { get; set; }
        public int Id { get; set; }
        public string SignalRGroupName { get; set; }
        public List<ChatMessageDTO> Messages { get; set; }
        public string NewMessageText { get; set; }
        public ChatViewModel(ChatMessageService chatMessageService, CurrentUserProvider currentUserProvider)
        {
            _chatMessageService = chatMessageService;
            _currentUserProvider = currentUserProvider;
        }

        public override async Task PreRender()
        {
            if (!Context.IsPostBack)
            {
                Id = _currentUserProvider.Id;
                Messages = await _chatMessageService.GetChatMessagesAsync(_currentUserProvider.Id, ChatMemberUserId);
                SignalRGroupName = $"{Id}_{ChatMemberUserId}";
            }
            await base.PreRender();
        }

        public async Task AddNewMessage()
        {
            if (string.IsNullOrWhiteSpace(NewMessageText))
            {
                return;
            }

            var newMessage = new ChatMessageDetailDTO()
            {
                Text = NewMessageText,
                SentDateTime = DateTime.Now,
                SenderId = _currentUserProvider.Id,
                ReceiverId = ChatMemberUserId
            };

            await _chatMessageService.AddChatMessageAsync(newMessage);
            NewMessageText = string.Empty;
        }
    }
}

