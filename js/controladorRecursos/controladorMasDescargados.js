anychart.onDocumentReady(function () {
  anychart.data.loadJsonFile(
    'https://api.npoint.io/80ec987aae137a75414d',
    function (data) {

      var chart = anychart.pie(data);
      //Animación
      chart.animation(true);
      // Título
      chart
        .title('Recursos más descargados')
        // Radio
        .radius('45%')
        // Crea área vacía en el gráfico
        .innerRadius('35%');


      //Formato de etiquetas
      var tooltip = chart.tooltip();
      tooltip.title().text("Descargas");
      tooltip.format("Recurso: {%name}\nTotal descargas: {%value}");

      // Id del contenedor
      chart.container('container');
      // Inicializar el gráfico
      chart.draw();
    })
});