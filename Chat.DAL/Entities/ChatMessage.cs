using System;
using System.Collections.Generic;

namespace Chat.DAL.Entities
{
    public class ChatMessage
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public DateTime SentDateTime { get; set; }

        public virtual IList<ChatMember> ChatMembers { get; set; }

    }
}