function display(){
    chrome.storage.sync.get(['sites'], function(result) {
        let iterator = new Map(Object.entries(result.sites)).entries();
        let table = document.getElementById('table');
        let tbody = document.createElement('tbody');
        for (const tbodyElement of iterator) {
            let row = document.createElement('tr');
            let cell = document.createElement('td');
            cell.className ='mt-4 text-light';
            if(parseInt(tbodyElement[1], 10) > 60){
                cell.textContent = tbodyElement[0] + "-  " + (parseInt(tbodyElement[1], 10) / 60).toFixed(2) + " hours"
            }
            else {
                cell.textContent = tbodyElement[0] + "-  " + tbodyElement[1] + " minutes";
            }
            row.appendChild(cell);
            tbody.appendChild(row);
        }
        if(tbody.rows.length < 1){
            let row = document.createElement('tr');
            let cell = document.createElement('td');
            cell.className = 'mt-4 text-light';
            cell.textContent = "Time Tracker will update as you spend more than 1 minute on a website";
            cell.style = "font-size: small";
            row.appendChild(cell);
            tbody.appendChild(row);
        }
        table.appendChild(tbody);
    });
}

window.onload = display;