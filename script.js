function loadHtmlDiv(id, filename){
    let element = document.getElementById(id);
    let file = filename;
    
    function loadHTML(){
    fetch('${templates/filename}')
    .then(response=> response.text())
    .then(text=> element.innerHTML = text);
    }
}