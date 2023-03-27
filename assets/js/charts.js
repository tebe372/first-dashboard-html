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

// Highcharts.chart("t-income-chart", {});

$(function () {
    // Define your chart options
    var incomeChartOptions = {
        credits: {
            enabled: false,
        },
        chart: {
            type: "areaspline",
            spacing: [0, 0, 0, 0],
        },
        title: {
            text: "",
        },
        xAxis: {
            visible: false,
        },
        yAxis: {
            visible: false,
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
                        y2: 1,
                    },
                    stops: [
                        [0, "#118AB220"],
                        [1, "#118AB200"],
                    ],
                },
                data: [1, 2, 1, 2],
                color: "#118AB2",
            },
        ],
        legend: { enabled: false },
    };
    var costChartOptions = {
        credits: {
            enabled: false,
        },
        chart: {
            type: "areaspline",
            spacing: [0, 0, 0, 0],
        },
        title: {
            text: "",
        },
        xAxis: {
            visible: false,
        },
        yAxis: {
            visible: false,
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
                        y2: 1,
                    },
                    stops: [
                        [0, "#118AB220"],
                        [1, "#118AB200"],
                    ],
                },
                data: [1, 3, 2, 5, 4],
                color: "#118AB2",
            },
        ],
        legend: { enabled: false },
    };

    var resultChartOptions = {
        credits: {
            enabled: false,
        },
        chart: {
            type: "column",
            spacing: [0, 0, 0, 0],
        },
        title: {
            text: "",
        },
        xAxis: {
            visible: false,
        },
        yAxis: {
            plotLines: [
                {
                    value: 0,
                    color: "#F0F0F0",
                    width: 1,
                    zIndex: 4,
                },
            ],
            title: {
                enabled: false,
            },
            labels: {
                enabled: false,
            },
            //  visible: false,
        },
        tooltip: {
            enabled: false,
        },
        plotOptions: {
            series: {
                //    pointWidth: 16,
                pointPadding: 0,
                groupPadding: 0.1,
            },
        },
        series: [
            {
                name: "Benchmark Conv Rate",

                data: [1, 3, -2, 2],

                color: "#CEDFF9",
                negativeColor: "#F9D7DF",
            },
        ],
        legend: { enabled: false },
    };

    // Loop through each row in the table
    // $("#conversion-rate-table tbody tr").each(function () {
    //     var chartContainer = $("<div>").addClass("t-income-chart");
    //     Highcharts.chart(chartContainer[0], chartOptions);
    //     $(this).find(".t-income-q").append(chartContainer);
    // });
    const incomeCharts = [
        "t-income-chart-1",
        "t-income-chart-2",
        "t-income-chart-3",
        "t-income-chart-4",
        "t-income-chart-5",
        "t-income-chart-6",
    ];
    const costCharts = [
        "t-cost-chart-1",
        "t-cost-chart-2",
        "t-cost-chart-3",
        "t-cost-chart-4",
        "t-cost-chart-5",
        "t-cost-chart-6",
    ];
    const resultharts = [
        "t-result-chart-1",
        "t-result-chart-2",
        "t-result-chart-3",
        "t-result-chart-4",
        "t-result-chart-5",
        "t-result-chart-6",
    ];
    incomeCharts.map((item) => {
        Highcharts.chart(item, incomeChartOptions);
    });
    costCharts.map((item) => {
        Highcharts.chart(item, costChartOptions);
    });
    resultharts.map((item) => {
        Highcharts.chart(item, resultChartOptions);
    });
});
