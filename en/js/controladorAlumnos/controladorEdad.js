
anychart.onDocumentReady(function () {
  // Creación de un gráfico de área
  anychart.data.loadJsonFile(
    'https://api.npoint.io/e27d6bdcfb33c44796ab',
    function (data) {
      
      // Crea instancia de la gráfica
      var chart = anychart.area(data);

      
      chart.animation(true);
      chart.title('Students by age');
      chart.xAxis().title('Age');
      chart.yAxis().title('Total students');
      chart.container('container');
     
      //Formato de etiquetas
      var tooltip = chart.getSeries(0).tooltip();
      tooltip.title().text("Students by age");
      tooltip.format("Age: {%x}\nTotal: {%value}");
     
      //Para el color
      var series = chart.area(data);

      series.normal().fill("#FF2525", 0.9);
      series.hovered().fill("#CC0000", 0.1);
      series.selected().fill("#CC0000", 0.5);
      series.normal().stroke("#CC0000", 1, "10 5", "round");
      series.hovered().stroke("#CC0000", 2, "10 5", "round");
      series.selected().stroke("#CC0000", 4, "10 5", "round");
      series.markers(true);
      series.markers().type("star5");//Puntos con forma de estrella
      series.markers().fill("gold");
      series.markers().size(5);

      chart.draw();
    }
  );
});