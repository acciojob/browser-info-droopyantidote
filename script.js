document.addEventListener("DOMContentLoaded", function() {
    var browserInfoDiv = document.getElementById("browser-info");

    if (browserInfoDiv) {
        var browserName = navigator.appName;
        var browserVersion = navigator.appVersion;

        // Update the content of the browser-info div
        browserInfoDiv.textContent = "You are using " + browserName + " version " + browserVersion;
    } else {
        console.error("The browser-info div is not found in the document.");
    }
});
