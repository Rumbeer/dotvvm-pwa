using Chat.Common.Enums;

namespace Chat.Common.DTOs
{
    public class ChatMessageDTO
    {
        public string Text { get; set; }
        public ChatMemberType MessageType { get; set; }
    }
}