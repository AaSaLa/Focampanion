function display(){ 
    chrome.storage.sync.get(['blocked_sites'], function(result) {
        let orderArray = result.blocked_sites;
        let table = document.getElementById('table');
        let tbody = document.createElement('tbody');
        for (let i = 0; i < orderArray.length; i++) {
            let row = document.createElement('tr');
            let cell = document.createElement('td');
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