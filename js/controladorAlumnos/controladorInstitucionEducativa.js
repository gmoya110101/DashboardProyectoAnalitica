anychart.onDocumentReady(function () {

    // create data
    anychart.data.loadJsonFile(
<<<<<<< HEAD
        'https://api.npoint.io/f98b2a41ea3eeeb7c5f0',
        function (data) {
            // create column chart
            var chart = anychart.area(data);
            chart.animation(true);

    // create a chart and set the data
    var chart = anychart.sunburst(data, "as-tree");

    // set the calculation mode
    chart.calculationMode("parent-independent");

    // format chart labels
    chart.labels().format('{%Name}');

    // format chart labels
    chart.tooltip().format('{%Name}:{%Value}');

    // set the container id
    chart.container("container");

    // initiate drawing the chart
    chart.draw();
        }
    );
});
*/



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
        'https://api.npoint.io/21e11d87269bde2edbe7',
=======
        'https://api.npoint.io/3b44b5011e40eab136a7',
>>>>>>> 9ac95a3ea63422637e44658748db1848f5758cb0
        function (data) {
            // Creates Sankey chart.
            var chart = anychart.sankey(data);

<<<<<<< HEAD
            chart.title('Create a Sankey chart');
            chart.container('container');
            chart.draw();
=======
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
>>>>>>> 9ac95a3ea63422637e44658748db1848f5758cb0
        }
    );
});





