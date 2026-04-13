function generar() {
    const num = document.querySelector("#inputNumero").value;
    const lista = document.querySelector("#lista");
    
    lista.innerHTML = "";

    for (let i = 1; i <= num; i++) {
        let li = document.createElement("li");
        li.textContent = "Elemento " + i;
        lista.appendChild(li);
    }
}