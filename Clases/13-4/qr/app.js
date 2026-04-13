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

    //let url


}

