/*
anychart.onDocumentReady(function () {
    // set chart theme
    anychart.theme('pastel');

    var data = [
      {
        x: 'A',
        value: 250,
        name: 'Sistemas \n computacionales a',
        tooltipTitle: 'Carrera\n Ingenieria en sistemas computacionales',
        normal: { fill: '#8ecafb 0.7' },
        hovered: { fill: '#8ecafb 1' },
        selected: { fill: '#8ecafb 1' }
      },
      {
        x: 'B',
        value: 350,
        name: 'Quimica b',
        tooltipTitle: 'Carrera \n Ingenieria quimica',
        normal: { fill: '#ffeaa6 0.7' },
        hovered: { fill: '#ffeaa6 1' },
        selected: { fill: '#ffeaa6 1' }
      },
      {
        x: 'C',
        value: 250,
        name: 'Industrial c',
        tooltipTitle: 'Carrera\n Ingenieria industrial',
        normal: { fill: '#ee957f 0.7' },
        hovered: { fill: '#ee957f 1' },
        selected: { fill: '#ee957f 1' }
      },
      {
        x: 'D',
        value: 350,
        name: ' Mecanica D',
        tooltipTitle: 'Carrera\n Ingenieria mecanica',
        normal: { fill: ' #f4d03f    0.7' },
        hovered: { fill: '  #f4d03f    1' },
        selected: { fill: '  #f4d03f    1' }
      },
      {
        x: 'E',
        value: 200,
        name: ' Informatica E',
        tooltipTitle: 'Carrera\n Ingenieria en informatica',
        normal: { fill: '#148f77  0.7' },
        hovered: { fill: '#148f77  1' },
        selected: { fill: '#148f77  1' }
      },
      
      {
        x: 'F',
        value: 250,
        name: ' Gestion \n empresarial f',
        tooltipTitle: 'Carrera\n Ingenieria gestion empresarial',
        normal: { fill: '#c040ec 0.7' },
        hovered: { fill: '#c040ec 1' },
        selected: { fill: '#c040ec 1' }
      },

      {
        x: ['A', 'C'],
        value: 50,
        name: 'Calculo\n diferencial',
        tooltipTitle: 'Materia',
        tooltipDesc: 'Materia que tiene relacion con las carreras',
        normal: { fill: '#a98caf 0.6' },
        hovered: { fill: '#a98caf 1' },
        selected: { fill: '#a98caf 1' },
        hatchFill: {
          type: 'weave',
          color: '#8b6b92'
        }
      },
      {
        x: ['A', 'B'],
        value: 30,
        name: 'Fisica',
        tooltipTitle: 'Materia',
        tooltipDesc: 'Materia que tiene relacion con las carreras',
        normal: { fill: '#9fdebe 0.8' },
        hovered: { fill: '#9fdebe 1' },
        selected: { fill: '#9fdebe 1' },
        hatchFill: {
          type: 'weave',
          color: '#83c3a3'
        }
      },
      {
        x: ['D', 'E'],
        value: 40,
        name: 'Calculo \n Integral',
        tooltipTitle: 'Materia',
        tooltipDesc: 'Materia que tiene relacion con las carreras',
        normal: { fill: '#4aec40 0.8' },
        hovered: { fill: '#4aec40 1' },
        selected: { fill: '#4aec40 1' },
        hatchFill: {
          type: 'weave',
          color: '#ece440'
        }
      },
      {
        x: ['B', 'C'],
        value: 50,
        name: '  Estadistica',
        tooltipTitle: 'Materia',
        tooltipDesc: 'Materia que tiene relacion con las carreras',
        normal: { fill: '#f5b57c 0.8' },
        hovered: { fill: '#f5b57c 1' },
        selected: { fill: '#f5b57c 1' },
        hatchFill: {
          type: 'weave',
          color: '#d09259'
        }
      },
      {
        x: ['B', 'E'],
        value: 40,
        name: 'Quimica',
        tooltipTitle: 'Materia',
        tooltipDesc: 'Materia que tiene relacion con las carreras',
        normal: { fill: ' #f1c40f  0.8' },
        hovered: { fill: ' #f1c40f  1' },
        selected: { fill: ' #f1c40f  1' },
        hatchFill: {
          type: 'weave',
          color: '#d09259'
        }
      },
      
      {
        x: ['D', 'F'],
        value: 40,
        name: 'Taller II',
        tooltipTitle: 'Materia',
        tooltipDesc: 'Materia que tiene relacion con las carreras',
        normal: { fill: ' #f1c40f  0.8' },
        hovered: { fill: ' #f1c40f  1' },
        selected: { fill: ' #f1c40f  1' },
        hatchFill: {
          type: 'weave',
          color: '#d09259'
        }
      },
      
      {
        x: ['F', 'B'],
        value: 50,
        name: 'Metodos\n numericos',
        tooltipTitle: 'Materia',
        tooltipDesc: 'Materia que tiene relacion con las carreras',
        normal: { fill: ' #f1c40f  0.8' },
        hovered: { fill: ' #f1c40f  1' },
        selected: { fill: ' #f1c40f  1' },
        hatchFill: {
          type: 'weave',
          color: '#d09259'
        }
      }, 


      


    ];

    // create venn diagram
    var chart = anychart.venn(data);

    // set chart title
    chart
      .title()
      .enabled(true)
      .fontFamily('Roboto, sans-serif')
      .fontSize(24)
      .padding({ bottom: 25 })
      .text('Materias');

    // set chart stroke
    chart.stroke('1 #fff');

    // set labels settings
    chart
      .labels()
      .fontSize(14)
      .fontColor('#5e6469')
      .hAlign('center')
      .vAlign('center')
      .fontFamily('Roboto, sans-serif')
      .fontWeight('500')
      .format('{%Name}');

    // set intersections labels settings
    chart
      .intersections()
      .labels()
      .fontStyle('italic')
      .fontColor('#fff')
      .format('{%Name}');

    // disable legend
    chart.legend(false);

    // set tooltip settings
    chart
      .tooltip()
      .titleFormat('{%tooltipTitle}')
      .format('{%tooltipDesc}')
      .background()
      .fill('#000 0.5');

    // set container id for the chart
    chart.container('venn');

    // initiate chart drawing
    chart.draw();
  });

  */

  anychart.onDocumentReady(function () {
    var data = getData();

    // create venn diagram
    var chart = anychart.venn(data);

    // set chart title
    chart
      .title()
      .enabled(true)
      .padding({ bottom: 35 })
      .text('Relaciones lógicas entre dos o más conjuntos de carreras. ');

    // set chart stroke
    chart.stroke('2 #fff');

    // set labels settings
    chart
      .labels()
      .fontFamily('Arial, Verdana')
      .fontColor('#5e6469')
      .format('{%Name}');

    // set intersections labels settings
    chart
      .intersections()
      .labels()
      .fontColor('#fff')
      .fontFamily('Arial')
      .fontWeight('bold')
      .format('{%Name}');

    // set font color for hover intersections labels
    chart.intersections().hovered().fill('black 0.25');

    // set legend padding
    chart.legend().padding({ top: 35 });

    // set tooltip settings
    chart.tooltip().titleFormat('{%Name}');

    // set container id for the chart
    chart.container('venn');
    // initiate chart drawing
    chart.draw();
  });

  function getData() {
    return [
      {
        x: 'A',
        value: 750,
        name: 'sistemas \n computacionales'
      },
      {
        x: 'B',
        value: 500,
        name: 'Informatica'
      },
      {
        x: 'C',
        value: 500,
        name: 'Industrial'
      },

      //abajo
      {
        x: 'D',
        value: 300,
        name: 'Gestion'
      },
      {
        x: 'E',
        value: 300,
        name: 'Mecanica'
      },
      {
        x: ['D', 'E'],
        value: 90,
        name: 'Gestión \n de \n proyecto'
      },
      {
        x: ['A', 'B'],
        value: 200,
        name: 'POO'
      },
      {
        x: ['A', 'C'],
        value: 165,
        name: 'Algebra'
      },
      {
        x: ['B', 'C'],
        value: 210,
        name: 'Estadistica'
      },
      {
        x: ['A', 'B', 'C'],
        value: 50,
        name: 'Diferencial'
      }
    ];
  }