anychart.onDocumentReady(function () {
  anychart.data.loadJsonFile(
    // The data used in this sample can be obtained from the CDN
    //'https://cdn.anychart.com/samples-data/graph/knowledge_graph/data.json',
    //'https://api.npoint.io/18f7e87dadd9e43e099a',
    'https://api.npoint.io/104cff5847e76b938812',
    function (data) {
      // create graph chart
      var chart = anychart.graph(data);

      // set settings for each group
      for (var i = 0; i < 8; i++) {
        // get group
        var group = chart.group(i);

 
        

        group

          .labels()
          .enabled(true)//quita los nombres
          .anchor('left-center')
          .position('right-center')
          .padding(0, -5)
        
          .fontColor(anychart.palettes.defaultPalette[i]);
        //console.log(anychart.palettes.defaultPalette[i])//imprime el color


        // set group nodes stroke and fill
        group.stroke(anychart.palettes.defaultPalette[i]);
        group.fill(anychart.palettes.defaultPalette[i]);
       
      
        

      

      }
/*

      chart
      .labels()
      .useHtml(false)
      .fontColor('#212121')
      .fontSize(12)
      .format(function () {
        return this.getData('id');
      });

      

      

      chart
      .tooltip()
      .useHtml(true)
      .titleFormat(function () {
        return this.getData('id');
      })

      
      
      .format(function () {
        return (
          '<span style="color: #bfbfbf">Valor: </span>' +
          anychart.format.number(this.value, { groupsSeparator: ' ' })
          );
      });
    

*/

      // set container id for the chart
      chart.container('container');
      // initiate chart drawing
      chart.draw();
    }
  );
});