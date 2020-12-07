using System.Collections.Generic;
using System.Threading.Tasks;
using Chat.Common.DTOs;
using Chat.DAL.Repositories;
using DotVVM.Framework.Runtime.Filters;
using DotVVM.Framework.ViewModel;

namespace Chat.Web.ViewModels
{
    [Authorize]
    public class DashboardViewModel : MasterPageViewModel
    {
        private readonly IChatContactRepository _repository;
        private readonly CurrentUserProvider _currentUserProvider;
        [Bind(Direction.ServerToClient)]
        public int Id { get; set; }
        public List<ChatContactDTO> Contacts { get; set; }

        public DashboardViewModel(IChatContactRepository repository, CurrentUserProvider currentUserProvider)
        {
            _repository = repository;
            _currentUserProvider = currentUserProvider;
        }

        public override async Task Load()
        {
            Contacts = await _repository.GetChatContactsAsync(_currentUserProvider.Id);
            Id = _currentUserProvider.Id;
            await base.Load();
        }
    }
}