document.getElementById("eyes").addEventListener("click", function(){
  var blocked_site = document.getElementById('blocked_site').value;

  chrome.storage.sync.get(['blocked_sites'], function(result){
      let  new_blocked_sites = result.blocked_sites;
      new_blocked_sites.push(blocked_site);
      chrome.storage.sync.set({"blocked_sites": new_blocked_sites}, function(){
      });
      console.log(result.blocked_sites);
  });
});
