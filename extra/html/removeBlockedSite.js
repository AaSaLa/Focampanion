document.getElementById('submit').addEventListener('click', function(){
    chrome.storage.sync.get(["password"], function (result) {
        if(document.getElementById('password').value === result.password){
            window.location.href = 'confirmationPage.html'
        }
    })
})