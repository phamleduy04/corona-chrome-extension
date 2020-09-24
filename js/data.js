$(document).ready(async function() {
    // check userStorage
    const firstRow = await checkStorage('firstRow');
    const secondRow = await checkStorage('secondRow');
    async function setBody(url, title) {
        const data = await $.get(url);
        const { cases, todayCases, deaths, todayDeaths, recovered, todayRecovered, critical } = data;
        bodyEl('p', title);
        bodyEl('h1', `Cases: ${dep(cases)}(+${dep(todayCases)})`);
        bodyEl('h1', `Deaths: ${dep(deaths)}(+${dep(todayDeaths)})`);
        bodyEl('h1', `Recovered: ${dep(recovered)}(+${dep(todayRecovered)})`);
        bodyEl('h1', `Critical: ${dep(critical)}`);
    } 
    await setBody(firstRow == 'World' ? `https://disease.sh/v3/covid-19/all` : `https://disease.sh/v3/covid-19/countries/${firstRow}?strict=true`, firstRow == 'World' ? "Corona cases in the world" : `Corona cases at ${firstRow}`);
    await setBody(secondRow == 'World' ? `https://disease.sh/v3/covid-19/all` : `https://disease.sh/v3/covid-19/countries/${secondRow}?strict=true`, secondRow == 'World' ? "Corona cases in the world" : `Corona cases at ${secondRow}`);
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

async function checkStorage(id) {
    let userSettings = localStorage.getItem(id);
    console.log(userSettings);
    if (!userSettings || userSettings === null || userSettings == "undefined") {
        await localStorage.setItem(id, id == 'firstRow' ? 'World' : 'USA');
        return 'USA';
    }
    return userSettings;
}
