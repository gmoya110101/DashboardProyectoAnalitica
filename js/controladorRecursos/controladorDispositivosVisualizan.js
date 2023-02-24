anychart.onDocumentReady(function () {

  anychart.data.loadJsonFile(
    'https://api.npoint.io/ffbf3a32566521a92ed7',
    function (data) {

      // Crea el gráfico
      chart = anychart.cartesian();

      // Modo de interactividad
      chart.interactivity().hoverMode("by-x");

      // Crea el formato series y agrega los datos
      series = chart.bubble(data);
      // Título
      chart.title("Bubble Chart");


      // Títulos de los ejes 
      chart.xAxis().title("Dispositivos");
      chart.yAxis().title("Visualizaciones");

      // Dibuja el gráficoF
      chart.container("bubble");
      chart.draw();
    })
});