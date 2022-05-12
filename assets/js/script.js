// FUNÇÃO PRINCIPAL PARA O SISTEMA
function raitingSystem() {
    // VARIAVEIS GLOBAIS
    const button1 = document.querySelector('.btn1');
    const button2 = document.querySelector('.btn2');
    const button3 = document.querySelector('.btn3');
    const button4 = document.querySelector('.btn4');
    const button5 = document.querySelector('.btn5');
    const formulario = document.querySelector('.formulario');
// CHAMADA DA FUNÇÃO DE SELEÇÃO DOS NÚMEROS
    numSelect();
//EVENTO PARA CHAMAR A FUNÇÃO DE SUBMIT, RETIRAR O EVENTO PADRÃO E ADICIONAR O POPUP
    formulario.addEventListener('submit', e => {
        handleSubmit(e);
        popin(e);
    });
//EVENTO PARA FECHAR O POPUP AO CLICAR FORA DO CONTAINER
    window.addEventListener('click', function(e){
        let containerPopup = document.querySelector('.container-popup')
        if (!document.querySelector('.container-popup').contains(e.target)){
            containerPopup.classList.remove('popin');
        }
    });
//EVENTO PARA IMPEDIR O PROCESSO PADRÃO DO FORMULÁRIO
    function handleSubmit (e) {
        e.preventDefault();
    } 
//PARA FAZER O POPUP DE AGRADECIMENTO VISÍVEL 
    function popin (e) {
        let containerPopup = document.querySelector('.container-popup');

        if (!containerPopup.classList.contains('popin')) { 
            containerPopup.classList.add('popin');
        } 
    }
// FUNÇÃO PARA SELEÇÃO DOS NÚMEROS, PARA TORNAR O BOTÃO DE SUBMIT VISÍVEL E ADICIONAR O TEXTO AO POPUP 
    function numSelect () {
        button1.addEventListener('click', e => {
            if (!button1.classList.contains('botao-clicado')) { button1.classList.add('botao-clicado') }
            button2.classList.remove('botao-clicado');
            button3.classList.remove('botao-clicado');
            button4.classList.remove('botao-clicado');
            button5.classList.remove('botao-clicado');

            let rate = document.querySelector('.rate');
            rate.innerHTML = `You selected 1 out of 5`;

            try {
                let submitDisplay = document.querySelector('.display-off');
                submitDisplay.classList.remove('display-off');
            } catch (e) {
                submitDisplay = '';
            }
        });

        button2.addEventListener('click', e => {
            if (!button2.classList.contains('botao-clicado')) { button2.classList.add('botao-clicado') }
            button3.classList.remove('botao-clicado');
            button4.classList.remove('botao-clicado');
            button5.classList.remove('botao-clicado');
            button1.classList.remove('botao-clicado');

            let rate = document.querySelector('.rate');
            rate.innerHTML = `You selected 2 out of 5`;

            try {
                let submitDisplay = document.querySelector('.display-off');
                submitDisplay.classList.remove('display-off');
            } catch (e) {
                submitDisplay = '';
            }
        });

        button3.addEventListener('click', e => {
            if (!button3.classList.contains('botao-clicado')) { button3.classList.add('botao-clicado') }
            button4.classList.remove('botao-clicado');
            button5.classList.remove('botao-clicado');
            button1.classList.remove('botao-clicado');
            button2.classList.remove('botao-clicado');

            let rate = document.querySelector('.rate');
            rate.innerHTML = `You selected 3 out of 5`;

            try {
                let submitDisplay = document.querySelector('.display-off');
                submitDisplay.classList.remove('display-off');
            } catch (e) {
                submitDisplay = '';
            }
        });

        button4.addEventListener('click', e => {
            if (!button4.classList.contains('botao-clicado')) { button4.classList.add('botao-clicado') }
            button5.classList.remove('botao-clicado');
            button1.classList.remove('botao-clicado');
            button2.classList.remove('botao-clicado');
            button3.classList.remove('botao-clicado');

            let rate = document.querySelector('.rate');
            rate.innerHTML = `You selected 4 out of 5`;

            try {
                let submitDisplay = document.querySelector('.display-off');
                submitDisplay.classList.remove('display-off');
            } catch (e) {
                submitDisplay = '';
            }
        });

        button5.addEventListener('click', e => {
            if (!button5.classList.contains('botao-clicado')) { button5.classList.add('botao-clicado') }
            button1.classList.remove('botao-clicado');
            button2.classList.remove('botao-clicado');
            button3.classList.remove('botao-clicado');
            button4.classList.remove('botao-clicado');

            let rate = document.querySelector('.rate');
            rate.innerHTML = `You selected 5 out of 5`;

            try {
                let submitDisplay = document.querySelector('.display-off');
                submitDisplay.classList.remove('display-off');
            } catch (e) {
                submitDisplay = '';
            }
        });
    }
    
}
//CHAMADA DA FUNÇÃO PRINCIPAL DO SISTEMA
raitingSystem();