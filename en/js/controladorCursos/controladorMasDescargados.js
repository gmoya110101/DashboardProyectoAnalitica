anychart.onDocumentReady(function () {
  anychart.data.loadJsonFile(
    'https://api.npoint.io/b1800e5c0e3e89070704',
    function (data) {

      var chart = anychart.pie(data);

      //Animación
      chart.animation(true);
      // Título
      chart
        .title('Cursos más descargados')
        // Radio
        .radius('45%')
        // Crea área vacía en el gráfico
        .innerRadius('35%');

      //Formato de etiquetas
      var tooltip = chart.tooltip();
      tooltip.title().text("Descargas");
      tooltip.format("Curso: {%name}\nTotal descargas: {%value}");

      // Contenedor
      chart.container('container');
      // Inicializar el gráfico
      chart.draw();
    })
});




