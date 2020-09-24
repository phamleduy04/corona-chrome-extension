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
    const userSetting = localStorage.getItem('country');
    for (let i = 0; i < array.length; i++) {
        const option = document.createElement('option');
        option.setAttribute("value", array[i]);
        if (array[i] == userSetting) option.selected = true;
        option.text = array[i];
        selectList.appendChild(option);
    }
}