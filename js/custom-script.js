function fdCalculator(){
    var options = {
        series: [20, 97],
        chart: {
          width: '100%',
          type: 'donut',
        },
        colors: ['#eef0ff', '#f7883b'],
        dataLabels: {
          enabled: false
        },
        labels: ['Investment amount', 'Est. returns'],
        legend: {
          position: 'top',
          offsetY: 0,
          height: 'auto',
        }
      };
  
      var chart = new ApexCharts(document.querySelector("#fd-chart"), options);
      chart.render();
}

function sipChart() {
    var options2 = {
        series: [44, 55],
        chart: {
          width: '100%',
          type: 'donut',
        },
        colors: ['#eef0ff', '#f7883b'],
        dataLabels: {
          enabled: false
        },
        labels: ['Investment amount', 'Est. returns'],
        legend: {
          position: 'top',
          offsetY: 0,
          height: 'auto',
        }
      };
  
      var chart = new ApexCharts(document.querySelector("#sip-chart"), options2);
      chart.render();
}

function lumsumChart() {
    var options2 = {
        series: [44, 20],
        chart: {
          width: '100%',
          type: 'donut',
        },
        colors: ['#eef0ff', '#f7883b'],
        dataLabels: {
          enabled: false
        },
        labels: ['Investment amount', 'Est. returns'],
    
        legend: {
          position: 'top',
          offsetY: 0,
          height: 'auto',
        }
      };
  
      var chart = new ApexCharts(document.querySelector("#lumsum-chart"), options2);
      chart.render();
}
function rdChart() {
    var options2 = {
        series: [44, 40],
        chart: {
          width: '100%',
          type: 'donut',
        },
        colors: ['#eef0ff', '#f7883b'],
        dataLabels: {
          enabled: false
        },
        labels: ['Investment amount', 'Est. returns'],
    
        legend: {
          position: 'top',
          offsetY: 0,
          height: 'auto',
        }
      };
  
      var chart = new ApexCharts(document.querySelector("#rd-chart"), options2);
      chart.render();
}


fdCalculator();
sipChart();
lumsumChart();
rdChart();