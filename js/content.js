document.onkeydown = function (e){
    if(e.ctrlKey){
        if(e.keyCode === 66){
        }
    }
}

let focused = true;
window.onfocus = function() {
    focused = true;
};
window.onblur = function() {
    focused = false;
};

chrome.storage.sync.get(["sites"], function(result){
    let sites = new Map(Object.entries(result.sites));
    if(!sites.has(window.location.hostname)){
        sites.set(window.location.hostname, 0);
    }
    setInterval(()=> {
        if(focused){
            sites.set(window.location.hostname, parseInt(sites.get(window.location.hostname), 10) + 1);
            chrome.storage.sync.set({"sites": Object.fromEntries(sites)});
        }
    }, 60 * 1000);
});


chrome.storage.sync.get(["blocked_sites"], function(result){
    chrome.storage.sync.get(["time"], function(time_result){
        let blocked_sites = result.blocked_sites;
        let time = time_result.time;
        for(let i = 0; i < blocked_sites.length; i++){
            let blocked_site = blocked_sites[i]
            let tim = time[i].split("-")[0];
            if(blocked_site !== ""){
                if(window.location.hostname.includes(blocked_site)){
                    setTimeout(function(){
                        window.open("https://cl1p.net/pls%20study", "_self");
                        tim = tim.split(":")[1] + ":" + tim.split(":")[1];
                    }, (parseInt(tim.split(":")[1]) * 60 * 1000) - tim.split(":")[0] * 60 * 1000);

                    setInterval(() => {
                        tim = (parseInt(tim.split(":")[0]) + 1) + ":" + tim.split(":")[1];
                        time.splice(i, 0, tim)
                        chrome.storage.sync.set({"time": time}, function(){
                        });
                    }, 60 * 1000);
                    return;
                }
            }
        }
    })
});