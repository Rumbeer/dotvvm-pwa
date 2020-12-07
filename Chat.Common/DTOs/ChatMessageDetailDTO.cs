using System;

namespace Chat.Common.DTOs
{
    public class ChatMessageDetailDTO
    {
        public string Text { get; set; }
        public DateTime SentDateTime { get; set; }
        public int SenderId { get; set; }
        public int ReceiverId { get; set; }
    }
}