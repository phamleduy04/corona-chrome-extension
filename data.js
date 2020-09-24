$(document).ready(async function() {
    // check userStorage
    let userSettings = localStorage.getItem('country');
    if (!userSettings || userSettings === null || userSettings == "undefined") {
        await localStorage.setItem('country', 'USA');
        userSettings = 'USA';
    }
    async function setBody(url, title) {
        const data = await $.get(url);
        const { cases, todayCases, deaths, todayDeaths, recovered, todayRecovered, critical } = data;
        bodyEl('p', title);
        bodyEl('h1', `Cases: ${dep(cases)}(+${dep(todayCases)})`);
        bodyEl('h1', `Deaths: ${dep(deaths)}(+${dep(todayDeaths)})`);
        bodyEl('h1', `Recovered: ${dep(recovered)}(+${dep(todayRecovered)})`);
        bodyEl('h1', `Critical: ${dep(critical)}`);
    }
    await setBody('https://disease.sh/v3/covid-19/all', "Corona cases in the world");
    await setBody(`https://disease.sh/v3/covid-19/countries/${userSettings}?strict=true`, `Corona cases at ${userSettings}`);
})

function bodyEl(type, text) {
    const h = document.createElement(type);
    const t = document.createTextNode(text);
    h.appendChild(t);
    document.body.appendChild(h);
}

function dep(num) {
    if (!num || num === null) return 0;
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

