anychart.onDocumentReady(function () {
  anychart.data.loadJsonFile(
    'https://api.npoint.io/e8ab7c4aa2a3f72632b9',
    function (data) {
      var chart = anychart.pie3d(data);
      //Animación
      chart.animation(true);

      chart
        .title('Students enrolled by major')
        // Radio del gráfico
        .radius('70%');

      // Animación que saca la rebanada del gráfico cuando se pasa el mouse encima
      chart.selected().explode("5%");
      chart.hovered().explode("5%");

       //Formato de etiquetas
       var tooltip = chart.tooltip();
       tooltip.title().text("Enrolled by major");
       tooltip.format("career: {%x}\nEnrolled: {%value}");

      // Id del div
      chart.container('pastel3d');
      // Dibuja el gráfico
      chart.draw();
    }
  );
});

