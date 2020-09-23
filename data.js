$(document).ready(async function() {
    async function setBody(url, title) {
        const data = await $.get(url);
        const { cases, todayCases, deaths, todayDeaths, recovered, todayRecovered, critical } = data;
        bodyEl('p', title);
        bodyEl('h1', `Số ca nhiễm: ${dep(cases)}(+${dep(todayCases)})`);
        bodyEl('h1', `Tử vong: ${dep(deaths)}(+${dep(todayDeaths)})`);
        bodyEl('h1', `Hồi phục: ${dep(recovered)}(+${dep(todayRecovered)})`);
        bodyEl('h1', `Nghiêm trọng: ${dep(critical)}`);
    }

    await setBody('https://disease.sh/v3/covid-19/all', "Số ca corona ở Thế Giới");
    await setBody('https://disease.sh/v3/covid-19/countries/VN?strict=true', "Số ca corona ở Việt Nam");
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

