let color = '#3aa757';
let blocked_site = ""

chrome.runtime.onInstalled.addListener(() => {

  chrome.storage.sync.set({blocked_site});
  console.log('Default background color set to %cgreen', `color: ${color}`);
});
