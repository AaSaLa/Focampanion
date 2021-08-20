document.getElementById('submit').addEventListener('click', function(){
    console.log("eyes");
    chrome.storage.sync.set({"password": document.getElementById("new_password").value});
    window.location.href = 'options.html'
})