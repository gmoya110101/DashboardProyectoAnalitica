/*

anychart.onDocumentReady(function () {
    var data = getData();

    // Creates Sunburst chart.
    var chart = anychart.sunburst(data, 'as-table');

    chart.title("Create a Sunburst chart");
    chart.container('container');
    chart.draw();

    function getData() {
        return [
            { name: 'Seasonal ', id: 'activities', parent: null, value: 1000 },
            { name: 'Winter', parent: 'activities', id: 'winter', value: 250 },
            { name: 'Spring', parent: 'activities', id: 'spring', value: 250 },
            { name: 'Summer', parent: 'activities', id: 'summer', value: 250 },
            { name: 'Autumn', parent: 'activities', id: 'autumn', value: 250 },
            { name: 'Running', parent: 'winter', id: 'run', value: 43 },
            { name: 'Snowboarding', parent: 'winter', id: 'snowboard', value: 50 },
            { name: 'Nordic Skiing', parent: 'winter', id: 'nordic', value: 50 },
            { name: 'Working Out', parent: 'winter', id: 'workout', value: 30 },
            { name: 'Ice Skating', parent: 'winter', id: 'iceskate', value: 40 },
            { name: 'Kitesurfing', parent: 'winter', id: 'kitesurf', value: 37 },
            { name: 'Riding', parent: 'spring', id: 'ride', value: 100 },
            { name: 'Crossfit', parent: 'spring', id: 'crossfit', value: 30 },
            { name: 'Hiking', parent: 'spring', id: 'hike', value: 30 },
            { name: 'Yoga', parent: 'spring', id: 'yoga', value: 40 },
            { name: 'Running', parent: 'spring', id: 'run', value: 50 },
            { name: 'Riding', parent: 'summer', id: 'ride', value: 150 },
            { name: 'Windsurfing', parent: 'summer', id: 'windsurf', value: 20 },
            { name: 'Swimming', parent: 'summer', id: 'swim', value: 30 },
            { name: 'Roller Skiing', parent: 'summer', id: 'roller', value: 10 },
            { name: 'Rowing', parent: 'summer', id: 'rowing', value: 40 },
            { name: 'Riding', parent: 'autumn', id: 'ride', value: 90 },
            { name: 'Hiking', parent: 'autumn', id: 'windsurf', value: 20 },
            { name: 'Swimming', parent: 'autumn', id: 'swim', value: 10 },
            { name: 'Nordic Skiing', parent: 'autumn', id: 'nordic', value: 40 },
            { name: 'Climbing', parent: 'autumn', id: 'climbing', value: 40 }

                    ];
    }
});
*/

/*
            [
                { "0": "ITO", "nombreEscuela": "ITO", "1": "7", "total": "7" }, 
                { "0": "UGMEX", "nombreEscuela": "UGMEX", "1": "1", "total": "1" },
                { "0": "UTCV", "nombreEscuela": "UTCV", "1": "1", "total": "1" },
                 { "0": "UV", "nombreEscuela": "UV", "1": "1", "total": "1" }
                ];

                */



/*
anychart.onDocumentReady(function () {
    
    anychart.data.loadJsonFile(
        'https://api.npoint.io/cfea05c6703201468de9',
        function (data) {

    // Creates Sunburst chart.
    var chart = anychart.sunburst(data, 'as-table');
    chart.animation(true);
    
    chart.title("Alumnos por institución educativa");
    chart.container('container');
    chart.draw();
        }
    );
}); 
*/
/*
anychart.onDocumentReady(function () {

    // create data
    anychart.data.loadJsonFile(
        'https://api.npoint.io/f98b2a41ea3eeeb7c5f0',
        function (data) {
            // create column chart
            var chart = anychart.area(data);
            chart.animation(true);

    // create a chart and set the data
    var chart = anychart.sunburst(data, "as-tree");

    // set the calculation mode
    chart.calculationMode("parent-independent");

    // format chart labels
    chart.labels().format('{%Name}');

    // format chart labels
    chart.tooltip().format('{%Name}:{%Value}');

    // set the container id
    chart.container("container");

    // initiate drawing the chart
    chart.draw();
        }
    );
});
*/



/*
anychart.onDocumentReady(function () {

    // create data
// create data
anychart.data.loadJsonFile(
    'https://api.npoint.io/cfea05c6703201468de9',
    function (data) {

    // create a chart and set the data
    var chart = anychart.sunburst(data, "as-tree");
    chart.animation(true);
    // set the calculation mode
    

    // set the chart title
    chart.title().useHtml(true);
    chart.title("Inscritos por carrera");

    // set the container id
    chart.container("container");

    // initiate drawing the chart
    chart.draw();
    }
);
});

*/

anychart.onDocumentReady(function () {

    anychart.data.loadJsonFile(
        'https://api.npoint.io/21e11d87269bde2edbe7',
        function (data) {
            // Creates Sankey chart.
            var chart = anychart.sankey(data);

            chart.title('Create a Sankey chart');
            chart.container('container');
            chart.draw();
        }
    );
});





