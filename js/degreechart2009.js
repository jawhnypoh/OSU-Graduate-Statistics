
Highcharts.chart('degree-container-2009', {
  chart: {
    type: 'column'
  },
  title: {
    text: '2009'
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
    data: [24, 0, 6, 17, 36, 21, 10, 4, 85, 20, 34, 47]
  }, {
    name: 'Master',
    data: [52, 52, 13, 145, 135, 28, 38, 38, 0, 60, 80, 1]
  }, {
    name: 'Bachelor',
    data: [247, 493, 0, 56, 511, 131, 0, 676, 0, 562, 451, 0]
  }]
});