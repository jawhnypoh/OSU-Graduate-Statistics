
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
    data: [381, 598, 130, 69, 653, 178, 0, 801, 0, 681, 422, 2]
  }, {
    name: 'Master',
    data: [63, 71, 26, 139, 184, 29, 49, 62, 3, 62, 45, 2]
  }, {
    name: 'Doctorate',
    data: [20, 4, 8, 31, 60, 10, 20, 2, 92, 16, 35, 55]
  }]
});

