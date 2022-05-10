const tags = ["h1", "h2", "h3", "a", "p", "title", "div", "button"];
const namessing = ["Hufeneisenhuso", "Gemeiner Gaul", "Hufratte", "Hufeisenfotze", "Mistvieh"]
const namesplu = ["Hufeneisenhusos", "Gemeine Gäule", "Hufratten", "Hufeisenfotzen", "Mistviecher"]

function cleanPage(active) {
  if (active) {
    let element = null;
    for (const tag of tags) {
      const elements = document.evaluate('//*[contains(text(),\'Pferd\') or contains(text(),\'pferd\')]', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
      for (let i = 0; i < elements.snapshotLength; i++) {
        element = elements.snapshotItem(i);
        let text = element.innerText;

        let result = text.replace(/Pferde/g, namesplu[Math.floor(Math.random() * namesplu.length)]);
        result = result.replace(/Pferd/g, namessing[Math.floor(Math.random() * namessing.length)]);

        result = result.replace(/pferde/g, namesplu[Math.floor(Math.random() * namesplu.length)].toLowerCase());
        result = result.replace(/pferd/g, namessing[Math.floor(Math.random() * namessing.length)].toLowerCase());

        element.innerHTML = result;
      }

    }
  }
}

chrome.runtime.sendMessage({ tes: "test" }, function (response) {
  let active = response.status;
  cleanPage(active);
});


