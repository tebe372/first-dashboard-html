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
                fontWeight: "normal",
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
            fontWeight: "500",
            color: "#0F1B29",
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

const barSalesOption = {
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
            color: "black",
        },
        align: "left",
        widthAdjust: 10,
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
        lineWidth: 0,
        plotLines: [
            {
                color: "#FF0000",
                width: 0,
                value: 1,
                label: {
                    text: "0M",
                    align: "left",
                    y: 78,
                    x: -1,
                    style: {
                        color: "#B5B5B5",
                        fontSize: "10px",
                        fontFamily: "Raleway-Regular, sans-serif",
                    },
                },
            },
        ],
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
        startOnTick: false,
        min: 1,
    },
    legend: {
        enabled: false,
    },
    series: [
        {
            name: "Bar chart data",
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

Highcharts.chart("bar-sales-container", barSalesOption);

Highcharts.chart("line-container", {
    credits: {
        enabled: false,
    },
    chart: {
        type: "spline",
        spacing: [0, 0, 0, 0],
    },
    title: {
        text: "",
    },
    xAxis: {
        type: "datetime",
        labels: {
            overflow: "justify",
            formatter: function () {
                return Highcharts.dateFormat("%b", this.value);
            },
            style: {
                color: "#B5B5B5",
                fontSize: "10px",
                fontFamily: "Raleway-Regular, sans-serif",
            },
            y: 25,
        },
        tickWidth: 0,
        lineWidth: 0,
        tickInterval: 1000 * 3600 * 24 * 30,
        maxPadding: 0,
        minPadding: 0,
    },
    yAxis: {
        title: {
            text: "",
        },
        gridLineWidth: 1,
        gridLineColor: "#E0E0E0",
        gridLineDashStyle: "LongDash",
        labels: {
            style: {
                color: "#B5B5B5",
                fontSize: "10px",
                fontFamily: "Raleway-Regular, sans-serif",
            },
            x: -30,
        },
    },
    tooltip: {
        enabled: false,
    },
    plotOptions: {
        spline: {
            lineWidth: 2,
            states: {
                hover: {
                    lineWidth: 3,
                },
            },
            marker: {
                enabled: false,
            },
            pointInterval: 1000 * 3600 * 24 * 10,
            pointStart: Date.UTC(2023, 1, 1, 0, 0, 0),
        },
    },
    series: [
        {
            name: "Benchmark Conv Rate",
            data: [
                2.1, 2.2, 2.3, 2.4, 2.3, 2.2, 2.3, 2.4, 2.5, 2.6, 2.5, 2.4, 2.4,
                2.3, 2.2, 2.1, 2.0, 1.9, 2.0, 2.1, 2.0, 2.1, 2.2, 2.3, 2.2,
            ],
            color: "#1A71F3",
            shadow: {
                color: "#1A71F309",
                offsetX: 0,
                offsetY: 10,
                opacity: 0.1,
                width: 30,
            },
        },
        {
            name: "Industry Avg Conv Rate",
            data: [
                1.1, 1.1, 1.2, 1.3, 1.2, 1.1, 1.2, 1.3, 1.4, 1.5, 1.4, 1.3, 1.2,
                1.1, 1.0, 0.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.3, 1.2, 1.1, 1.1,
            ],
            color: "#EF476F",
            shadow: {
                color: "#EF476F09",
                offsetX: 0,
                offsetY: 10,
                opacity: 0.1,
                width: 30,
            },
        },
        {
            name: "Easterly Conv Rate",
            data: [
                1.1, 1.1, 1.0, 0.9, 0.8, 0.9, 0.8, 0.9, 1, 0.9, 0.8, 0.7, 0.8,
                0.8, 0.7, 0.7, 0.7, 0.8, 0.9, 0.9, 1, 1.1, 1.2, 1.1, 1.0,
            ],
            color: "#06D6A0",
            shadow: {
                color: "#06D6A009",
                offsetX: 0,
                offsetY: 10,
                opacity: 0.1,
                width: 30,
            },
        },
    ],
    navigation: {
        menuItemStyle: {
            fontSize: "10px",
        },
    },

    legend: {
        layout: "horizontal",
        align: "left",
        verticalAlign: "top",
        enabled: true,
        itemStyle: {
            fontFamily: "Raleway-Medium, sans-serif",
            fontSize: "10px",
            fontWeight: "500",
        },
        y: 20,
        x: 20,
        itemMarginBottom: 10,
        symbolWidth: 36,
    },
});

function initMap() {
    //var location = { lat: 33.8034, lng: -84.3963 };
    var location = { lat: 41.716667, lng: 44.783333 };
    const map = new google.maps.Map(document.getElementById("map"), {
        center: location,
        zoom: 8,
        mapId: "4504f8b37365c3d0",
        disableDefaultUI: true,
    });
    const locationTag = document.createElement("div");

    locationTag.className = "location-tag";
    locationTag.textContent = "Georgia";

    const markerView = new google.maps.marker.AdvancedMarkerView({
        map,
        position: location,
        content: locationTag,
    });
}
window.addEventListener("resize", function () {
    google.maps.event.trigger(map, "resize");
});
// function initMap() {
//     //var location = { lat: 33.8034, lng: -84.3963 };
//     var location = { lat: 41.716667, lng: 44.783333 };
//     var map;
//     var georgia = new google.maps.LatLng(41.716667, 44.783333);

//     var stylez = [
//         {
//             featureType: "all",
//             elementType: "all",
//             stylers: [{ saturation: -100 }],
//         },
//     ];

//     var mapOptions = {
//         zoom: 8,
//         center: georgia,
//         mapTypeControlOptions: {
//             mapTypeIds: [google.maps.MapTypeId.ROADMAP, "tehgrayz"],
//         },
//         mapId: "4504f8b37365c3d0",
//     };

//     map = new google.maps.Map(document.getElementById("map"), mapOptions);
//     const locationTag = document.createElement("div");

//     locationTag.className = "location-tag";
//     locationTag.textContent = "Georgia";

//     const markerView = new google.maps.marker.AdvancedMarkerView({
//         map,
//         position: location,
//         content: locationTag,
//     });
//     var mapType = new google.maps.StyledMapType(stylez, { name: "Grayscale" });
//     map.mapTypes.set("tehgrayz", mapType);
//     map.setMapTypeId("tehgrayz");
// }
