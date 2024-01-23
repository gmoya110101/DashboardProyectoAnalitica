anychart.onDocumentReady(function () {
    anychart.data.loadJsonFile(
        // Función para obtener los datos desde JSON
        'https://api.npoint.io/104cff5847e76b938812',
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

            // Color de líneas
            chart.edges().stroke('2 #62FDE6');

            // Color de líneas cuando pasa el mouse encima
            chart.edges().hovered().stroke('3 #FF5757');

            // Color de líneas cuando se selecciona
            chart.edges().selected().stroke('4 #00D107');

            // div contenedor
            chart.container('container');
            // Inicializa el gráfico
            chart.draw();

            // Configuración de zoom
            chart.zoom(
                0.9,
                chart.getPixelBounds().width / 2,
                chart.getPixelBounds().height / 2
            );
        }
    );
});