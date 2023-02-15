anychart.onDocumentReady(function () {

    anychart.data.loadJsonFile(
        'https://api.npoint.io/527b0247643488ed81b4',
        function (data) {
            // create column chart
            var chart = anychart.column(data);
            chart.animation(true);

            // set chart title text settings
            chart.title('Alumnos por sexo');

            // set series tooltip settings
            chart.tooltip().titleFormat('{%X}');

            chart
                .tooltip()
                .position('center-top')
                .anchor('center-bottom')
                .offsetX(0)
                .offsetY(5)
                .format('Total {%Value}{groupsSeparator: }');//Formato de las etiquetas emergentes

            // set scale minimum
            chart.yScale().minimum(0);

            // tooltips position and interactivity settings
            chart.tooltip().positionMode('point');
            chart.interactivity().hoverMode('by-x');

            // axes titles
            chart.xAxis().title('Sexo');
            chart.yAxis().title('Cantidad');

            // set container id for the chart
            chart.container('barras');

            // initiate chart drawing
            chart.draw();
        }
    );
});