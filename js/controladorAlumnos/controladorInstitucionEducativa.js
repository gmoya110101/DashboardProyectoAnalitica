



/*
anychart.onDocumentReady(function () {

    // create data
// create data
anychart.data.loadJsonFile(
    'https://api.npoint.io/cfea05c6703201468de9',
    function (data) {

    // create a chart and set the data
    var chart = anychart.sunburst(data, "as-tree");
    chart.animation(true);
    // set the calculation mode
    

    // set the chart title
    chart.title().useHtml(true);
    chart.title("Inscritos por carrera");

    // set the container id
    chart.container("container");

    // initiate drawing the chart
    chart.draw();
    }
);
});

*/

anychart.onDocumentReady(function () {

    anychart.data.loadJsonFile(
        'https://api.npoint.io/cfea05c6703201468de9',
        function(data){

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





