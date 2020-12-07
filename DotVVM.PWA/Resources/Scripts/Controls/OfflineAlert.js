ko.bindingHandlers["dotvvm-pwa-offlineAlert"] = {
    init: function(element) {
        window.addEventListener('online', function () {
            if (element.style.display != "none") {
                element.style.display = "none";
            }
        });
        window.addEventListener('offline', function () {
            if (element.style.display == "none") {
                element.style.display = "";
            }
        });
    }
}