let blocked_sites = [];
let time = [];
let password = "";
let sites = new Map();

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({"blocked_sites": blocked_sites});
    chrome.storage.sync.set({"time": time});
    chrome.storage.sync.set({"password": password});
    chrome.storage.sync.set({"sites": Object.fromEntries(sites)});
});


//  "commands": {
//    "addnote": {
//      "suggested_key": {
//        "windows": "Ctrl+B",
//        "mac": "Command+B",
//        "chromeos": "Ctrl+B",
//        "linux": "Ctrl+B"
//      },
//      "description": "Add a link as bookmark"
//    }
//  },