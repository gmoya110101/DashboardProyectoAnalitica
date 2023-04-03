
anychart.onDocumentReady(function () {
  // Creación de un gráfico de área
  anychart.data.loadJsonFile(
    'https://api.npoint.io/e27d6bdcfb33c44796ab',
    function (data) {
      
      // Crea instancia de la gráfica
      var chart = anychart.area(data);

      var series = chart.area(data);

      chart.animation(true);
      chart.title('Alumnos por edad');
      chart.xAxis().title('Edad');
      chart.yAxis().title('Total de alumnos');
      chart.container('container');
      //Formato de etiquetas
      var tooltip = chart.getSeries(0).tooltip();
      tooltip.title().text("Alumnos por edad");
      tooltip.format("Edad: {%x}\nTotal: {%value}");
      //Para el color
      series.normal().fill("#FF2525", 0.9);
      series.hovered().fill("#CC0000", 0.1);
      series.selected().fill("#CC0000", 0.5);
      series.normal().stroke("#CC0000", 1, "10 5", "round");
      series.hovered().stroke("#CC0000", 2, "10 5", "round");
      series.selected().stroke("#CC0000", 4, "10 5", "round");
      chart.draw();
    }
  );
});