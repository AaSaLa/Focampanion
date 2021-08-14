let blocked_sites = [];

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({"blocked_sites": blocked_sites}, function(){
        console.log("setted init blockedf_sites " + blocked_sites);
    });
});
