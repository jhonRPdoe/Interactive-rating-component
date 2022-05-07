function raitingSystem() {
    const button1 = document.querySelector('.btn1');
    const button2 = document.querySelector('.btn2');
    const button3 = document.querySelector('.btn3');
    const button4 = document.querySelector('.btn4');
    const button5 = document.querySelector('.btn5');
    const formulario = document.querySelector('.formulario');

    numSelect();
    
    formulario.addEventListener('submit', e => {
        handleSubmit(e);
        popin(e);
    });

    function handleSubmit (e) {
        e.preventDefault();
    } 

    function popin (e) {
        let rate = document.querySelector('.rate');
        let containerPopup = document.querySelector('.container-popup');
        let btnnum1 = button1.innerHTML;
        let btnnum2 = button2.innerHTML;
        let btnnum3 = button3.innerHTML;
        let btnnum4 = button4.innerHTML;
        let btnnum5 = button5.innerHTML;

        if (!containerPopup.classList.contains('popin')) { 
            containerPopup.classList.add('popin');
        } else {
            document.addEventListener('click', e => containerPopup.classList.remove('popin'));
        }
    }
    
    function numSelect () {
        button1.addEventListener('click', e => {
            !button1.classList.contains('botao-clicado') ? button1.classList.add('botao-clicado') : button1.classList.remove('botao-clicado');
            button2.classList.remove('botao-clicado');
            button3.classList.remove('botao-clicado');
            button4.classList.remove('botao-clicado');
            button5.classList.remove('botao-clicado');
        });

        button2.addEventListener('click', e => {
            !button2.classList.contains('botao-clicado') ? button2.classList.add('botao-clicado') : button2.classList.remove('botao-clicado');
            button3.classList.remove('botao-clicado');
            button4.classList.remove('botao-clicado');
            button5.classList.remove('botao-clicado');
            button1.classList.remove('botao-clicado');
        });

        button3.addEventListener('click', e => {
            !button3.classList.contains('botao-clicado') ? button3.classList.add('botao-clicado') : button3.classList.remove('botao-clicado');
            button4.classList.remove('botao-clicado');
            button5.classList.remove('botao-clicado');
            button1.classList.remove('botao-clicado');
            button2.classList.remove('botao-clicado');
        });

        button4.addEventListener('click', e => {
            !button4.classList.contains('botao-clicado') ? button4.classList.add('botao-clicado') : button4.classList.remove('botao-clicado');
            button5.classList.remove('botao-clicado');
            button1.classList.remove('botao-clicado');
            button2.classList.remove('botao-clicado');
            button3.classList.remove('botao-clicado');
        });

        button5.addEventListener('click', e => {
            !button5.classList.contains('botao-clicado') ? button5.classList.add('botao-clicado') : button5.classList.remove('botao-clicado');
            button1.classList.remove('botao-clicado');
            button2.classList.remove('botao-clicado');
            button3.classList.remove('botao-clicado');
            button4.classList.remove('botao-clicado');
        });
    }
    
    console.log(button1.innerHTML);

}
raitingSystem();