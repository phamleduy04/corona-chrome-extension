$(document).ready(function() {
    $.get("https://disease.sh/v3/covid-19/all", function(data){
        const { cases, todayCases, deaths, todayDeaths, recovered, todayRecovered, critical } = data;
        bodyEl('p', "Số ca corona ở Thế Giới");
        bodyEl('h1', `Số ca nhiễm: ${dep(cases)}(+${dep(todayCases)})`);
        bodyEl('h1', `Tử vong: ${dep(deaths)}(+${dep(todayDeaths)})`);
        bodyEl('h1', `Hồi phục: ${dep(recovered)}(+${dep(todayRecovered)})`);
        bodyEl('h1', `Nghiêm trọng: ${dep(critical)}`);

        $.get("https://disease.sh/v3/covid-19/countries/VN?strict=true", function(data){
            const { cases, todayCases, deaths, todayDeaths, recovered, todayRecovered, critical } = data;
            bodyEl('p', "Số ca corona ở Việt Nam");
            bodyEl('h1', `Số ca nhiễm: ${dep(cases)}(+${dep(todayCases)})`);
            bodyEl('h1', `Tử vong: ${dep(deaths)}(+${dep(todayDeaths)})`);
            bodyEl('h1', `Hồi phục: ${dep(recovered)}(+${dep(todayRecovered)})`);
            bodyEl('h1', `Nghiêm trọng: ${dep(critical)}`);
        })
    })
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