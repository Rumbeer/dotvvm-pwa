using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Chat.Common.DTOs;
using Chat.DAL.Repositories;
using DotVVM.Framework.ViewModel;
using Microsoft.AspNetCore.Authorization;

namespace Chat.Web.ViewModels
{
    [Authorize]
    public class ChatViewModel : MasterPageViewModel
    {
        private readonly IChatMessageRepository _chatMessageRepository;
        private readonly CurrentUserProvider _currentUserProvider;

        [FromRoute("UserId")]
        public int ChatMemberUserId { get; set; }
        public List<ChatMessageDTO> Messages { get; set; }
        public string NewMessageText { get; set; }
        public string Text { get; set; }
        public int Number { get; set; }
        public Model Model { get; set; }
        public Model TestModel { get; set; }
        public string TestText { get; set; } = "ahoj";
        public int TestNumber { get; set; } = 5;
        public ChatViewModel(IChatMessageRepository chatMessageRepository, CurrentUserProvider currentUserProvider)
        {
            _chatMessageRepository = chatMessageRepository;
            _currentUserProvider = currentUserProvider;
        }

        public override async Task PreRender()
        {
            if (!Context.IsPostBack)
            {
                Messages = await _chatMessageRepository.GetChatMessagesAsync(_currentUserProvider.Id, ChatMemberUserId);
                TestModel = new Model(){Text = "Text", Texts = new List<string>(){"text1", "text2"}};
                TestText = "perrender";
            }
            await base.PreRender();
        }

        public async Task Change()
        {
            Text = "Changed in VM";
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

            await _chatMessageRepository.AddMessageAsync(newMessage);
            NewMessageText = string.Empty;
        }
    }

    public class Model
    {
        public string Text { get; set; }
        public List<string> Texts { get; set; }
    }
}

