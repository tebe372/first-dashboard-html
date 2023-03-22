const fontFace = `
@font-face {
    font-family: "Raleway-ExtraBold";
    src: url("../fonts/Raleway-ExtraBold.ttf") format("truetype");
}
@font-face {
    font-family: "Raleway-Medium";
    src: url("../fonts/Raleway-Medium.ttf") format("truetype");
}
@font-face {
    font-family: "Raleway-Regular";
    src: url("../fonts/Raleway-Regular.ttf") format("truetype");
}
`;

const style = document.createElement("style");
style.appendChild(document.createTextNode(fontFace));
document.head.appendChild(style);

var pieColors = ["#118AB2", "#FFD166", "#06D6A0"],
    pieBackColors = ["#CFE8F0", "#FFF6E0", "#CDF7EC"],
    pieCategories = ["North America", "Asia", "Europe"],
    pieLegendData = [
        {
            name: "Asia",
            color: "#FFD166",
        },
        {
            name: "North America",
            color: "#118AB2",
        },
        {
            name: "Europe",
            color: "#06D6A0",
        },
    ],
    pieData = [
        {
            y: 33,
            color: pieBackColors[0],
            drilldown: {
                name: "North America",
                categories: ["A", "B", "C", "D"],
                data: [
                    {
                        y: 3,
                        z: 110,
                    },
                    {
                        y: 10,
                        z: 121,
                    },
                    {
                        y: 15,
                        z: 111,
                    },
                    {
                        y: 5,
                        z: 145,
                    },
                ],
            },
        },
        {
            y: 34,
            color: pieBackColors[1],
            drilldown: {
                name: "Asia",
                categories: ["E", "F", "G", "H"],
                data: [
                    {
                        y: 4,
                        z: 145,
                    },
                    {
                        y: 8,
                        z: 115,
                    },
                    {
                        y: 11,
                        z: 101,
                    },
                    {
                        y: 10,
                        z: 115,
                    },
                ],
            },
        },
        {
            y: 34,
            color: pieBackColors[2],
            drilldown: {
                name: "Europe",
                categories: ["I", "J", "K", "L", "M"],
                data: [
                    {
                        y: 6,
                        z: 153,
                    },
                    {
                        y: 11,
                        z: 133,
                    },
                    {
                        y: 6,
                        z: 69,
                    },
                    {
                        y: 6,
                        z: 59,
                    },
                    {
                        y: 6,
                        z: 105,
                    },
                ],
            },
        },
    ],
    continentData = [],
    countryData = [],
    i,
    j,
    dataLen = pieData.length,
    drillDataLen,
    brightness;

// Build the data arrays
for (i = 0; i < dataLen; i += 1) {
    // add browser data
    // continentData.push({
    //     name: categories[i],
    //     y: data[i].y,
    //     color: data[i].color,
    // });

    // add version data
    drillDataLen = pieData[i].drilldown.data.length;
    for (j = 0; j < drillDataLen; j += 1) {
        brightness = 0.2 - j / drillDataLen / 5;
        countryData.push({
            name: pieData[i].drilldown.categories[j],
            y: pieData[i].drilldown.data[j].y,
            z: pieData[i].drilldown.data[j].z,
            color: pieColors[i],
        });
        continentData.push({
            name: pieCategories[i],
            y: pieData[i].drilldown.data[j].y,
            // z: data[i].drilldown.data[j].z,
            color: pieData[i].color,
        });
    }
}

// Create the chart
Highcharts.chart("pie-container", {
    credits: {
        enabled: false,
    },
    chart: {
        type: "pie",
    },
    title: {
        text: "",
        align: "left",
    },
    subtitle: {
        text: "",
        align: "left",
    },
    plotOptions: {
        pie: {
            shadow: false,
            center: ["50%", "50%"],
        },
    },
    tooltip: {
        enabled: false,
    },

    legend: {
        title: {
            text: "CONTINENT NAME",
            style: {
                fontFamily: "Raleway-ExtraBold, sans-serif",
                fontSize: "11px",
            },
        },
        align: "right",
        verticalAlign: "middle",
        layout: "vertical",
        enabled: true,
        data: pieLegendData,
        itemStyle: {
            fontFamily: "Raleway-Medium, sans-serif",
            fontSize: "12px",
        },
        itemMarginTop: 9,
    },
    series: [
        {
            data: pieLegendData,
            size: "0%",
            dataLabels: {
                enabled: false,
            },
            showInLegend: true,
        },
        {
            data: continentData,
            size: "120%",
            dataLabels: {
                enabled: false,
            },
        },
        {
            type: "variablepie",
            zMin: 20,
            data: countryData,
            size: "90%",
            dataLabels: {
                enabled: false,
            },
        },
    ],
});

const barOptions1 = {
    credits: {
        enabled: false,
    },
    chart: {
        type: "bar",
    },
    title: {
        text: "SALES AMOUNT BY CALENDAR YEAR",
        style: {
            fontFamily: "Raleway-ExtraBold, sans-serif",
            fontSize: "11px",
        },
    },
    xAxis: {
        categories: ["2007", "2008", "2009"],
        labels: {
            style: {
                color: "#B5B5B5",
                fontSize: "10px",
                fontFamily: "Raleway-Regular, sans-serif",
            },
        },
    },
    yAxis: {
        title: {
            text: null,
        },
        tickInterval: 50000000,
        labels: {
            style: {
                color: "#B5B5B5",
                fontSize: "10px",
                fontFamily: "Raleway-Regular, sans-serif",
            },
        },
    },
    legend: {
        enabled: false,
    },
    series: [
        {
            name: "Fruit Count",
            data: [40000000, 80000000, 55000000],
        },
    ],
    tooltip: {
        enabled: false,
    },
    plotOptions: {
        series: {
            color: "#EEF3FA",
            borderRadius: 13,
            pointWidth: 26,
            states: {
                hover: {
                    color: "#1A71F3",
                },
            },
        },
    },
};

Highcharts.chart("bar-sales-container", barOptions1);
