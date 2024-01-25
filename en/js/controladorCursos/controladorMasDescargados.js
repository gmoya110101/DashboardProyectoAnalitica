anychart.onDocumentReady(function () {
  anychart.data.loadJsonFile(
    'https://api.npoint.io/6775a9604fc1edadb653',
    function (data) {

      var chart = anychart.pie(data);

      //Animación
      chart.animation(true);
      // Título
      chart
        .title('Most downloaded courses')
        // Radio
        .radius('45%')
        // Crea área vacía en el gráfico
        .innerRadius('35%');

      //Formato de etiquetas
      var tooltip = chart.tooltip();
      tooltip.title().text("Downloads");
      tooltip.format("Course: {%name}\nDownloads: {%value}");

      // Contenedor
      chart.container('container');
      // Inicializar el gráfico
      chart.draw();
    })
});




