chrome.storage.sync.get(["blocked_sites"], function(result){
    chrome.storage.sync.get(["time"], function(time_result){
        let blocked_sites = result.blocked_sites;
        let time = time_result.time;    
        for(var i = 0; i < blocked_sites.length; i++){
            var blocked_site = blocked_sites[i]
            var tim = time[i].split("-")[0];
            var block_time = time[i].split("-")[1];

            if(blocked_site != ""){
                if(window.location.hostname.includes(blocked_site)){
                    setTimeout(function(){
                        window.open("https://cl1p.net/pls%20study", "_self");
                        tim = tim.split(":")[1] + ":" + tim.split(":")[1];
                        block_time = new Date.getTime();
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