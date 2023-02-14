/*anychart.onDocumentReady(function () {
    var data = getData();

    // Creates Sunburst chart.
    var chart = anychart.sunburst(data, 'as-table');

    chart.title("Create a Sunburst chart");
    chart.container('container');
    chart.draw();

    function getData() {
        return [
            {name: 'Seasonal activities', id: 'activities', parent: null, value: 1000},
            {name: 'Winter', parent: 'activities', id: 'winter', value: 250},
            {name: 'Spring', parent: 'activities', id: 'spring', value: 250},
            {name: 'Summer', parent: 'activities', id: 'summer', value: 250},
            {name: 'Autumn', parent: 'activities', id: 'autumn', value: 250},
            {name: 'Running', parent: 'winter', id: 'run', value: 43},
            {name: 'Snowboarding', parent: 'winter', id: 'snowboard', value: 50},
            {name: 'Nordic Skiing', parent: 'winter', id: 'nordic', value: 50},
            {name: 'Working Out', parent: 'winter', id: 'workout', value: 30},
            {name: 'Ice Skating', parent: 'winter', id: 'iceskate', value: 40},
            {name: 'Kitesurfing', parent: 'winter', id: 'kitesurf', value: 37},
            {name: 'Riding', parent: 'spring', id: 'ride', value: 100},
            {name: 'Crossfit', parent: 'spring', id: 'crossfit', value: 30},
            {name: 'Hiking', parent: 'spring', id: 'hike', value: 30},
            {name: 'Yoga', parent: 'spring', id: 'yoga', value: 40},
            {name: 'Running', parent: 'spring', id: 'run', value: 50},
            {name: 'Riding', parent: 'summer', id: 'ride', value: 150},
            {name: 'Windsurfing', parent: 'summer', id: 'windsurf', value: 20},
            {name: 'Swimming', parent: 'summer', id: 'swim', value: 30},
            {name: 'Roller Skiing', parent: 'summer', id: 'roller', value: 10},
            {name: 'Rowing', parent: 'summer', id: 'rowing', value: 40},
            {name: 'Riding', parent: 'autumn', id: 'ride', value: 90},
            {name: 'Hiking', parent: 'autumn', id: 'windsurf', value: 20},
            {name: 'Swimming', parent: 'autumn', id: 'swim', value: 10},
            {name: 'Nordic Skiing', parent: 'autumn', id: 'nordic', value: 40},
            {name: 'Climbing', parent: 'autumn', id: 'climbing', value: 40}
        ];
    }
}); */

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