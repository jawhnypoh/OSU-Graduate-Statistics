
Highcharts.chart('degree-container-2017', {
  chart: {
    type: 'column'
  },
  title: {
    text: '2017'
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
    data: [46, 6, 15, 23, 75, 9, 11, 4, 80, 23, 53, 51]
  }, {
    name: 'Master',
    data: [75, 112, 22, 126, 342, 52, 46, 91, 1, 57, 56, 4]
  }, {
    name: 'Bachelor',
    data: [498, 641, 103, 61, 1301, 173, 0, 966, 0, 845, 560, 0]
  }]
});