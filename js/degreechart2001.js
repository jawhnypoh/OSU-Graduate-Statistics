
Highcharts.chart('degree-container-2001', {
  chart: {
    type: 'column'
  },
  title: {
    text: '2001'
  },
    
  subtitle: {
    text: 'Source: institutionalresearch.oregonstate.edu'
  },
    
  xAxis: {
    categories: ['Agricultural Sciences', 'Business', 'Earth, Ocean, &amp; Atmospheric Sciences', 'Education', 'Engineering', 'Forestry', 'Graduate School', 'Liberal Arts', 'Pharamcy', 'Public Health &amp; Human Sciences', 'Science', 'Veterinary Medicine']
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Total Number of Graduates'
    },
    stackLabels: {
      enabled: true,
      style: {
        fontWeight: 'bold',
        color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
      }
    }
  },
  legend: {
    align: 'right',
    x: -30,
    verticalAlign: 'top',
    y: 25,
    floating: true,
    backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
    borderColor: '#CCC',
    borderWidth: 1,
    shadow: false
  },
  tooltip: {
    headerFormat: '<b>{point.x}</b><br/>',
    pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
  },
  plotOptions: {
    column: {
      stacking: 'normal',
      dataLabels: {
        enabled: true,
        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
      }
    }
  },
  series: [{
    name: 'Doctorate',
    data: [28, 0, 6, 29, 22, 14, 7, 6, 1, 11, 45, 33]
  }, {
    name: 'Master',
    data: [51, 36, 20, 136, 116, 28, 45, 36, 30, 1, 84, 1]
  }, {
    name: 'Bachelor',
    data: [267, 341, 0, 193, 417, 82, 0, 168, 568, 100, 395, 0]
  }]
});