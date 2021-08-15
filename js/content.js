chrome.storage.sync.get(["blocked_sites"], function(result){
    chrome.storage.sync.get(["time"], function(time_result){
        let blocked_sites = result.blocked_sites;
        let time = time_result.time;    
        for(var i = 0; i < blocked_sites.length; i++){
            var blocked_site = blocked_sites[i]
            var tim = time[i];
            var time_array = tim.split(":");
            if(blocked_site != ""){
                if(window.location.hostname.includes(blocked_site)){
                    setTimeout(function(){
                        window.open("https://cl1p.net/pls%20study", "_self");
                    }, (parseInt(time_array[1]) * 60 * 1000) - [0] * 60 * 1000);

                    setInterval(() => {
                        tim = (parseInt(time_array[0]) + 1) + ":" + time_array[1];
                        console.log(tim);
                        time.splice(i, 0, tim)
                        chrome.storage.sync.set({"time": time}, () => {});
                    }, 60 * 1000);
                    return;
                }
            }
        }
    })
});