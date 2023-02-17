anychart.onDocumentReady(function () {
    // set chart theme
    anychart.theme('pastel');

    var data = [
      {
        x: 'A',
        value: 100,
        name: '\n Can be quickly made',
        tooltipTitle: 'TIME\n Can be quickly made',
        normal: { fill: '#8ecafb 0.7' },
        hovered: { fill: '#8ecafb 1' },
        selected: { fill: '#8ecafb 1' }
      },
      {
        x: 'B',
        value: 100,
        name: 'INGREDIENTS \n Key elements available',
        tooltipTitle: 'INGREDIENTS \n Key elements available',
        normal: { fill: '#ffeaa6 0.7' },
        hovered: { fill: '#ffeaa6 1' },
        selected: { fill: '#ffeaa6 1' }
      },
      {
        x: 'C',
        value: 100,
        name: 'COMPLEXITY\n Manageable level',
        tooltipTitle: 'COMPLEXITY\n Manageable level',
        normal: { fill: '#ee957f 0.7' },
        hovered: { fill: '#ee957f 1' },
        selected: { fill: '#ee957f 1' }
      },
      {
        x: ['A', 'C'],
        value: 20,
        name: 'Add to\n wishlist',
        tooltipTitle: 'Add to wishlist',
        tooltipDesc: 'Add the ingredients in the next shopping list',
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
        value: 20,
        name: 'Possibility \nof disaster',
        tooltipTitle: 'Possibility of disaster',
        tooltipDesc: 'Keep a backup ready',
        normal: { fill: '#9fdebe 0.8' },
        hovered: { fill: '#9fdebe 1' },
        selected: { fill: '#9fdebe 1' },
        hatchFill: {
          type: 'weave',
          color: '#83c3a3'
        }
      },
      {
        x: ['B', 'C'],
        value: 20,
        name: 'Try on a\n holiday',
        tooltipTitle: 'Try on a holiday',
        tooltipDesc: 'When there is no other work pending',
        normal: { fill: '#f5b57c 0.8' },
        hovered: { fill: '#f5b57c 1' },
        selected: { fill: '#f5b57c 1' },
        hatchFill: {
          type: 'weave',
          color: '#d09259'
        }
      },
      {
        x: ['A', 'B', 'C'],
        value: 30,
        name: 'The Perfect\n Recipe',
        tooltipTitle: 'The Perfect Recipe',
        tooltipDesc:
          'Easy to follow and fast to cook with whatever is in the kitchen',
        label: { enabled: true, fontStyle: 'normal' },
        normal: { fill: '#8392ab 0.9' },
        hovered: { fill: '#8392ab 1' },
        selected: { fill: '#8392ab 1' },
        hatchFill: {
          type: 'percent40',
          color: '#5f6b7d'
        }
      }
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
      .text('The perfect recipe to try while working from home');

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