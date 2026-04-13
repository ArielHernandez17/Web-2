function generateQRCode() {
    let input1=document.getElementById("nombre").value.trim();
    let input2=document.getElementById("email").value.trim();
    let input3=document.getElementById("telefono").value.trim();
    let input4=document.getElementById("institucion").value.trim();
    let textoComepleto = input1 + "," + input2 + "," + input3 + "," + input4;
    console.log(textoComepleto);

    if (textoComepleto !== ",,,,") {
        alert("Porfavor llena al menos un campo para generar el código QR.");
        return;
    }

    let url = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + encodeURIComponent(textoComepleto);

    let qrImg = document.createElement("img");
    qrImg.src = url;
    qrImg.alt = "Código QR";

    document.getElementById("qr").appendChild(qrImg);
    


}

