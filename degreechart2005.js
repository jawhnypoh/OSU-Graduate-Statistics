
Highcharts.chart('degree-container-2005', {
  chart: {
    type: 'column'
  },
  title: {
    text: '2005'
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
    data: [22, 0, 8, 9, 24, 13, 9, 1, 69, 22, 43, 35]
  }, {
    name: 'Master',
    data: [86, 40, 16, 157, 183, 32, 33, 32, 2, 77, 111, 1]
  }, {
    name: 'Bachelor',
    data: [285, 497, 0, 23, 493, 61, 0, 733, 0, 521, 463, 0]
  }]
});