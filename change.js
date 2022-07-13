function loadHtmlDiv(id, filename){
    let element = document.getElementById(id);
    let file = filename;
    $(id).ready(function(){
   
        $('#id').load("templates/${filename}");
     
     });
}