anychart.onDocumentReady(function () {

    anychart.data.loadJsonFile(
        'https://api.npoint.io/6f6fb2682c359d511a44',
        function (data) {
            // Crea gráfico de barras
            var chart = anychart.column(data);
            chart.animation(true);

            // Título
            chart.title('Alumnos por sexo');

            // Configuración del tooltip
            chart.tooltip().titleFormat('{%X}');

            chart
                .tooltip()
                .position('center-top')
                .anchor('center-bottom')
                .offsetX(0)
                .offsetY(5)
                .format('Total {%Value}{groupsSeparator: }');//Formato de las etiquetas emergentes

            // Escala mínima
            chart.yScale().minimum(0);

            // Posición e interacción del tooltip 
            chart.tooltip().positionMode('point');
            chart.interactivity().hoverMode('by-x');

            // Títulos de los ejes
            chart.xAxis().title('Sexo');
            chart.yAxis().title('Cantidad');


            chart.labels(true);
            chart.labels().fontColor("#FC2A19");
            chart.labels().fontWeight(900);
            chart.labels().format("{%value}");


            // Id del contenedor del gráfico
            chart.container('barras');

            //Inicializa el gráfico
            chart.draw();
        }
    );
});