document.getElementById("eyes").addEventListener("click", function(){
  var blocked_site = document.getElementById('blocked_site').value;
  var time = document.getElementById('time').value;
  if(time == ""){
    time = 0;
  }

  chrome.storage.sync.get(['blocked_sites'], function(result){
      let  new_blocked_sites = result.blocked_sites;
      new_blocked_sites.push(blocked_site);
      chrome.storage.sync.set({"blocked_sites": new_blocked_sites}, function(){
      });
      console.log(result.blocked_sites);
  });

  chrome.storage.sync.get(['time'], function(result){
      let new_times = result.time;
      new_times.push("0:" + time);
      chrome.storage.sync.set({"time": new_times}, function(){
      });
  });
  document.getElementById('blocked_site').value = '';
});
