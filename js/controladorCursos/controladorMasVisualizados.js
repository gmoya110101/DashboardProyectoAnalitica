anychart.onDocumentReady(function () {

    anychart.data.loadJsonFile(
        'https://api.npoint.io/6158addf47d48b51ae12',
        function (data) {
            var dataSet = anychart.data.set(data);
            // Poner el tipo de gráfico
            var chart = anychart.heatMap(data);
            //Titulo
            chart.title("Cursos más visualizados por mes");
            // Creación de la escala de colores
            var colorScale = anychart.scales.ordinalColor();
            // Parámetros de los rangos
            colorScale.ranges([
                // Color de los parámetros
                { less: 200000, color: "#008000" },
                { from: 200000, to: 4000000, color: "#9ACD32" },
                { from: 4000000, to: 6000000, color: "#FFFF00" },
                { from: 6000000, to: 8000000, color: "#FFA500" },
                { greater: 8000000, color: "#FF4500" }
            ]);

            //Formato de etiquetas
            var tooltip = chart.tooltip();
            tooltip.title().text("Visualizaciones");
            tooltip.format("Curso: {%x}\nTotal visualizaciones: {%heat}");

            // Se aplica la escala
            chart.colorScale(colorScale);

            var xLabels = chart.xAxis().labels();
            xLabels.fontSize(10);

            // dibuja el gráfico
            chart.container("heatmap");
            chart.draw();
        })
});