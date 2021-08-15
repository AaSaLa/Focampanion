document.getElementById("remove_button").addEventListener("click", function(){
    var remove_site = document.getElementById('blocked_site').value;

    chrome.storage.sync.get(['blocked_sites'], function(result){
        let blocked_sites = result.blocked_sites;
        var remove_site_index = blocked_sites.indexOf(remove_site);
        blocked_sites.splice(remove_site_index, 1);

        chrome.storage.sync.set({"blocked_sites": blocked_sites}, function(){

        });
    });
    document.getElementById('blocked_site').value = '';
});
