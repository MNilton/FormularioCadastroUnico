// Uma variável que é vinculada ao "querySelector", que é uma captura de todos os seletores "input"
const input = document.querySelector('input')

// Ao executar o evento
input.addEventListener('input', evt => {

    // Captura o valor dos campos de entrada
    const value = input.value

    // Caso o valor seja vazio
    if (!value) {
        input.dataset.state = ''
        return
    }

    // Se estiver vazio ou não
    const trimmed = value.trim()

    if (trimmed) {
        // Validando
        input.dataset.state = 'valid'
    }

    else {
        // INvalidando
        input.dataset.state = 'invalid'
    }
})

// Uma função para a validade do CPF
function validarCPF() {
    // Pega o valor pelo identificador do campo de CPF
    const cpf = document.getElementById('cCpf').value;

    // Uma expressão regular completa de CPF/CPNJ, incluido os pontos e um hífer
    const valido = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/;

    // Checa se e válido
    if (valido.test(cpf)) 
    {
        // Avisa
        alert("CPF válido!")
    }

    // Senão avisa que um CPF inválido
    else 
    {
        alert("CPF inválido.\nO CPF deve 10 números com 2 pontos e um hífen.");
    }
}

// Uma função para alertar que foi enviado com sucesso ao clicar o botão de submissão detectado pelo evento onSubmit do <form>
function enviado() 
{
    alert("Cadastro enviado com sucesso!");
}