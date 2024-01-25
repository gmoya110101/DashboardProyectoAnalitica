anychart.onDocumentReady(function () {
  anychart.data.loadJsonFile(
    'https://api.npoint.io/000cf7061125903c0963',
    function (data) {

      var chart = anychart.pie(data);
      //Animación
      chart.animation(true);
      // Título
      chart
        .title('Most downloaded resources')
        // Radio
        .radius('45%')
        // Crea área vacía en el gráfico
        .innerRadius('35%');


      //Formato de etiquetas
      var tooltip = chart.tooltip();
      tooltip.title().text("Downloads");
      tooltip.format("Resource: {%name}\nDownloads: {%value}");

      // Id del contenedor
      chart.container('container');
      // Inicializar el gráfico
      chart.draw();
    })
});