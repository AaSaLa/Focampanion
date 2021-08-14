chrome.storage.sync.get(["blocked_sites"], function(result){
    let blocked_sites = result.blocked_sites;
    for(var i = 0; i < blocked_sites.length; i++){
        var blocked_site = blocked_sites[i]
        if(blocked_site != ""){
            if(window.location.hostname.includes(blocked_site)){
                window.open("https://cl1p.net/pls%20study", "_self")
                return;
            }
        }
    }
});