anychart.onDocumentReady(function () {
    // create map
    var map = anychart.map();

    // create data set
    var dataSet = anychart.data.set(
        [{ "id": "MX.3622", "value": 0 },
        { "id": "MX.BN", "value": 100 },
        { "id": "MX.BS", "value": 2 },
        { "id": "MX.CA", "value": 3 },
        { "id": "MX.CH", "value": 4 },
        { "id": "MX.DU", "value": 5 },
        { "id": "MX.SI", "value": 6 },
        { "id": "MX.SO", "value": 7 },
        { "id": "MX.ZA", "value": 8 },
        { "id": "MX.NL", "value": 9 },
        { "id": "MX.SL", "value": 10 },
        { "id": "MX.TM", "value": 119 },
        { "id": "MX.AG", "value": 120 },
        { "id": "MX.CL", "value": 13 },
        { "id": "MX.JA", "value": 500 },
        { "id": "MX.MC", "value": 15 },
        { "id": "MX.NA", "value": 369 },
        { "id": "MX.CM", "value": 17 },
        { "id": "MX.OA", "value": 18 },
        { "id": "MX.PU", "value": 400 },
        { "id": "MX.TB", "value": 201 },
        { "id": "MX.TL", "value": 396 },
        { "id": "MX.DF", "value": 99 },
        { "id": "MX.GJ", "value": 230 },
        { "id": "MX.GR", "value": 24 },
        { "id": "MX.HI", "value": 250 },
        { "id": "MX.MX", "value": 260 },
        { "id": "MX.MR", "value": 27 },
        { "id": "MX.QE", "value": 28 },
        { "id": "MX.VE", "value": 890 },
        { "id": "MX.CP", "value": 30 },
        { "id": "MX.QR", "value": 31 },
        { "id": "MX.YU", "value": 32 }]
    );

    map
        .title()
        .enabled(true)
        .fontFamily('Roboto, sans-serif')
        .fontSize(24)
        .padding({ bottom: 25 })
        .text('Resumen de alumnos por estado.');

    // create choropleth series
    series = map.choropleth(dataSet);

    // set geoIdField to 'id', this field contains in geo data meta properties
    series.geoIdField('id');

    // set map color settings
    series.colorScale(anychart.scales.linearColor('#deebf7', '#3182bd'));
    series.hovered().fill('#addd8e');

    // set geo data, you can find this map in our geo maps collection
    // https://cdn.anychart.com/#maps-collection
    map.geoData(anychart.maps['mexico']);

    //set map container id (div)
    map.container('mapa');

    //initiate map drawing
    map.draw();
});