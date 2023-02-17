
anychart.onDocumentReady(function () {
  // Creates Area chart.
  anychart.data.loadJsonFile(
    'https://api.npoint.io/e27d6bdcfb33c44796ab',
    function (data) {
      // create column chart
      var chart = anychart.area(data);
      chart.animation(true);

      chart.title('Alumnos por Edad');
      chart.container('container');
      chart.draw();
    }
  );
});