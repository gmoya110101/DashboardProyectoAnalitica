anychart.onDocumentReady(function () {

  anychart.data.loadJsonFile(
    'https://api.npoint.io/5520c11d069aeaca8ac6',
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

      //Para mantener el tamaño
      chart.minBubbleSize("3%");
      chart.maxBubbleSize("10%");

      // draw
      chart.container("bubble");
      chart.draw();
    })
});