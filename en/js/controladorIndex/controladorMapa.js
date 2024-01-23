anychart.onDocumentReady(function () {
    // Crea el mapa
    var map = anychart.map();

    anychart.data.loadJsonFile(
        // Obtiene los datos desde un archivo JSON
        'https://api.npoint.io/76fef9a7ade87e110801', function (dataSet) {
            //Configuración general del mapa
            map
                .title()
                .enabled(true)
                .fontFamily('Roboto, sans-serif')
                .fontSize(24)
                .padding([10, 0, 10, 0])
                .text('Resume students by state.');

            // Se asignan los datos a una varaible series
            series = map.choropleth(dataSet);

            // Se asigna el identificador para configurar más el mapa
            series.geoIdField('id');

            // Color del mapa por escala
            series.colorScale(anychart.scales.linearColor('#C5FFE5', '#FFC900', '#FFA600', '#FF0000'));
            series.hovered().fill('#addd8e');

            // Se pone el geo mapa de méxico, se pueden encontrar de más países en
            // https://cdn.anychart.com/#maps-collection
            map.geoData(anychart.maps['mexico']);

            //Se asigna el identificador del div donde se alojará el mapa
            map.container('mapa');

            //Dibija el mapa
            map.draw();
        })
});