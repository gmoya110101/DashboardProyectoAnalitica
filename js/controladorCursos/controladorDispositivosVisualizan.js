anychart.onDocumentReady(function () {

  anychart.data.loadJsonFile(
    'https://api.npoint.io/a6544de555d27a2bb4ea',
    function (data) {

      // create a chart
      chart = anychart.cartesian();

      // set the interactivity mode
      chart.interactivity().hoverMode("by-x");

      // create a bubble series and set the data
      series = chart.bubble(data);
      // set chart title
      chart.title("Bubble Chart");


      // set axes titles 
      chart.xAxis().title("Dispositivos");
      chart.yAxis().title("Visualizaciones");

      // draw
      chart.container("bubble");
      chart.draw();
    })
});