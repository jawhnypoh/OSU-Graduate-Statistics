
Highcharts.chart('total-container', {
  chart: {
    type: 'bar'
  },
  title: {
    text: ''
  },
  xAxis: {
    categories: ['2001', '2005', '2009', '2013', '2017']
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Number of Graduates'
    }
  },
  legend: {
    reversed: true
  },
  plotOptions: {
    series: {
      stacking: 'normal'
    }
  },
  series: [{
    name: 'Doctorate',
    data: [202,	255, 304, 353, 396]
  }, {
    name: 'Master',
    data: [584, 770, 642, 735, 984]
  }, {
    name: 'Bachelor',
    data: [2531, 3058, 3127, 3913, 5148]
  }]
});