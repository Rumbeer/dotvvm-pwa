using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace DotVVM.Mediator
{
    [System.Diagnostics.CodeAnalysis.SuppressMessage("Style", "VSTHRD200:Use \"Async\" suffix for async methods")]
    public class MediatorHub : Hub
    {
        public Task JoinToGroup(string groupName)
        {
            return Groups.AddToGroupAsync(Context.ConnectionId, groupName);
        }
    }
}