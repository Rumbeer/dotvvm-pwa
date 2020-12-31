using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Chat.Common.DTOs;

namespace Chat.DAL.Repositories
{
    public interface IChatContactRepository
    {
        Task<List<ChatContactDTO>> GetChatContactsAsync(int userId, string filterName = null);
    }
}