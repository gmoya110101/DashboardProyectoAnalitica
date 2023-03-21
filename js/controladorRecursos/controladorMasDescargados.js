anychart.onDocumentReady(function () {
  anychart.data.loadJsonFile(
    'https://api.npoint.io/80ec987aae137a75414d',
    function (data) {

      var chart = anychart.pie(data);

      // set chart title text settings
      chart
        .title('Recursos más descargados')
        // set chart radius
        .radius('45%')
        // create empty area in pie chart
        .innerRadius('35%');

      // set container id for the chart
      chart.container('container');
      // initiate chart drawing
      chart.draw();
    })
});