document.getElementById('submit').addEventListener('click', function(){
    console.log("eyes");
    chrome.storage.sync.set({"password": document.getElementById("new_password").value});
    window.location.href = 'popup.html'
})

chrome.storage.sync.get(["password"], function(result){
    if(result.password !== ""){
        window.location.href = "popup.html";
    }
})

