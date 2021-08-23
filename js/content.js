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
    let hostname = window.location.hostname.replace('www.', '');
    hostname = hostname.replace('.com', '');
    if(!sites.has(hostname)){
        sites.set(hostname, 0);
    }
    setInterval(()=> {
        if(focused){
            sites.set(hostname, parseInt(sites.get(hostname), 10) + 1);
            chrome.storage.sync.set({"sites": Object.fromEntries(sites)});
        }
    }, 60 * 1000);
});


let motivational_text;
let motivational_image;

chrome.storage.sync.get(["motivational_text"], function (result){
    motivational_text = result.motivational_text;
});
chrome.storage.sync.get(["motivational_image"], function (result){
    motivational_image = result.motivational_image;
})

chrome.storage.sync.get(["blocked_sites"], function(result){
    chrome.storage.sync.get(["time"], function(time_result){
        chrome.storage.sync.get(["rest_start"], function(rest_start){
            chrome.storage.sync.get(["rest_end"], function(rest_end){
                let startTime = rest_start.rest_start + ":00";
                let endTime = rest_end.rest_end + ":00";
                let currentDate = new Date()
                let startDate = new Date(currentDate.getTime());
                startDate.setHours(startTime.split(":")[0]);
                startDate.setMinutes(startTime.split(":")[1]);
                startDate.setSeconds(startTime.split(":")[2]);

                let endDate = new Date(currentDate.getTime());
                endDate.setHours(endTime.split(":")[0]);
                endDate.setMinutes(endTime.split(":")[1]);
                endDate.setSeconds(endTime.split(":")[2]);

                let valid = startDate < currentDate && endDate > currentDate;
                if(!valid){
                    let blocked_sites = result.blocked_sites;
                    let time = time_result.time;
                    for(let i = 0; i < blocked_sites.length; i++){
                        let blocked_site = blocked_sites[i]
                        let tim = time[i].split("-")[0];
                        if(blocked_site !== ""){
                            if(window.location.hostname.includes(blocked_site)){
                                setTimeout(function(){
                                    if(motivational_image === ""){
                                        window.open("https://saksham4106.github.io/display.html?text=" + motivational_text , "_self");
                                    }else{
                                        window.open("https://saksham4106.github.io/display.html?text=" + motivational_text + "&img=" + motivational_image , "_self");
                                    }
                                    tim = tim.split(":")[1] + ":" + tim.split(":")[1];
                                }, (parseInt(tim.split(":")[1], 10) * 60 * 1000) - tim.split(":")[0] * 60 * 1000);

                                setInterval(() => {
                                    tim = (parseInt(tim.split(":")[0], 10) + 1) + ":" + tim.split(":")[1];
                                    time.splice(i, 0, tim)
                                    chrome.storage.sync.set({"time": time}, function(){
                                    });
                                }, 60 * 1000);
                                return;
                            }
                        }
                    }
                }
            });
        });
    })
});