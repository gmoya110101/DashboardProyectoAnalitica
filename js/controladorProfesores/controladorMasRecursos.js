var chart;
anychart.onDocumentReady(function () {
    anychart.data.loadJsonFile(
        // Función para obtener los datos desde JSON
        'https://api.npoint.io/8f012019c6378873c61d',
        function (data) {
            // crea el gráfico
            chart = anychart.graph(data);

            // Se pone el layout
            chart.layout({ iterationCount: 0 });

            // Configuración de las letras
            chart
                .nodes()
                .labels()
                .fontSize(12)
                .enabled(true)
                .anchor('auto')
                .autoRotate(true);

            // div contenedor
            chart.container('relacion');
            // Inicializa el gráfico
            chart.draw();

            // Configuración de zoom
            chart.zoom(
                0.68,
                chart.getPixelBounds().width / 2,
                chart.getPixelBounds().height / 2
            );
        }
    );
});