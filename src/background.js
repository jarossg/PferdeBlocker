chrome.runtime.addListener(
  function(request, sender, sendResponse){
    let active = document.getElementById("status").checked;
    sendResponse({status: active});
  }
);