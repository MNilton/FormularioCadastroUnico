
function validacao () {
    if(document.forms.cpf.value=="") {
        alert("Por favor, preencha o campo cpf.");
        document.forms.cpf.focus();
        return false;
    }
}