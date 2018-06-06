
Highcharts.chart('degree-container-2013', {
  chart: {
    type: 'column'
  },
  title: {
    text: '2013'
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
    data: [20, 4, 8, 31, 60, 10, 20, 2, 92, 16, 35, 55]
  }, {
    name: 'Master',
    data: [63, 71, 26, 139, 184, 29, 49, 62, 3, 62, 45, 2]
  }, {
    name: 'Bachelor',
    data: [381, 598, 130, 69, 653, 178, 0, 801, 0, 681, 422, 2]
  }]
});