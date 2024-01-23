anychart.onDocumentReady(function () {

  anychart.data.loadJsonFile(
    'https://api.npoint.io/1aa979f13c6b48517df1',
    function (data) {
      var dataSet = anychart.data.set(data);
      var colors = anychart.scales
        .ordinalColor()
        .colors(['#26959f', '#f18126', '#3b8ad8', '#60727b', '#e24b26']);

      // Inicialización del gráfico
      var chart = anychart.tagCloud();

      // Título
      chart
        .title('Recursos más buscados')
        // Integración de los datos
        .data(dataSet)
        // Integración de los colores
        .colorScale(colors)
        //ángulos para la posición de las palabras
        .angles([-90, 0, 90]);

      // Obtiene el rango de color
      var colorRange = chart.colorRange();
      // Habilita el rango de color
      colorRange
        .enabled(true)
        // Tamaño del color
        .colorLineSize(15);

      // Div contenedor
      chart.container('tagcloud');
      // Dibuja la gráfica
      chart.draw();

      //Formato de etiquetas
      var tooltip = chart.tooltip();
      tooltip.title().text("Búsquedas");
      tooltip.format("Recurso: {%x}\nPopularidad: {%value}");

      // Eventos para las palabras
      var normalFillFunction = chart.normal().fill();
      var hoveredFillFunction = chart.hovered().fill();
      // Configuración para la interabilidad de los colores
      chart.listen('pointsHover', function (e) {
        if (e.actualTarget === colorRange) {
          if (e.points.length) {
            chart.normal({
              fill: 'black 0.1'
            });
            // Configuración para el evento hover
            chart.hovered({
              fill: chart
                .colorScale()
                .valueToColor(e.point.get('category'))
            });
          } else {
            // Función para que esté normal
            chart.normal({
              fill: normalFillFunction
            });
            // Función para poner el evento hover
            chart.hovered({
              fill: hoveredFillFunction
            });
          }
        }
      });
    }
  );
});