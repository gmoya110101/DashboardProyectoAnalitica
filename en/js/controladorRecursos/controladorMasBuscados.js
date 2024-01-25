anychart.onDocumentReady(function () {
    //Función para obtener los datos desde un archivo JSON
    anychart.data.loadJsonFile(
        'https://api.npoint.io/f351e61b0e077e23f476',
        function (data) {
            // Configuración inicial del gráfico
            var dataTree = anychart.data.tree(data, 'as-table');
            var chart = anychart.treeMap(dataTree);
            
            // Configuración del título
            chart
                .title()
                .enabled(true)
                .useHtml(true)
                .padding([0, 0, 20, 0])
                .text(
                    'Summary of the most searched resources by career<br/>'
                );

            //Escala 
            var scale = anychart.scales.ordinalColor([
                { less: 25000 },
                { from: 25000, to: 30000 },
                { from: 30000, to: 40000 },
                { from: 40000, to: 50000 },
                { from: 50000, to: 100000 },
                { greater: 100000 }
            ]);

            // Colores para la escala
            scale.colors([
                '#ffee58',
                '#fbc02d',
                '#f57f17',
                '#c0ca33',
                '#689f38',
                '#2e7d32'
            ]);

            // Configuraciones extra del gráfico
            chart
                .padding([10, 10, 10, 20])
                .maxDepth(2)
                .selectionMode('none')
                .colorScale(scale)
                .hovered({ fill: '#bdbdbd' });

            // Margen de la etiqueta
            chart
                .legend()
                .enabled(true)
                .padding([0, 0, 0, 20])
                .position('right')
                .align('top')
                .itemsLayout('vertical');

            // Configuración de las etiquetas
            chart
                .labels()
                .useHtml(true)
                .fontColor('#212121')
                .fontSize(12)
                .format(function () {
                    return this.getData('recurso');
                });

            // Configuración de los encabezados
            chart.headers().format(function () {
                return this.getData('recurso');
            });

           // Configuración del tooltip
           chart
           .tooltip()
           .useHtml(true)
           .titleFormat(function () {
               return this.getData('recurso');
           })
           .format(function () {
               return (
                   '<span style="color: #bfbfbf">Total de búsquedas: </span>' +
                   anychart.format.number(this.value, { groupsSeparator: ' ' })
               );
           });

            // Obtener div contenedor
            chart.container('treemap');
            // Inicialización del dibujo del gráfico
            chart.draw();
        }
    );
});