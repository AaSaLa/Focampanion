document.getElementById("turnOnExamMode").addEventListener("click", function(){
	console.log('pressed')
	chrome.storage.sync.get(['blocked_sites'], function(result){
      let  orderArray = result.blocked_sites;
      newSites = ['google.com', 'bing.com', 'youtube.com', 'ncert.nic.in', 'byjus.com', 'vedantu.com', 'quora.com', 'brainly.in', 'toppr.com', 'discord.com']
      for (let a = 0; a<=newSites.length; a++){
      	orderArray.push(newSites[a]);
      	console.log(newSites[a])
      	console.log(orderArray);
      }

      chrome.storage.sync.set({"blocked_sites": orderArray}, function(){
      });
  });
})
document.getElementById("turnOffExamMode").addEventListener("click", function(){
	chrome.storage.sync.get(['blocked_sites'], function(result){
      let  orderArray = result.blocked_sites;
      newSites = ['google.com', 'bing.com', 'youtube.com', 'ncert.nic.in', 'byjus.com', 'vedantu.com', 'quora.com', 'brainly.in', 'toppr.com', 'discord.com']
      for (let a = 0; a<=newSites.length; a++){
      	let remove_site = newSites[a];
      	let remove_site_index = orderArray.indexOf(remove_site);
      	orderArray.splice(remove_site_index, 1);
      }

      chrome.storage.sync.set({"blocked_sites": orderArray}, function(){
      });
  });
})