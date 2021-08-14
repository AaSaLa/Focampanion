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

document.getElementById("remove_button").addEventListener("click", function(){
    var remove_site = document.getElementById('blocked_site').value;

    chrome.storage.sync.get(['blocked_sites'], function(result){
        let blocked_sites = result.blocked_sites;
        var remove_site_index = blocked_sites.indexOf(remove_site);
        blocked_sites.splice(remove_site_index, 1);

        chrome.storage.sync.set({"blocked_sites": blocked_sites}, function(){

        });
    });
});
