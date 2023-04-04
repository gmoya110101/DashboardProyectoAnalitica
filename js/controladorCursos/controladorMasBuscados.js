anychart.onDocumentReady(function () {
    anychart.data.loadJsonFile(
        'https://api.npoint.io/4fbc253ab206aa4e286e',
        function (data) {
            // Vincula los datos del archivo JSON al gráfico
            var dataTree = anychart.data.tree(data, 'as-table');
            var chart = anychart.treeMap(dataTree);

            // Configuración del título
            chart
                .title()
                .enabled(true)
                .useHtml(true)
                .padding([0, 0, 20, 0])
                .text(
                    'Resumen de los cursos más buscados por carrera<br/>'
                );

            // Escala 
            var scale = anychart.scales.ordinalColor([
                { less: 25000 },
                { from: 25000, to: 30000 },
                { from: 30000, to: 40000 },
                { from: 40000, to: 50000 },
                { from: 50000, to: 100000 },
                { greater: 100000 }
            ]);

            // Colores de la escala
            scale.colors([
                '#ffee58',
                '#fbc02d',
                '#f57f17',
                '#c0ca33',
                '#689f38',
                '#2e7d32'
            ]);

            // Configuración del gráfico
            chart
                .padding([10, 10, 10, 20])
                // Configuración de los nivelesS
                .maxDepth(2)
                .selectionMode('none')
                .colorScale(scale)
                .hovered({ fill: '#bdbdbd' });

            // Configuración de la leyenda
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
                    return this.getData('curso');
                });

            // Configuración del encabezado
            chart.headers().format(function () {
                return this.getData('curso');
            });

            // Configuración del tooltip
            chart
                .tooltip()
                .useHtml(true)
                .titleFormat(function () {
                    return this.getData('curso');
                })
                .format(function () {
                    return (
                        '<span style="color: #bfbfbf">Total de búsquedas: </span>' +
                        anychart.format.number(this.value, { groupsSeparator: ' ' })
                    );
                });

            // Contenedor
            chart.container('treemap');
            // Inicializar el gráfico
            chart.draw();
        }
    );
});