
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
    data: [285, 497, 0, 23, 493, 61, 0, 733, 0, 521, 463, 0]
  }, {
    name: 'Master',
    data: [86, 40, 16, 157, 183, 32, 33, 32, 2, 77, 111, 1]
  }, {
    name: 'Doctorate',
    data: [22, 0, 8, 9, 24, 13, 9, 1, 69, 22, 43, 35]
  }]
});