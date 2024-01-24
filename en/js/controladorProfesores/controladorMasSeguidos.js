anychart.onDocumentReady(function () {

    anychart.data.loadJsonFile(
        // anterior"https://api.npoint.io/21e11d87269bde2edbe7",
        "https://api.npoint.io/c80c17f874bd26684039",
        function (data) {
            var chart = anychart.sankey(data);

            // Función para configurar las etiquetas
            chart.node().tooltip().format(() => {
                //Varaibles propias de la biblioteca
                var incomeText = "";
                var outcomeText = "";

                for (i = 0; i < this.income.length; i++) {
                    incomeText += Math.round(this.income[i].value / 100000) / 10 +
                        "  <- " + this.income[i].name + "\n";
                }

                for (i = 0; i < this.outcome.length; i++) {
                    outcomeText += Math.round(this.outcome[i].value / 100000) / 10 +
                        "  -> " + this.outcome[i].name + "\n";
                }

                if (this.outcome.length > 0) {
                    incomeText = incomeText + "\n";
                }

                return incomeText + outcomeText;
            });

            chart.title('Professor relations at the institution');
            chart.container('container');
            chart.draw();
        }
    );

});

