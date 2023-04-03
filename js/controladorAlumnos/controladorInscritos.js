anychart.onDocumentReady(function () {
  anychart.data.loadJsonFile(
    'https://api.npoint.io/459242b023a82dff65a8',
    function (data) {
      var chart = anychart.pie3d(data);
      chart
        .title('Alumnos inscritos por carrera')
        // Radio del gráfico
        .radius('70%');

      // Animación que saca la rebanada del gráfico cuando se pasa el mouse encima
      chart.selected().explode("5%");
      chart.hovered().explode("5%");

       //Formato de etiquetas
       var tooltip = chart.tooltip();
       tooltip.title().text("Inscritos por carrera");
       tooltip.format("Carrera: {%x}\nInscritos: {%value}");

      // Id del div
      chart.container('pastel3d');
      // Dibuja el gráfico
      chart.draw();
    }
  );
});

