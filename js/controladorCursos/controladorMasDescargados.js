anychart.onDocumentReady(function () {
  anychart.data.loadJsonFile(
    'https://api.npoint.io/b1800e5c0e3e89070704',
    function (data) {

      var chart = anychart.pie(data);

      // set chart title text settings
      chart
        .title('Top 7 cursos más descargados')
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




