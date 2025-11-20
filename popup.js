(function () {
    // URL de tu aplicación Fiori
    var fioriUrl = "https://serviciossap.colombina.com/sap/bc/ui5_ui5/sap/zui5_vacaciones/index.html?sap-client=300";

    // Tamaño deseado del popup
    var width = 1100;
    var height = 800;

    // Posición centrada en la pantalla
    var left = (window.screen.width - width) / 2;
    var top = (window.screen.height - height) / 2;

    // Abrir popup con propiedades controladas
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
