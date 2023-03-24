const barOptions1 = {
    credits: {
        enabled: false,
    },
    chart: {
        type: "column",
        spacing: [0, 0, 0, 0],
        marginTop: 40,
    },
    title: {
        text: "Personal Info",
        style: {
            fontFamily: "Raleway-ExtraBold, sans-serif",
            fontSize: "11px",
            color: "black",
        },
        align: "left",
        widthAdjust: 10,
    },
    xAxis: {
        // categories: ["2007", "2008", "2009"],
        type: "datetime",
        dateTimeLabelFormats: {
            // day: function () {
            //     var weekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
            //     return weekdays[this.value.getDay()];
            // },
        },
        labels: {
            style: {
                color: "#B5B5B5",
                fontSize: "10px",
                fontFamily: "Raleway-Regular, sans-serif",
            },

            formatter: function () {
                var weekdays = ["Su", "Mo", "Tu", "Wed", "Th", "Fr", "Sa"];
                const d = new Date(this.value);
                return weekdays[d.getDay()];
            },
        },
        lineWidth: 0,
        gridLineWidth: 1,
        tickInterval: 1000 * 3600 * 24,
        tickWidth: 0,
        gridLineColor: "#E4EBF5",
    },
    yAxis: {
        title: {
            text: null,
        },

        labels: {
            style: {
                color: "#B5B5B5",
                fontSize: "10px",
                fontFamily: "Raleway-Regular, sans-serif",
                fontVariantNumeric: "normal",
            },
            align: "center",
            x: -10,
        },
        startOnTick: false,
        lineWidth: 0,
        tickWidth: 0,
        gridLineWidth: 0,
        tickInterval: 30,
        // min: 1,
    },
    legend: {
        enabled: false,
    },
    series: [
        {
            name: "Bar Data",
            data: [
                [Date.UTC(2023, 1, 5), 110],
                [Date.UTC(2023, 1, 6), 80],
                [Date.UTC(2023, 1, 7), 90],
                [Date.UTC(2023, 1, 8), 60],
            ],
        },
    ],
    tooltip: {
        enabled: false,
    },
    plotOptions: {
        series: {
            color: "#EEF3FAD0",
            borderRadius: 18,
            pointWidth: 36,
            states: {
                hover: {
                    color: "#1A71F3",
                },
            },
            point: {
                events: {
                    click: function (event) {},
                },
            },
        },
    },
};
const barOptions2 = {
    credits: {
        enabled: false,
    },
    chart: {
        type: "column",
        spacing: [0, 0, 0, 0],
        marginTop: 40,
    },
    title: {
        text: "App Info",
        style: {
            fontFamily: "Raleway-ExtraBold, sans-serif",
            fontSize: "11px",
            color: "black",
        },
        align: "left",
        widthAdjust: 10,
    },
    xAxis: {
        // categories: ["2007", "2008", "2009"],
        type: "datetime",
        dateTimeLabelFormats: {
            // day: function () {
            //     var weekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
            //     return weekdays[this.value.getDay()];
            // },
        },
        labels: {
            style: {
                color: "#B5B5B5",
                fontSize: "10px",
                fontFamily: "Raleway-Regular, sans-serif",
            },

            formatter: function () {
                var weekdays = ["Su", "Mo", "Tu", "Wed", "Th", "Fr", "Sa"];
                const d = new Date(this.value);
                return weekdays[d.getDay()];
            },
        },
        lineWidth: 0,
        gridLineWidth: 1,
        tickInterval: 1000 * 3600 * 24,
        tickWidth: 0,
        gridLineColor: "#E4EBF5",
    },
    yAxis: {
        title: {
            text: null,
        },

        labels: {
            style: {
                color: "#B5B5B5",
                fontSize: "10px",
                fontFamily: "Raleway-Regular, sans-serif",
                fontVariantNumeric: "normal",
            },
            align: "center",
            x: -10,
        },
        startOnTick: false,
        lineWidth: 0,
        tickWidth: 0,
        gridLineWidth: 0,
        tickInterval: 30,
        // min: 1,
    },
    legend: {
        enabled: false,
    },
    series: [
        {
            name: "Bar Data",
            data: [
                [Date.UTC(2023, 1, 5), 110],
                [Date.UTC(2023, 1, 6), 80],
                [Date.UTC(2023, 1, 7), 90],
                [Date.UTC(2023, 1, 8), 60],
            ],
        },
    ],
    tooltip: {
        enabled: false,
    },
    plotOptions: {
        series: {
            color: "#EEF3FAB0",
            borderRadius: 18,
            pointWidth: 36,
            states: {
                hover: {
                    color: "#1A71F3",
                },
            },
            point: {
                events: {
                    click: function (event) {},
                },
            },
        },
    },
};
const barOptions3 = {
    credits: {
        enabled: false,
    },
    chart: {
        type: "column",
        spacing: [0, 0, 0, 0],
        marginTop: 40,
    },
    title: {
        text: "Review",
        style: {
            fontFamily: "Raleway-ExtraBold, sans-serif",
            fontSize: "11px",
            color: "black",
        },
        align: "left",
        widthAdjust: 10,
    },
    xAxis: {
        // categories: ["2007", "2008", "2009"],
        type: "datetime",
        dateTimeLabelFormats: {
            // day: function () {
            //     var weekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
            //     return weekdays[this.value.getDay()];
            // },
        },
        labels: {
            style: {
                color: "#B5B5B5",
                fontSize: "10px",
                fontFamily: "Raleway-Regular, sans-serif",
            },

            formatter: function () {
                var weekdays = ["Su", "Mo", "Tu", "Wed", "Th", "Fr", "Sa"];
                const d = new Date(this.value);
                return weekdays[d.getDay()];
            },
        },
        lineWidth: 0,
        gridLineWidth: 1,
        tickInterval: 1000 * 3600 * 24,
        tickWidth: 0,
        gridLineColor: "#E4EBF5",
    },
    yAxis: {
        title: {
            text: null,
        },

        labels: {
            style: {
                color: "#B5B5B5",
                fontSize: "10px",
                fontFamily: "Raleway-Regular, sans-serif",
                fontVariantNumeric: "normal",
            },
            align: "center",
            x: -10,
        },
        startOnTick: false,
        lineWidth: 0,
        tickWidth: 0,
        gridLineWidth: 0,
        tickInterval: 30,
        // min: 1,
    },
    legend: {
        enabled: false,
    },
    series: [
        {
            name: "Bar Data",
            data: [
                [Date.UTC(2023, 1, 5), 110],
                [Date.UTC(2023, 1, 6), 80],
                [Date.UTC(2023, 1, 7), 90],
                [Date.UTC(2023, 1, 8), 60],
            ],
        },
    ],
    tooltip: {
        enabled: false,
    },
    plotOptions: {
        series: {
            color: "#EEF3FAB0",
            borderRadius: 18,
            pointWidth: 36,
            states: {
                hover: {
                    color: "#1A71F3",
                },
            },
            point: {
                events: {
                    click: function (event) {},
                },
            },
        },
    },
};
const barOptions4 = {
    credits: {
        enabled: false,
    },
    chart: {
        type: "column",
        spacing: [0, 0, 0, 0],
        marginTop: 40,
    },
    title: {
        text: "Completed",
        style: {
            fontFamily: "Raleway-ExtraBold, sans-serif",
            fontSize: "11px",
            color: "black",
        },
        align: "left",
        widthAdjust: 10,
    },
    xAxis: {
        // categories: ["2007", "2008", "2009"],
        type: "datetime",
        dateTimeLabelFormats: {
            // day: function () {
            //     var weekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
            //     return weekdays[this.value.getDay()];
            // },
        },
        labels: {
            style: {
                color: "#B5B5B5",
                fontSize: "10px",
                fontFamily: "Raleway-Regular, sans-serif",
            },

            formatter: function () {
                var weekdays = ["Su", "Mo", "Tu", "Wed", "Th", "Fr", "Sa"];
                const d = new Date(this.value);
                return weekdays[d.getDay()];
            },
        },
        lineWidth: 0,
        gridLineWidth: 1,
        tickInterval: 1000 * 3600 * 24,
        tickWidth: 0,
        gridLineColor: "#E4EBF5",
    },
    yAxis: {
        title: {
            text: null,
        },

        labels: {
            style: {
                color: "#B5B5B5",
                fontSize: "10px",
                fontFamily: "Raleway-Regular, sans-serif",
                fontVariantNumeric: "normal",
            },
            align: "center",
            x: -10,
        },
        startOnTick: false,
        lineWidth: 0,
        tickWidth: 0,
        gridLineWidth: 0,
        tickInterval: 30,
        // min: 1,
    },
    legend: {
        enabled: false,
    },
    series: [
        {
            name: "Bar Data",
            data: [
                [Date.UTC(2023, 1, 5), 110],
                [Date.UTC(2023, 1, 6), 80],
                [Date.UTC(2023, 1, 7), 90],
                [Date.UTC(2023, 1, 8), 60],
            ],
        },
    ],
    tooltip: {
        enabled: false,
    },
    plotOptions: {
        series: {
            color: "#EEF3FAB0",
            borderRadius: 18,
            pointWidth: 36,
            states: {
                hover: {
                    color: "#1A71F3",
                },
            },
            point: {
                events: {
                    click: function (event) {},
                },
            },
        },
    },
};
Highcharts.chart("bar-container1", barOptions1);
Highcharts.chart("bar-container2", barOptions2);
Highcharts.chart("bar-container3", barOptions3);
Highcharts.chart("bar-container4", barOptions4);
