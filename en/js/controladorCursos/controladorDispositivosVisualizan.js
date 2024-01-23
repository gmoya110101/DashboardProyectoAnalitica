anychart.onDocumentReady(function () {

  anychart.data.loadJsonFile(
    'https://api.npoint.io/5520c11d069aeaca8ac6',
    function (data) {

      // Creación del gráfico
      chart = anychart.cartesian();
      //Animación
      chart.animation(true);
      // Modo interactivo
      chart.interactivity().hoverMode("by-x");

      // Título
      chart.title("Dispositivos donde se visualizan los cursos");
      // Variable series para más configuraciones
      series = chart.bubble(data);

      // Configuración de colores de las burbujas
      series.normal().fill("#FF2525", 0.3);
      series.hovered().fill("#CC0000", 0.3);
      series.selected().fill("#CC0000", 0.5);
      series.normal().stroke("#CC0000", 1, "10 5", "round");
      series.hovered().stroke("#CC0000", 2, "10 5", "round");
      series.selected().stroke("#CC0000", 4, "10 5", "round");

      // Título de los ejes
      chart.xAxis().title("Dispositivos");
      chart.yAxis().title("Visualizaciones");

      //Para mantener el tamaño
      chart.minBubbleSize("3%");
      chart.maxBubbleSize("10%");

      //Formato de etiquetas
      var tooltip = chart.tooltip();
      tooltip.title().text("Visualizaciones");
      tooltip.format("Dispositivo: {%x}\nTotal visualizaciones: {%value}");


      // dibuja
      chart.container("bubble");
      chart.draw();
    })
});