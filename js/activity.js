function display(){
    chrome.storage.sync.get(['sites'], function(result) {
        let iterator = new Map(Object.entries(result.sites)).entries();
        let table = document.getElementById('table');
        let tbody = document.createElement('tbody');
        for (const tbodyElement of iterator) {
            let row = document.createElement('tr');
            let cell = document.createElement('td');
            cell.className ='mt-4 text-light';
            if(parseInt(tbodyElement[1], 10) > 180){
                cell.textContent = tbodyElement[0] + ":  " + parseInt(tbodyElement[1], 10) / 60 + " hours"
            }
            else {
                cell.textContent = tbodyElement[0] + ":  " + tbodyElement[1] + " minutes";
            }

            row.appendChild(cell);
            tbody.appendChild(row);
        }
        table.appendChild(tbody);
    });
}

window.onload = display;