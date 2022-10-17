const button = document.getElementById('btn');

function interroperComportamento(event){
    event.preventDefault();
}

button.addEventListener('click', interroperComportamento)

const form = document.getElementsByTagName('form')

function clearButtom() {
    const btnClear = document.createElement('button');
    btnClear.innerText = 'Limpar informações'
    btnClear.id = 'clear';
    btnClear.type = 'reset'
    form.appendChild(btnClear)
    
}

clearButtom()
