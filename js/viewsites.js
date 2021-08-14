function display(){
    var orderArray1 = ['mango', 'apple', 'orange'];
    chrome.storage.sync.get(['blocked_sites'], function(result) {
        var orderArray = result.blocked_sites;
        console.log(orderArray);
        var table = document.getElementById('table');
        var tbody = document.createElement('tbody');
        for (i = 0; i < orderArray.length; i++) {
            var row = document.createElement('tr');
            var cell = document.createElement('td');
            var cell2 = document.createElement('td');
            var img = new Image();
            
            img.src = 'images/cross.png';

            cell.className ='mt-4 text-light';
            cell.textContent = orderArray[i];

            cell2.appendChild(img);

            row.appendChild(cell);
            row.appendChild(cell2);
            tbody.appendChild(row);
        }
        table.appendChild(tbody);
    });
    
}
window.onload = display;