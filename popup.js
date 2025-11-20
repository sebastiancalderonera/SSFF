(function () {
    // Crear el contenedor del iframe
    var container = document.createElement("div");
    container.style.width = "1100px";
    container.style.height = "800px";
    container.style.border = "1px solid #ccc";
    container.style.margin = "0 auto";
    container.style.borderRadius = "8px";
    container.style.overflow = "hidden";

    // Crear el iframe
    var iframe = document.createElement("iframe");
    iframe.src = "https://serviciossap.colombina.com/sap/bc/ui5_ui5/sap/zui5_vacaciones/index.html?sap-client=300";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "0";

    // Agregar iframe al contenedor
    container.appendChild(iframe);

    // Agregar contenedor al body
    document.body.appendChild(container);
})();
