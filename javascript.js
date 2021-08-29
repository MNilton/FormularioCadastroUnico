function validarForm() {
    let x = document.forms["validaForm"]["cNome"].value;
    if (x == "") {
        alert("Campo NOME não preenchido!");
        return false;
    }
}