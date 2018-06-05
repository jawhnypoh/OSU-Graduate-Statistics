
Highcharts.chart('college-container', {

  title: {
    text: ''
  },

  subtitle: {
    text: 'Source: institutionalresearch.oregonstate.edu'
  },

  yAxis: {
    title: {
      text: 'Number of Graduates'
    }
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false
      },
      pointStart: 2001
    }
  },

  series: [{
    name: 'Agricultural Sciences',
    data: [340, 389, 393, 382, 323, 338, 464, 596]
  }, {
    name: 'Business',
    data: [377, 453, 519, 550, 545, 558, 673, 849]
  }, {
    name: 'Earth, Ocean, &amp; Atmosphereic Sciences',
    data: [26, 24, 24, 25, 19, 25, 164, 165]
  }, {
    name: 'Education',
    data: [358, 159, 189, 204, 218, 255, 239, 240]
  }, {
    name: 'Engineering',
    data: [555, 659, 700, 727, 682, 796, 897, 1387]
  }, {
    name: 'Forestry',
    data: [124, 137, 106, 149, 180, 204, 217, 222]
  }, {
    name: 'Graduate School',
    data: [52, 50, 42, 41, 48, 65, 69, 48]
  }, {
    name: 'Liberal Arts',
    data: [599, 783, 766, 776, 718, 821, 865, 1068]
  }, {
    name: 'Pharmacy',
    data: [599, 783, 766, 776, 718, 821, 865, 1068]
  }, {
    name: 'Public Health &amp; Human Services',
    data: [201, 543, 620, 592, 642, 715, 759, 998]
  }, {
    name: 'Science',
    data: [524, 595, 617, 639, 565, 622, 502, 655]
  }, {
    name: 'Vertinary Medicine',
    data: [34, 34, 36, 51, 48, 50, 57, 61]                      
  }],

  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
      chartOptions: {
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom'
        }
      }
    }]
  }

});