using System.Collections.Generic;
using System.Threading.Tasks;
using Chat.Common.DTOs;
using Chat.DAL.Repositories;
using DotVVM.Framework.ViewModel;

namespace Chat.Web.Services
{
    public class ChatContactsService
    {
        private readonly IChatContactRepository _chatContactRepository;

        public ChatContactsService(IChatContactRepository chatContactRepository)
        {
            _chatContactRepository = chatContactRepository;
        }

        [AllowStaticCommand]
        public Task<List<ChatContactDTO>> GetChatContactsAsync(int id, string nameFilter = null)
        {
            return _chatContactRepository.GetChatContactsAsync(id, nameFilter);
        }
    }
}