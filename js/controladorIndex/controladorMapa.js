anychart.onDocumentReady(function () {
    // create map
    var map = anychart.map();

    anychart.data.loadJsonFile(
        // create data set
        'https://api.npoint.io/76fef9a7ade87e110801', function (dataSet) {
            map
                .title()
                .enabled(true)
                .fontFamily('Roboto, sans-serif')
                .fontSize(24)
                .padding({ bottom: 1 })
                .text('Resumen de alumnos por estado.');

            // create choropleth series
            series = map.choropleth(dataSet);

            // set geoIdField to 'id', this field contains in geo data meta properties
            series.geoIdField('id');

            // set map color settings
            series.colorScale(anychart.scales.linearColor('#C5FFE5', '#FFC900', '#FFA600', '#FF0000'));
            series.hovered().fill('#addd8e');

            // set geo data, you can find this map in our geo maps collection
            // https://cdn.anychart.com/#maps-collection
            map.geoData(anychart.maps['mexico']);

            //set map container id (div)
            map.container('mapa');

            //initiate map drawing
            map.draw();
        })
});