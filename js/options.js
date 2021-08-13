document.getElementById("eyes").addEventListener("click", function(){

  let blocked_site = document.getElementById('blocked_site').value;
  console.log(blocked_site);
  chrome.storage.sync.set({blocked_site});
});
