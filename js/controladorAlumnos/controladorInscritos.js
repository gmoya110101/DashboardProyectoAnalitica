anychart.onDocumentReady(function () {
  // To work with the data adapter you need to reference the data adapter script file from AnyChart CDN
  // https://cdn.anychart.com/releases/v8/js/anychart-data-adapter.min.js

  // Load JSON data and create a chart by JSON data
  // The data used in this sample can be obtained from the CDN
  // https://cdn.anychart.com/samples/general-features/load-json-data/data.json
  anychart.data.loadJsonFile(
    'https://api.npoint.io/4e376ac5ea8bfdcef4f2',
    function (data) {
      var chart = anychart.pie3d(data);
      chart
        .title('Alumnos inscritos por carrera.')
        // set chart radius
        .radius('43%');

      // set container id for the chart
      chart.container('pastel3d');
      // initiate chart drawing
      chart.draw();
    }
  );
});

/*anychart.onDocumentReady(function () {
  // To work with the data adapter you need to reference the data adapter script file from AnyChart CDN
  // (https://cdn.anychart.com/releases/v8/js/anychart-data-adapter.min.js for latest or https://cdn.anychart.com/releases/v8/js/anychart-data-adapter.min.js for the versioned file)

  // Create a chart by JSON config.
  anychart.fromJsonFile('https://cdn.anychart.com/config-samples/line-chart.json', function (chart) {
      chart.title('Create a chart by JSON config');
      chart.container('pastel3d');
      chart.draw();
  });
});*/


/*anychart.onDocumentReady(function () {
  // create pie chart with passed data
  var datos = [[]];
  console.log(cargarDatos(datos));
  var chart = anychart.pie3d([
    {
        "0": "Sistemas",
        "carrera": "Sistemas",
        "1": "3",
        "total": "3"
    },
    {
        "0": "Gestion",
        "carrera": "Gestion",
        "1": "1",
        "total": "1"
    },
    {
        "0": "Quimica",
        "carrera": "Quimica",
        "1": "1",
        "total": "1"
    },
    {
        "0": "Mecanica",
        "carrera": "Mecanica",
        "1": "1",
        "total": "1"
    },
    {
        "0": "Industrial",
        "carrera": "Industrial",
        "1": "1",
        "total": "1"
    },
    {
        "0": "Electronica",
        "carrera": "Electronica",
        "1": "1",
        "total": "1"
    }
]);

  // set chart title text settings
  chart
    .title('Alumnos inscritos por carrera.')
    // set chart radius
    .radius('43%');

  // set container id for the chart
  chart.container('pastel3d');
  // initiate chart drawing
  chart.draw();
});

function cargarDatos(datos) {
  $.ajax({
    url: 'archivosJson/alumnos/alumnosPorCarrera.json',
    type: 'POST'

  }).done((resp) => {
    
    var aux = JSON.parse(resp);
    for (var i = 0; i < aux.length; i++) {
      datos.push([aux[i][1], aux[i][2]]);
    }
  })

  return datos;
}*/