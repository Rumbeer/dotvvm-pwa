using System.Collections.Generic;
using System.Threading.Tasks;
using Chat.Common.DTOs;
using Chat.DAL.Repositories;
using Chat.Web.Services;
using DotVVM.Framework.Runtime.Filters;
using DotVVM.Framework.ViewModel;

namespace Chat.Web.ViewModels
{
    [Authorize]
    public class DashboardViewModel : MasterPageViewModel
    {
        private readonly ChatContactsService _chatContactsService;
        private readonly CurrentUserProvider _currentUserProvider;
        [Bind(Direction.ServerToClient)]
        public int Id { get; set; }
        public List<ChatContactDTO> Contacts { get; set; }
        public string NameFilter { get; set; }

        public DashboardViewModel(ChatContactsService chatContactsService, CurrentUserProvider currentUserProvider)
        {
            _chatContactsService = chatContactsService;
            _currentUserProvider = currentUserProvider;
        }

        public override async Task Load()
        {
            if (!Context.IsPostBack)
            {
                Contacts = await _chatContactsService.GetChatContactsAsync(_currentUserProvider.Id, NameFilter);
                Id = _currentUserProvider.Id;
            }
            await base.Load();
        }

        public async Task FindAllUsers()
        {
            Contacts = await _chatContactsService.GetChatContactsAsync(_currentUserProvider.Id, NameFilter);
        }
    }
}