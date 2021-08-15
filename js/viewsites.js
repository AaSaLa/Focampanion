function display(){ 
    chrome.storage.sync.get(['blocked_sites'], function(result) {
        var orderArray = result.blocked_sites;
        numBlockedSite = orderArray.length;
        var table = document.getElementById('table');
        var tbody = document.createElement('tbody');
        for (i = 0; i < orderArray.length; i++) {
            var row = document.createElement('tr');
            var cell = document.createElement('td');
            cell.className ='mt-4 text-light';
            cell.textContent = orderArray[i];

            row.appendChild(cell);
            tbody.appendChild(row);
        }
        table.appendChild(tbody);
    });
}
document.getElementById('toRemovalPage').addEventListener('click', function toRemovalPage(){
    window.location.href = 'extra/html/removalPage.html'
  })

window.onload = display;