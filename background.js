let blocked_sites = [1, 2, 3];

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({"blocked_sites": blocked_sites}, function(){
        console.log("setted init blockedf_sites " + blocked_sites);
    });
});
