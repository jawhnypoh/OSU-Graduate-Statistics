
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
    categories: [
      'Agricultural Sciences', 'Business', 'Earth, Ocean, &amp; Atmospheric Sciences', 'Education', 'Engineering', 'Forestry', 'Graduate School', 'Liberal Arts', 'Pharamcy', 'Public Health &amp; Human Sciences', 'Science', 'Veterinary Medicine'
    ],
    crosshair: true
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Number of Graduates'
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0
    }
  },
  series: [{
    name: 'Bachelor',
    data: [498, 641, 103, 61, 1301, 173, 0, 966, 0, 845, 560, 0]
  }, {
    name: 'Master',
    data: [75, 112, 22, 126, 342, 52, 46, 91, 1, 57, 56, 4]
  }, {
    name: 'Doctorate',
    data: [46, 6, 15, 23, 75, 9, 11, 4, 80, 23, 53, 51]
  }]
});
