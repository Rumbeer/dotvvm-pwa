using System.ComponentModel.DataAnnotations.Schema;
using Chat.Common.Enums;

namespace Chat.DAL.Entities
{
    public class ChatMember
    {
        public int Id { get; set; }
        public ChatMemberType Type { get; set; }

        [ForeignKey(nameof(User))]
        public int UserId { get; set; }
        public virtual User User { get; set; }

    }
}