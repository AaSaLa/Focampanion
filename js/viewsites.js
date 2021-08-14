// function display(){
//     chrome.storage.sync.get(["blocked_sites"], function(result){
//         if(result.blocked_sites.length != 0){
//             document.getElementById("data").innerHTML = result.blocked_sites;
//         }else{
//             document.getElementById("data").innerText = "You haven't blocked anything :("
//         }
//     });
// }

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
            cell.className ='mt-4 text-light';
            cell.textContent = orderArray[i];

            row.appendChild(cell);
            tbody.appendChild(row);
        }
        table.appendChild(tbody);
    });
    
}
window.onload = display;