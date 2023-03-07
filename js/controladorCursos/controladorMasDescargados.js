anychart.onDocumentReady(function () {
  anychart.data.loadJsonFile(
    'https://api.npoint.io/b1800e5c0e3e89070704',
    function (data) {

      var gauge = anychart.gauges.circular();
      gauge.data(data);
      gauge
        .fill('#fff')
        .stroke(false)
        .padding(0)
        .margin(100)
        .startAngle(0)
        .sweepAngle(270);//angulo del gráfico

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
          .text(data[i].name + ', <span style="  "> ' + data[i].value + '</span> ') // color: #7c868e
          .useHtml(true);
        gauge
          .label(i)
          .hAlign('center')
          .vAlign('center')
          .anchor('right-center')  //darle especificaciones a las palabras
          .padding(0, 10)
          .height(width / 1.5 + '%')
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
          .dataIndex(i)//barra sobrante max 5
          .radius(radius)
          .width(width)
          .fill('#F5F4F4')
          .stroke(stroke)
          .zIndex(4);

        return gauge.bar(i);
      };



      var j = 0;
      for (j; j < data.length; j++) {
        makeBarWithBar(gauge, j * 20, j, 17);

        //      makeBarWithBar(gauge, 100, 1, 17);

      }

      gauge.margin(80);

      gauge.container('container');
      gauge.draw();
    })
});




