let blocked_site = ""

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({blocked_site});
});
