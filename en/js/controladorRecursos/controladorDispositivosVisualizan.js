anychart.onDocumentReady(function () {

  anychart.data.loadJsonFile(
    'https://api.npoint.io/049b414dc3635f3507a8',
    function (data) {

      // Crea el gráfico
      chart = anychart.cartesian();
      //Animación
      chart.animation(true);
      // Modo de interactividad
      chart.interactivity().hoverMode("by-x");

      // Crea el formato series y agrega los datos
      series = chart.bubble(data);
      // Título
      chart.title("Bubble Chart");

      // Variable series para más configuraciones
      series = chart.bubble(data);

      // Configuración de colores de las burbujas
      series.normal().fill("#FF2525", 0.3);
      series.hovered().fill("#CC0000", 0.3);
      series.selected().fill("#CC0000", 0.5);
      series.normal().stroke("#CC0000", 1, "10 5", "round");
      series.hovered().stroke("#CC0000", 2, "10 5", "round");
      series.selected().stroke("#CC0000", 4, "10 5", "round");

      // Títulos de los ejes 
      chart.xAxis().title("Devices");
      chart.yAxis().title("Views");

      //Para mantener el tamaño
      chart.minBubbleSize("3%");
      chart.maxBubbleSize("10%");

      //Formato de etiquetas
      var tooltip = chart.tooltip();
      tooltip.title().text("Views");
      tooltip.format("Device: {%x}\nViews: {%value}");

      // Dibuja el gráficoF
      chart.container("bubble");
      chart.draw();
    })
});