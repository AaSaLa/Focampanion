chrome.storage.sync.get("blocked_site", ({ blocked_site }) => {
    if(blocked_site != ""){
        if(window.location.hostname.includes(blocked_site)){
            window.open("https://cl1p.net/pls%20study", "_self")
        }
    }
});