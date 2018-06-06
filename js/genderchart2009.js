
Highcharts.chart('gender-container-2009', {
    chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45
        }
    },
    title: {
        text: '2009'
    },
    subtitle: {
        text: 'Source: institutionalresearch.oregonstate.edu'
    },
    plotOptions: {
        pie: {
            innerSize: 100,
            depth: 45
        }
    },
    series: [{
        name: 'Total Amount',
        data: [
            ['Male', 2047],
            ['Female', 2026]
        ]
    }]
});