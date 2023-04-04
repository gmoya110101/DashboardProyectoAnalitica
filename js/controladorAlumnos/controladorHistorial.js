anychart.onDocumentReady(function () {

    anychart.data.loadJsonFile(//Obtiene el JSON
        'https://api.npoint.io/74cda11e8e8ae42c525e',
        function (data) {

            // Crea el gráfico de línea del tiempo
            var chart = anychart.timeline();


            chart.title('Historial de navegación');

            // Carga los datos
            var rangeSeries = chart.range(data);

            // Configuración de los datos
            rangeSeries
                .labels()
                .useHtml(true)
                .fontColor('#fff')
                .format(
                    '{%name}<br><span style="font-size: 85%">{%start}{dateTimeFormat:MM/dd} - {%end}{dateTimeFormat:MM/dd}</span>'
                );

            // Alto de los segmentos
            rangeSeries.height(70);

            // Se agregan los eventos
            chart.moment(eventsData());

            // Línea del referencia
            chart.lineMarker().value('2022/12/31').stroke('2 #ff0000');

            // Obtenemos el div contenedor
            chart.container('timeline');
            // Se dibuja la gráfica
            chart.draw();


        })
});


// Función de los eventos 
function eventsData() {
    return [
        ['2023/01/25', 'Acceso al sistema'],
        ['2023/02/15', 'Acceso al sistema'],
        ['2023/03/09', 'Acceso al sistema'],
        ['2023/03/14', 'Acceso al sistema'],
        ['2023/03/19', 'Acceso al sistema'],
        ['2023/04/08', 'Acceso al sistema'],
        ['2023/04/26', 'Acceso al sistema']
    ];
}