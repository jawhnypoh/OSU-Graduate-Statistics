
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
    data: [267, 341, 0, 193, 417, 82, 0, 168, 568, 100, 395, 0]
  }, {
    name: 'Master',
    data: [51, 36, 20, 136, 116, 28, 45, 36, 30, 1, 84, 1]
  }, {
    name: 'Doctorate',
    data: [28, 0, 6, 29, 22, 14, 7, 6, 1, 11, 45, 33]
  }]
});