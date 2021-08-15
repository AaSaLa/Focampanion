let blocked_sites = [];
let time = [];

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({"blocked_sites": blocked_sites}, ()=> {});
    chrome.storage.sync.set({"time": time}, ()=> {});
});
