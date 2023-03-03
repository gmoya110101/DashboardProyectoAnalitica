anychart.onDocumentReady(function () {
  // To work with the data adapter you need to reference the data adapter script file from AnyChart CDN
  // https://cdn.anychart.com/releases/v8/js/anychart-data-adapter.min.js

  // Load JSON data and create a chart by JSON data
  // The data used in this sample can be obtained from the CDN
  // https://cdn.anychart.com/samples/general-features/load-json-data/data.json
  anychart.data.loadJsonFile(
    'https://api.npoint.io/459242b023a82dff65a8',
    function (data) {
      var chart = anychart.pie3d(data);
      chart
        .title('Alumnos inscritos por carrera')
        // set chart radius
        .radius('70%');

      // set container id for the chart
      chart.container('pastel3d');
      // initiate chart drawing
      chart.draw();
    }
  );
});

