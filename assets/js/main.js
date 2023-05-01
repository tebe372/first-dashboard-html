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

function getStyleVar(key) {
    return getComputedStyle(document.documentElement).getPropertyValue(key);
}

const style = document.createElement("style");
style.appendChild(document.createTextNode(fontFace));
document.head.appendChild(style);

function initCharts() {
    var backColor = getStyleVar("--card-back-color");
    var bigLabelColor = getStyleVar("--chart-label-color-1");
    var smallLabelColor = getStyleVar("--chart-label-color-2");

    var pieColors = ["#118AB2", "#FFD166", "#06D6A0"],
        pieBackColors = [
            getStyleVar("--chart-pie-back-color-1"),
            getStyleVar("--chart-pie-back-color-2"),
            getStyleVar("--chart-pie-back-color-3"),
        ],
        pieCategories = ["Consumer Loans", "Consumer Deposits", "Business Deposits"],
        pieLegendData = [
            {
                name: "Consumer Deposits",
                color: "#FFD166",
            },
            {
                name: "Consumer Loans",
                color: "#118AB2",
            },
            {
                name: "Business Deposits",
                color: "#06D6A0",
            },
        ],
        pieData = [
            {
                y: 33,
                color: pieBackColors[0],
                drilldown: {
                    name: "Consumer Loans",
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
                    name: "Consumer Deposits",
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
                    name: "Business Deposits",
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
            backgroundColor: backColor,
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
                borderColor: "rgba(255,255,255,0.3)",
                borderWidth: "0.5px",
            },
            variablepie: {
                borderColor: "rgba(255,255,255,0.3)",
                borderWidth: "0.5px",
            },
        },
        tooltip: {
            enabled: false,
        },

        legend: {
            title: {
                text: "PRODUCT CONVERSIONS",
                style: {
                    fontFamily: "Raleway-ExtraBold, sans-serif",
                    fontSize: "11px",
                    fontWeight: "normal",
                    color: bigLabelColor,
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
                color: smallLabelColor,
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
                size: "133%",
                dataLabels: {
                    enabled: false,
                },
            },
            {
                type: "variablepie",
                zMin: 50,
                zMax: 153,
                data: countryData,
                size: "110%",
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
            backgroundColor: backColor,
            // events: {
            //     render: function () {
            //         var chart = this,
            //             xAxis = chart.xAxis[0],
            //             yAxis = chart.yAxis[0],
            //             //xOffset = 20, // Shift the x-axis gridlines 20 pixels to the right
            //             yOffset = -7, // Shift the y-axis gridlines 10 pixels up
            //             //xGridGroup = xAxis.gridGroup,
            //             yGridGroup = yAxis.gridGroup;

            //         // Move x-axis gridlines
            //         //   xGridGroup.translate(xOffset, 0);

            //         // Move y-axis gridlines

            //         yGridGroup.translate(0, yOffset);
            //     },
            // },
        },
        title: {
            text: "SALES AMOUNT BY CALENDAR YEAR",
            style: {
                fontFamily: "Raleway-ExtraBold, sans-serif",
                fontSize: "11px",
                color: bigLabelColor,
            },
            align: "left",
            widthAdjust: 10,
        },
        xAxis: {
            // categories: ["2007", "2008", "2009"],
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
            tickInterval: 1,
            maxPadding: 0,
            minPadding: 0,
            endOnTick: false,
            startOnTick: false,
            tickWidth: 0,
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
            min: 0.1,
            gridLineWidth: 1,
            gridLineColor: getStyleVar("--chart-grid-line-color"),
            //gridZIndex: 4,
        },
        legend: {
            enabled: false,
        },
        series: [
            {
                name: "Bar chart data",
                data: [
                    [2007, 40000000],
                    [2008, 80000000],
                    [2009, 55000000],
                ],
                // pointPlacement: 0, // set pointPlacement to 0
                // pointPadding: 0,
                // groupPadding: 0,
            },
        ],
        tooltip: {
            enabled: false,
        },
        plotOptions: {
            series: {
                color: getStyleVar("--chart-bar-back-color"),
                borderRadius: 13,
                pointWidth: 26,
                states: {
                    hover: {
                        color: "#1A71F3",
                    },
                },
                borderWidth: 0,
            },
        },
    };

    Highcharts.chart("bar-sales-container", barSalesOption);

    Highcharts.seriesTypes.areaspline.prototype.drawLegendSymbol =
        Highcharts.seriesTypes.line.prototype.drawLegendSymbol;

    Highcharts.chart("line-container", {
        credits: {
            enabled: false,
        },
        chart: {
            type: "areaspline",
            spacing: [0, 0, 0, 0],
            backgroundColor: getStyleVar("--card-back-color"),
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
            gridLineColor: getStyleVar("--chart-grid-line-color"),
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
            areaspline: {
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
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 0.5,
                    },
                    stops: [
                        [0, "#1A71F310"],
                        [1, "#1A71F300"],
                    ],
                },
                data: [
                    2.1, 2.2, 2.3, 2.4, 2.3, 2.2, 2.3, 2.4, 2.5, 2.6, 2.5, 2.4,
                    2.4, 2.3, 2.2, 2.1, 2.0, 1.9, 2.0, 2.1, 2.0, 2.1, 2.2, 2.3,
                    2.2,
                ],
                color: "#1A71F3",
            },
            {
                name: "Industry Avg Conv Rate",
                data: [
                    1.1, 1.1, 1.2, 1.3, 1.2, 1.1, 1.2, 1.3, 1.4, 1.5, 1.4, 1.3,
                    1.2, 1.1, 1.0, 0.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.3, 1.2, 1.1,
                    1.1,
                ],
                color: "#EF476F",
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 0.5,
                    },
                    stops: [
                        [0, "#EF476F10"],
                        [1, "#EF476F00"],
                    ],
                },
            },
            {
                name: "Easterly Conv Rate",
                data: [
                    1.1, 1.1, 1.0, 0.9, 0.8, 0.9, 0.8, 0.9, 1, 0.9, 0.8, 0.7,
                    0.8, 0.8, 0.7, 0.7, 0.7, 0.8, 0.9, 0.9, 1, 1.1, 1.2, 1.1,
                    1.0,
                ],
                color: "#06D6A0",
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 0.5,
                    },
                    stops: [
                        [0, "#06D6A010"],
                        [1, "#06D6A000"],
                    ],
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
                color: getStyleVar("--chart-label-color-2"),
            },
            y: 20,
            x: 20,
            itemMarginBottom: 10,
            symbolWidth: 36,
            width: "50%",
        },
    });
}
