anychart.onDocumentReady(function () {

    anychart.data.loadJsonFile(
        'https://api.npoint.io/8c7663f9e9b7fe7f2858',
        function (data) {

            // Crea el gráfico de pastel
            var chart = anychart.pie(data);
            //Animación de inicio
            chart.animation(true);
            // Animación que saca la rebanada del gráfico cuando se pasa el mouse encima
            chart.selected().explode("5%");
            chart.hovered().explode("5%");

            //Formato de etiquetas
            var tooltip = chart.tooltip();
            tooltip.title().text("Enrolled by institution");
            tooltip.format("Institution: {%x}\nInscribed: {%value}");

            // Título del gráfico
            chart.title("Students by educational institution")
                .radius('90%');;

            // // Id del div
            chart.container("pastel");

            // Dibuja el gráfico
            chart.draw();

        }
    );
});





