function display(){
    chrome.storage.sync.get(["blocked_sites"], function(result){
        if(result.blocked_sites.length != 0){
            document.getElementById("data").innerHTML = result.blocked_sites;
        }else{
            document.getElementById("data").innerText = "You haven't blocked anything :("
        }
    });
}

window.onload = display;