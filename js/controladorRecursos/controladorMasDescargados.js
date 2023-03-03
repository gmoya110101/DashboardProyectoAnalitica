

var names = [
    'Temazepam',
    'Guaifenesin',
    'Salicylic Acid',
    'Fluoride',
    'Zinc Oxide',
    'Acetaminophen',
    'Alan'
  
    
  ];
  var data = [23, 34, 67, 93, 56, 100, 22];
  
  var dataSet = anychart.data.set(data);
  var palette = anychart.palettes
    .distinctColors()
    .items([
      '#64b5f6',
      '#1976d2',
      '#ef6c00',
      '#ffd54f',
      '#455a64',
      '#96a6a6',
      '#dd2c00',
      '#00838f',
      '#00bfa5',
      '#ffa000'
    ]);
  
  var makeBarWithBar = function (gauge, radius, i, width) {
    var stroke = null;//sin controno 
    gauge
      .label(i)
      .text(names[i] + ', <span style="">' + data[i] + '%</span>') // color: #7c868e
      .useHtml(true);
    gauge
      .label(i)
      .hAlign('center')
      .vAlign('middle')
      .anchor('right-center')  //darle especificaciones a las palabras
      .padding(0, 10)
      .height(width / 2 + '%')
      .offsetY(radius + '%')
      .offsetX(0);
  
    gauge
      .bar(i)
      .dataIndex(i)
      .radius(radius)
      .width(width)
      .fill(palette.itemAt(i))
      .stroke(null)
      .zIndex(5);
    gauge
      .bar(i + 100)
      .dataIndex(5)//barra sobrante max 5
      .radius(radius)
      .width(width)
      .fill('#F5F4F4')
      .stroke(stroke)
      .zIndex(4);
  
    return gauge.bar(i);
  };
  
  anychart.onDocumentReady(function () {
    var gauge = anychart.gauges.circular();
    gauge.data(dataSet);
    gauge
      .fill('#fff')
      .stroke(false)
      .padding(0)
      .margin(100)
      .startAngle(0)
      .sweepAngle(270);
  
    var axis = gauge.axis().radius(100).width(1).fill(null);
    axis
      .scale()
      .minimum(0)//barra de porcentaje
      .maximum(100)//barra de porcentaje
      .ticks({ interval: 2 })
      .minorTicks({ interval: 2 });
    axis.labels().enabled(false); //pone numeros en toda la barra
    axis.ticks().enabled(false);//pone guiones
    axis.minorTicks().enabled(false);
    
   // makeBarWithBar(gauge, 120, 0, 17);
   // makeBarWithBar(gauge, 100, 1, 17);
    //makeBarWithBar(gauge, 80, 2, 17);
    //makeBarWithBar(gauge, 60, 3, 17);
    //makeBarWithBar(gauge, 40, 4, 17);
    //makeBarWithBar(gauge, 20, 5, 17);
    
  
  
    var j = 0;
    for (j; j < names.length; j++) {
      makeBarWithBar(gauge, j * 20, j, 17);
  
      //      makeBarWithBar(gauge, 100, 1, 17);
  
    }
  
    console.log(data[0]);
  
    gauge.margin(50);
  
    gauge.container('container');
    gauge.draw();
  });
  
  
  
  
/*

  
  var palette = anychart.palettes
    .distinctColors()
    .items([
      '#64b5f6',
      '#1976d2',
      '#ef6c00',
      '#ffd54f',
      '#455a64',
      '#96a6a6',
      '#dd2c00',
      '#00838f',
      '#00bfa5',
      '#ffa000'
    ]);

  var makeBarWithBar = function (gauge, radius, i, width) {
    var stroke = null;
    gauge
      .label(i)
      .text(names[i] + ', <span style="">' + data[i] + '%</span>') // color: #7c868e
      .useHtml(true);
    gauge
      .label(i)
      .hAlign('center')
      .vAlign('middle')
      .anchor('right-center')
      .padding(0, 10)
      .height(width / 2 + '%')
      .offsetY(radius + '%')
      .offsetX(0);

    gauge
      .bar(i)
      .dataIndex(i)
      .radius(radius)
      .width(width)
      .fill(palette.itemAt(i))
      .stroke(null)
      .zIndex(5);
    gauge
      .bar(i + 100)
      .dataIndex(5)
      .radius(radius)
      .width(width)
      .fill('#F5F4F4')
      .stroke(stroke)
      .zIndex(4);

    return gauge.bar(i);
  };

  anychart.onDocumentReady(function () {
    anychart.data.loadJsonFile(
      // The data used in this sample can be obtained from the CDN
      //'https://cdn.anychart.com/samples-data/graph/knowledge_graph/data.json',
     // 'https://api.npoint.io/9e1b95ed6978aa533100',
     'https://api.npoint.io/4a98a74158b5ea812498',
      function (data) {

    var gauge = anychart.gauges.circular(data);
    
    gauge.data(dataSet);
    gauge
      .fill('#fff')
      .stroke(null)
      .padding(0)
      .margin(100)
      .startAngle(0)
      .sweepAngle(270);

    var axis = gauge.axis().radius(100).width(1).fill(null);
    axis
      .scale()
      .minimum(0)
      .maximum(100)
      .ticks({ interval: 1 })
      .minorTicks({ interval: 1 });
    axis.labels().enabled(false);
    axis.ticks().enabled(false);
    axis.minorTicks().enabled(false);
    makeBarWithBar(gauge, 100, 0, 17);
    makeBarWithBar(gauge, 80, 1, 17);
    makeBarWithBar(gauge, 60, 2, 17);
    makeBarWithBar(gauge, 40, 3, 17);
    makeBarWithBar(gauge, 20, 4, 17);

    gauge.margin(50);
    gauge
      .title()
      .text(
        'Medicine manufacturing progress' +
        '<br/><span style="color:#929292; font-size: 12px;">(ACME CORPORATION)</span>'
      )
      .useHtml(true);
    gauge
      .title()
      .enabled(true)
      .hAlign('center')
      .padding(0)
      .margin([0, 0, 20, 0]);

    gauge.container('container');
    gauge.draw();
      }
    );
  });

*/















  
  
  //https://api.npoint.io/ee51b87c53e9cd62d922
  
  /*
  var palette = anychart.palettes
    .distinctColors()
    .items([
      '#64b5f6',
      '#1976d2',
      '#ef6c00',
      '#ffd54f',
      '#455a64',
      '#96a6a6',
      '#dd2c00',
      '#00838f',
      '#00bfa5',
      '#ffa000'
    ]);
  
  var makeBarWithBar = function (gauge, radius, i, width) {
    var stroke = null;//sin controno 
   
    gauge
      .label(i)
      .hAlign('center')
      .vAlign('middle')
      .anchor('right-center')  //darle especificaciones a las palabras
      .padding(0, 10)
      .height(width / 2 + '%')
      .offsetY(radius + '%')
      .offsetX(0);
  
    gauge
      .bar(i)
      .dataIndex(i)
      .radius(radius)
      .width(width)
      .fill(palette.itemAt(i))
      .stroke(null)
      .zIndex(5);
    gauge
      .bar(i + 100)
      .dataIndex(5)//barra sobrante max 5
      .radius(radius)
      .width(width)
      .fill('#F5F4F4')
      .stroke(stroke)
      .zIndex(4);
  
    return gauge.bar(i);
  };
  
  anychart.onDocumentReady(function () {
    anychart.data.loadJsonFile(
      // Función para obtener los datos desde JSON
      'https://api.npoint.io/ee51b87c53e9cd62d922',
      function (data) {
    var gauge = anychart.gauges.circular(data);
  
    gauge
      .fill('#fff')
      .stroke(true)
      .padding(0)
      .margin(100)
      .startAngle(0)
      .sweepAngle(270);
  
    var axis = gauge.axis().radius(100).width(1).fill(null);
    axis
      .scale()
      .minimum(0)//barra de porcentaje
      .maximum(100)//barra de porcentaje
      .ticks({ interval: 2 })
      .minorTicks({ interval: 2 });
    axis.labels().enabled(false); //pone numeros en toda la barra
    axis.ticks().enabled(false);//pone guiones
    axis.minorTicks().enabled(false);
    
  
    var j = 0;
    for (j; j < data.length; j++) {
      makeBarWithBar(gauge, j * 20, j, 17);
  
    }
  
    console.log(data[0]);
  
    gauge.margin(50);
  
    gauge.container('container');
    gauge.draw();
  
      }
    );
  });
  */