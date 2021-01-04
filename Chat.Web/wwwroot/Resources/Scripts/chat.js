
dotvvm.events.init.subscribe(async () => {
    const hub = new signalR.HubConnectionBuilder().withAutomaticReconnect().withUrl("/chat-hub").build();
    hub.on("addChatMessage", () => {
        var reloadButton = document.getElementById("chat-reload-btn");
        reloadButton.click();
    });
    hub.onreconnected(async () => {
        await hub.send("JoinToGroup", dotvvm.viewModels.root.viewModel.SignalRGroupName());
    });

    await hub.start();
    await hub.send("JoinToGroup", dotvvm.viewModels.root.viewModel.SignalRGroupName());
});