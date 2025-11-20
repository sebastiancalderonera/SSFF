(function () {
    function openPopup() {
        var fioriUrl = "https://serviciossap.colombina.com/sap/bc/ui5_ui5/sap/zui5_vacaciones/index.html?sap-client=300";

        var width = 1100;
        var height = 800;

        var left = (window.screen.width - width) / 2;
        var top = (window.screen.height - height) / 2;

        window.open(
            fioriUrl,
            "popupFioriVacaciones",
            "popup=yes,toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes" +
            ",width=" + width +
            ",height=" + height +
            ",top=" + top +
            ",left=" + left
        );
    }

    // Crear un botón dentro de la Card / página:
    var button = document.createElement("button");
    button.textContent = "Abrir Vacaciones";
    button.style.padding = "10px 20px";
    button.style.fontSize = "16px";
    button.onclick = openPopup;

    document.body.appendChild(button);
})();
