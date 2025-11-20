/*(function () {
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
})();*/
//Lo antetior funciona pero sale al final


(function () {

    // Buscar el contenedor donde se está ejecutando la card
    // 'currentScript.parentElement' devuelve el DIV donde está cargado abrirFiori.js
    var parent = document.currentScript.parentElement;

    // Limpiar el contenido existente (opcional)
    parent.innerHTML = "";

    // Crear contenedor
    var container = document.createElement("div");
    container.style.width = "100%";
    container.style.height = "800px";   // ajusta a tu gusto
    container.style.border = "1px solid #ccc";
    container.style.borderRadius = "8px";
    container.style.overflow = "hidden";

    // Crear iframe dentro del contenedor
    var iframe = document.createElement("iframe");
    iframe.src = "https://serviciossap.colombina.com/sap/bc/ui5_ui5/sap/zui5_vacaciones/index.html?sap-client=300";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "0";

    // Inserta el iframe dentro del contenedor
    container.appendChild(iframe);

    // Inserta el contenedor dentro del MISMO sitio donde está la Card
    parent.appendChild(container);

})();
