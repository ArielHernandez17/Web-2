document.getElementById("btnGenerate").addEventListener("click", generateQRCode);

function generateQRCode() {
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const institucion = document.getElementById("institucion").value.trim();
    
    const container = document.getElementById("qrContainer");

    if (!nombre && !email && !telefono && !institucion) {
        alert("Por favor, llena al menos un campo para generar el código QR.");
        return;
    }

    const textoCompleto = `Nombre: ${nombre}, Email: ${email}, Tel: ${telefono}, Inst: ${institucion}`;
    
    container.innerHTML = "";

    const url = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + encodeURIComponent(textoCompleto);

    const qrImg = document.createElement("img");
    qrImg.src = url;
    qrImg.alt = "Código QR Generado";

    container.appendChild(qrImg);
}