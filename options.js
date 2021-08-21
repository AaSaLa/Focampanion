window.onload = function (){
    chrome.storage.sync.get(["motivational_text"], function (result){
        chrome.storage.sync.get(["motivational_image"], function (result2){
            chrome.storage.sync.get(["rest_start"], function(start_time){
                chrome.storage.sync.get(["rest_end"], function (end_time){
                    document.getElementById("motivational_text").value = result.motivational_text;
                    document.getElementById("motivational_image").value = result2.motivational_image;
                    document.getElementById("start_time").value = start_time.rest_start;
                    document.getElementById("end_time").value = end_time.rest_end;
                });
            });
        });
    });
}

document.getElementById("set").addEventListener("click", function(){
    chrome.storage.sync.set({"rest_start": document.getElementById("start_time").value});
    chrome.storage.sync.set({"rest_end": document.getElementById("end_time").value});
    chrome.storage.sync.set({"motivational_text": document.getElementById("motivational_text").value});
    chrome.storage.sync.set({"motivational_image": document.getElementById("motivational_image").value});
})