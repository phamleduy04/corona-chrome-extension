$(document).ready(async function() {
    let countriesArray = await $.get('https://disease.sh/v3/covid-19/countries');
    countriesArray = countriesArray.map(el => el.country);
    countriesArray.unshift('World');
    selectBody(countriesArray, 'firstCol', 'firstSelect');
    selectBody(countriesArray, 'secondCol', 'secondSelect');
    document.getElementById("save").addEventListener("click", () => {
        const firstSelect = $('#firstSelect').val();
        const secondSelect = $('#secondSelect').val();
        localStorage.setItem('firstRow', firstSelect);
        localStorage.setItem('secondRow', secondSelect);
        alert('Done!');
        window.close();
    })
    document.getElementById("cancel").addEventListener("click", () => {
        window.close();
    })
})

function selectBody(array, id, elName) {
    const myP = document.getElementById(id);
    const selectList = document.createElement('select');
    selectList.setAttribute("id", elName);
    myP.appendChild(selectList);
    const firstRow = localStorage.getItem('firstRow');
    const secondRow = localStorage.getItem('secondRow');
    for (let i = 0; i < array.length; i++) {
        const option = document.createElement('option');
        option.setAttribute("value", array[i]);
        if (array[i] == firstRow && elName == 'firstSelect') option.selected = true;
        else if (array[i] == secondRow && elName == 'secondSelect') option.selected = true;
        option.text = array[i];
        selectList.appendChild(option);
    }
}