document.addEventListener('DOMContentLoaded', function() {
    createH1Element('hello')
})
$(document).ready(function() {
    $.get("https://disease.sh/v3/covid-19/all", function(data) {
        createH1Element(data.cases);
    });
})

function createH1Element(text){
    const h = document.createElement('h1');
    const t = document.createTextNode(text);
    h.appendChild(t);
    document.body.appendChild(h);
}