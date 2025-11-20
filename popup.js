(function () {
    // URL de tu aplicación Fiori
    var fioriUrl = "https://serviciossap.colombina.com/sap/bc/ui5_ui5/sap/zui5_vacaciones/index.html?sap-client=300";

    // Tamaño de la ventana deseado
    var width = 1100;    // ancho px
    var height = 800;    // alto px

    // Calcular posición centrada
    var left = (window.screen.width - width) / 2;
    var top = (window.screen.height - height) / 2;

    // Abrir popup
    window.open(
        fioriUrl,
        "popupFioriVacaciones",
        "toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes" +
        ",width=" + width +
        ",height=" + height +
        ",top=" + top +
        ",left=" + left
    );
})();
