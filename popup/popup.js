window.onload = function() {

    var checkbox = document.querySelector("#statusCheckbox");

    chrome.storage.local.get('active', function(result){
        checkbox.checked = result.active;
      });

    checkbox.onchange = function() {
        chrome.storage.local.set({active: checkbox.checked});
    };
};