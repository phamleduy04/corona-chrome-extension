$(document).ready(function() {
    $.get("https://disease.sh/v3/covid-19/all", function(data) {
        const { cases, todayCases, deaths, todayDeaths, recovered, todayRecovered, critical } = data;
        createBodyElement('p', `Cases in the world`)
        createBodyElement('h1', `Cases: ${soDep(cases)}(+${soDep(todayCases)})`);
        createBodyElement('h1', `Deaths: ${soDep(deaths)}(+${soDep(todayDeaths)})`);
        createBodyElement('h1', `Recovered: ${soDep(recovered)}(+${soDep(todayRecovered)})`);
        createBodyElement('h1', `Critical: ${soDep(critical)}`);
    });
    $.get("https://disease.sh/v3/covid-19/countries/vietnam", function(data) {
        const { cases, todayCases, deaths, todayDeaths, recovered, todayRecovered, critical } = data;
        createBodyElement('p', "Số ca ở Việt nam");
        createBodyElement('h1', `Số ca: ${soDep(cases)}(+${soDep(todayCases)})`);
        createBodyElement('h1', `Tử vong: ${soDep(deaths)}(+${soDep(todayDeaths)})`);
        createBodyElement('h1', `Hồi phục: ${soDep(recovered)}(+${soDep(todayRecovered)})`);
        createBodyElement('h1', `Ca nghiêm trọng: ${soDep(critical)}`);
    })
})

function createBodyElement(type, text){
    const h = document.createElement(type);
    const t = document.createTextNode(text.replace(' ', "\u00a0"));
    h.appendChild(t);
    document.body.appendChild(h);
}

function soDep(num) {
    if (!num || num == null) return 0;
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}