//const checkbox = document.getElementById("statusCheckbox");



window.onload = function() {

    var checkbox = document.querySelector("#statusCheckbox");

    chrome.storage.local.get('active', function(result){
        checkbox.checked = result.active;
      });

    checkbox.onchange = function() {
        console.log(checkbox.checked.toString());
        chrome.storage.local.set({active: checkbox.checked});
    };


};