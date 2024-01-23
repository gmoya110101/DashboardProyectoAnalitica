anychart.onDocumentReady(function () {
  anychart.data.loadJsonFile(
    'https://api.npoint.io/753b2e36bfe793431ace',
    function (data) {
      // Crea el diagrama de Venn
      var chart = anychart.venn(data);

      // Inserta título
      chart
        .title()
        .enabled(true)
        .padding({ bottom: 10 })
        .text('Relaciones de materias en las carreras');

      // Grosor y color del trazo
      chart.stroke('2 #fff');

      // Configuración de la etiqueta
      chart.labels().fontSize(14).format('{%Name}');

      // Configuración de la etiqueta de las intersecciones
      chart
        .intersections()
        .labels()
        .fontColor('#fff')
        .fontWeight('bold')
        .format('{%Name}');

      // Color de las letras de las etiquetas de las intersecciones cuando se seleccionan
      chart.intersections().hovered().fill('#fff 0.5');

      // Margen de la leyenda
      chart.legend().padding({ top: 10 });

      // Configuración de la barra de herramientas
      chart.tooltip().titleFormat('{%Name}');

      //Id del div
      chart.container('venn');
      // Dibuja el gráfico
      chart.draw();
    }
  );
});