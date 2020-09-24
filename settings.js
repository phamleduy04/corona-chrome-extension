$(document).ready(async function() {
    const countriesArray = await $.get('https://disease.sh/v3/covid-19/countries');
    selectBody(countriesArray.map(el => el.country));
    
    document.getElementById("save").addEventListener("click", () => {
        const userChoose = $('#select').val();
        localStorage.setItem('country', userChoose);
        alert("Done!");
        window.close();
    })

    document.getElementById("cancel").addEventListener("click", () => {
        window.close();
    })
})

function selectBody(array) {
    const myP = document.getElementById('selectList');
    const selectList = document.createElement('select');
    selectList.setAttribute("id", "select");
    myP.appendChild(selectList);

    array.forEach(el => {
        const option = document.createElement('option');
        option.setAttribute("value", el);
        option.text = el;
        selectList.appendChild(option);
    })
}