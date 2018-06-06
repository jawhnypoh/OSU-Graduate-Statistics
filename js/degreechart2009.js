
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
    data: [247, 493, 0, 56, 511, 131, 0, 676, 0, 562, 451, 0]
  }, {
    name: 'Master',
    data: [52, 52, 13, 145, 135, 28, 38, 38, 0, 60, 80, 1]
  }, {
    name: 'Doctorate',
    data: [24, 0, 6, 17, 36, 21, 10, 4, 85, 20, 34, 47]
  }]
});