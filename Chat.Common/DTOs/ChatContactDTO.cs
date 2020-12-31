using System;

namespace Chat.Common.DTOs
{
    public class ChatContactDTO
    {
        public string FirstName { get; set; }
        public string LastNameName { get; set; }
        public string ImageUrl { get; set; }
        public int UserId { get; set; }
        public LastMessageDTO LastMessage { get; set; }

    }

    public class LastMessageDTO
    {
        public string LastMessageText { get; set; }
        public DateTime LastMessageDateTime { get; set; }
        public bool IsCurrentUserSender { get; set; }
    }
}