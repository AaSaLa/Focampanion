let blocked_sites = [];
let time = [];
let password = "";
let sites = new Map();
let motivational_text = "Don't Get Distracted! Utilize your time in a nice way";
let motivational_image = "https://miro.medium.com/max/600/1*2nc70l_GhlzEQGnhhFnS3Q.jpeg";
let rest_start = "";
let rest_end = "";

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({"blocked_sites": blocked_sites});
    chrome.storage.sync.set({"time": time});
    chrome.storage.sync.set({"password": password});
    chrome.storage.sync.set({"sites": Object.fromEntries(sites)});
    chrome.storage.sync.set({"motivational_text": motivational_text});
    chrome.storage.sync.set({"motivational_image": motivational_image});
    chrome.storage.sync.set({"rest_start": rest_start});
    chrome.storage.sync.set({"rest_end": rest_end});
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