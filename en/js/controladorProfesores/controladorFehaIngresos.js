
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
    .format('{%Value}');

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

  gauge.title("Date of admission");
 
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
    .text('Oldest')
    .fontColor('#212121')
    .fontSize(14)
    .offsetY('68%')
    .offsetX(25)
    .anchor('center');

  gauge
    .label(2)
    .text('Few years')
    .fontColor('#212121')
    .fontSize(14)
    .offsetY('68%')
    .offsetX(90)
    .anchor('center');

  gauge
    .label(3)
    .text('More recent')
    .fontColor('#212121')
    .fontSize(14)
    .offsetY('68%')
    .offsetX(155)
    .anchor('center');

    

  gauge.container('container');
  gauge.draw();
});
