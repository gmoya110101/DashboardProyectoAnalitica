
anychart.onDocumentReady(function () {
  var gauge = anychart.gauges.circular();
  gauge
    .fill('#fff')
    .stroke(null)
    .padding(0)
    .margin(100)
    .startAngle(270)
    .sweepAngle(180);

  gauge
    .axis()
    .labels()
    .padding(5)
    .fontSize(14)
    .position('outside')
    .format('${%Value}k');

  gauge.data([73.2]);
  gauge
    .axis()
    .scale()
    .minimum(0)
    .maximum(100)
    .ticks({ interval: 10 })
    .minorTicks({ interval: 5 });

  gauge
    .axis()
    .fill('#545f69')
    .width(1)
    .ticks({ type: 'line', fill: 'white', length: 2 });

  gauge.title("Fecha de ingreso");
 
  gauge
    .title()
    .useHtml(true)
    .padding(0)
    .fontColor('#212121')
    .hAlign('center')
    .margin([0, 0, 10, 0]);

  gauge
    .needle()
    .stroke('2 #545f69')
    .startRadius('5%')
    .endRadius('90%')
    .startWidth('0.1%')
    .endWidth('0.1%')
    .middleWidth('0.1%');

  gauge.cap().radius('3%').enabled(true).fill('#545f69');

  gauge.range(0, {
    from: 0,
    to: 30,
    position: 'inside',
    fill: '#dd2c00 0.4',
    startSize: 50,
    endSize: 50,
    radius: 98
  });

  gauge.range(1, {
    from: 30,
    to: 70,
    position: 'inside',
    fill: '#ffa000 0.4',
    startSize: 50,
    endSize: 50,
    radius: 98
  });

  gauge.range(2, 
    
    {
    from: 70,
    to: 100,
    position: 'inside',
    fill: '#009900 0.4',
    startSize: 50,
    endSize: 50,
    radius: 98
  });

  
//etiquetados
  gauge
    .label(1)
    .text('Poor')
    .fontColor('#212121')
    .fontSize(14)
    .offsetY('68%')
    .offsetX(25)
    .anchor('center');

  gauge
    .label(2)
    .text('Average')
    .fontColor('#212121')
    .fontSize(14)
    .offsetY('68%')
    .offsetX(90)
    .anchor('center');

  gauge
    .label(3)
    .text('Good')
    .fontColor('#212121')
    .fontSize(14)
    .offsetY('68%')
    .offsetX(155)
    .anchor('center');

    

  gauge.container('container');
  gauge.draw();
});
//*/
/*
anychart.onDocumentReady(function () {
  // set the gauge type
  var data = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];
  var palette = anychart.palettes
    .distinctColors()
    .items([
      '#FD0023',
      '#FF3E0F',
      '#FF7C00',
      '#FFDC00',
      '#BAFF01',
      '#32FF02',
      '#13FF80',
      '#01F2FF',
      '#1352FF',
      '#5201FF',
      '#E001FF',
      '#FE00A3'
    ]);

  var gauge = anychart.gauges.circular(data);
  gauge.fill(null).stroke(null);

  function createMarker(i) {
    var marker = gauge.marker(i);

    marker
      .fill(palette.itemAt(i))
      .size(8)
      .position('outside')
      .type('triangle-down')
      .radius(92)
      .stroke(null);
  }

  for (var i = 0; i < data.length; i++) {
    createMarker(i);
  }

  // get range
  var range = gauge.range();
  range
    .from(0)
    .to(360)
    .startSize('17%')
    .endSize('17%')
    .radius(85)
    .zIndex(10)
    .fill([
      '#FE0024',
      '#FF6800',
      '#FFFF01',
      '#26FF02',
      '#00FFFF',
      '#1C01FF',
      '#FF00FE',
      '#FE0024'
    ]);

  // axis settings
  var axis = gauge.axis(0);
  axis.radius(77.5).width(0.1);
  axis.labels().useHtml(true).format('{%Value}°');

  // scale settings
  axis
    .scale()
    .minimum(0)
    .maximum(360)
    .ticks({ interval: 30 })
    .minorTicks({ interval: 10 });

  // ticks settings
  axis.ticks().enabled(true).length('2').position('inside');

  // minor ticks settings
  axis
    .minorTicks()
    .enabled(true)
    .length('1.5')
    .fill('#ddd')
    .position('inside');

  // set container id for the chart
  gauge.container('container');

  // initiate chart drawing
  gauge.draw();
});
*/

/*

var names = [
  'Giner',
  'Alan',
  'Gerardo',
  'Luis',
  'Ulises',
  'Bety'
];
var data = [23, 34, 67, 93, 56, 100];
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
  var gauge = anychart.gauges.circular();
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
});

*/