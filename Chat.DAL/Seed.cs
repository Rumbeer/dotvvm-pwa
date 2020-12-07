using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Chat.Common.Enums;
using Chat.DAL.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace Chat.DAL
{
    public sealed class Seed : IDisposable
    {
        private readonly AppDbContext _context;
        private readonly UserManager<User> _userManager;

        public Seed(AppDbContext context, UserManager<User> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        public async Task MigrateAndSeedDataAsync(bool migrate = true)
        {
            if (migrate)
            {
                await _context.Database.MigrateAsync();
            }

            await AddUsersAsync();
            await AddChatMessagesAsync();
        }

        private async Task AddChatMessagesAsync()
        {
            if (await _context.ChatMessages.AnyAsync())
            {
                return;
            }

            await _context.ChatMessages.AddAsync(new ChatMessage()
            {
                Text = "Ahoj",
                SentDateTime = DateTime.Now.AddDays(-1),
                ChatMembers = new List<ChatMember>()
                {
                    new ChatMember() {Type = ChatMemberType.Sender, UserId = 1},
                    new ChatMember() {Type = ChatMemberType.Receiver, UserId = 2}
                }
            });
            await _context.ChatMessages.AddAsync(new ChatMessage()
            {
                Text = "Čau",
                SentDateTime = DateTime.Now.AddHours(-1),
                ChatMembers = new List<ChatMember>()
                {
                    new ChatMember() {Type = ChatMemberType.Sender, UserId = 2},
                    new ChatMember() {Type = ChatMemberType.Receiver, UserId = 1}
                }
            });
            await _context.ChatMessages.AddAsync(new ChatMessage()
            {
                Text = "Nazdar",
                SentDateTime = DateTime.Now.AddHours(-2),
                ChatMembers = new List<ChatMember>()
                {
                    new ChatMember() {Type = ChatMemberType.Sender, UserId = 3},
                    new ChatMember() {Type = ChatMemberType.Receiver, UserId = 1}
                }
            });

            await _context.SaveChangesAsync();
        }

        public async Task AddUsersAsync()
        {
            if (await _context.Users.AnyAsync())
            {
                return;
            }

            await _userManager.CreateAsync(new User("josef", "Josef", "Košta"), "heslo");
            await _userManager.CreateAsync(new User("pavel", "Pavel", "Novák"), "heslo");
            await _userManager.CreateAsync(new User("franta", "František", "Svoboda"), "heslo");
            await _userManager.CreateAsync(new User("jirka", "Jiří", "Dvořák"), "heslo");
            await _userManager.CreateAsync(new User("jarmila", "Jarmila", "Veselá"), "heslo");
            await _userManager.CreateAsync(new User("jana", "Jana", "Krejčí"), "heslo");
        }

        public void Dispose()
        {
            _context?.Dispose();
            _userManager?.Dispose();
        }
    }
}