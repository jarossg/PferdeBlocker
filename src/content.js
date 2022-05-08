const tags=["h1","h2","h3","a","p","title","div","button"];
const namessing=["Hufeneisenhuso","Gemeiner Gaul","Hufratte"]
const namesplu=["Hufeneisenhusos","Gemeine Gäule","Hufratten"]
for(const tag of tags){
    const elements=document.getElementsByTagName(tag);
    for(const element of elements){
        let text=element.innerHTML;
        
        let result = text.replace(/Pferde/g,namesplu[Math.floor(Math.random()*namesplu.length)]);
        result = result.replace(/Pferd/g,namessing[Math.floor(Math.random()*namessing.length)]);

        result = result.replace(/pferde/g,namesplu[Math.floor(Math.random()*namesplu.length)].toLowerCase());
        result = result.replace(/pferd/g,namessing[Math.floor(Math.random()*namessing.length)].toLowerCase());

        element.innerHTML=result;
    }

}