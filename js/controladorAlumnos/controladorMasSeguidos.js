anychart.onDocumentReady(function () {

    // Creates Sankey chart.


    anychart.data.loadJsonFile(
        // anterior"https://api.npoint.io/21e11d87269bde2edbe7",
        "https://api.npoint.io/41360bdfca7543f19673",
        function (data) {
            var chart = anychart.sankey(data);
            chart.title('Create a Sankey chart');
            chart.container('container');
            chart.draw();
        }
    );

});