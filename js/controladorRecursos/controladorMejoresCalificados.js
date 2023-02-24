anychart.onDocumentReady(function () {
  anychart.data.loadJsonFile(
    // The data used in this sample can be obtained from the CDN
    //'https://cdn.anychart.com/samples-data/graph/knowledge_graph/data.json',
   // 'https://api.npoint.io/9e1b95ed6978aa533100',
   'https://api.npoint.io/bfc15bdcad691602855f',
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


      



      // set container id for the chart
      chart.container('container');
      // initiate chart drawing
      chart.draw();
    }
  );
});