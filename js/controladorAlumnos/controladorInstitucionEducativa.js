anychart.onDocumentReady(function () {

    // create data
    anychart.data.loadJsonFile(
        'https://api.npoint.io/3b44b5011e40eab136a7',
        function (data) {
          var chart = anychart.pie(data);

    // create a chart and set the data
    var chart = anychart.pie(data);

    // set the explosion range in different states
    chart.selected().explode("3%");
    chart.hovered().explode("3%");

    // explode the fourth and fifth slices
    chart.select([3, 4]);

    // set the chart title
    chart.title("Alumnos por institucion educativa");

    // set the container id
    chart.container("pastel");

    // initiate drawing the chart
    chart.draw();
        }
    );
});
