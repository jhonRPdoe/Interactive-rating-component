# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./assets/images/readme-images/Screenshot%202022-05-11%20at%2020-27-13%20Frontend%20Mentor%20Interactive%20rating%20component.png)
![](./assets/images/readme-images/Screenshot%202022-05-11%20at%2020-27-40%20Frontend%20Mentor%20Interactive%20rating%20component.png)
![](./assets/images/readme-images/Screenshot%202022-05-11%20at%2020-29-03%20Frontend%20Mentor%20Interactive%20rating%20component.png)
![](./assets/images/readme-images/Screenshot%202022-05-11%20at%2020-30-09%20Frontend%20Mentor%20Interactive%20rating%20component.png)
![](./assets/images/readme-images/Screenshot%202022-05-11%20at%2020-30-09%20Frontend%20Mentor%20Interactive%20rating%20component.png)
![](./assets/images/readme-images/Screenshot%202022-05-11%20at%2020-30-50%20Frontend%20Mentor%20Interactive%20rating%20component.png)
![](./assets/images/readme-images/Screenshot%202022-05-11%20at%2020-31-04%20Frontend%20Mentor%20Interactive%20rating%20component.png)

### Links

- Solution URL: [ Live site](https://jhonrpdoe.github.io/Interactive-rating-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript

### What I learned

I was able to put into practice several acquired knowledge, mainly in JS and CSS, especially the "addEventListener" and "try/catch" method in JavaScript, and Responsive Design in CSS.

Here are the code snippets, see below:

```css
/*DESIGN RESPONSIVO*/

@media all and (max-width: 409px) {
     .rating {
        align-items: center;
        min-width: 10px;
        background-image: linear-gradient();
        width: 80%;
    }


    .container-popup {
        min-width: none;
    }

    .btn-div {
        margin-right: 10px;
        margin-left: 15px;
        padding-top: 10px;
    }

    .button {
        margin-right: 5px;
        margin-left: 5px;
        width: 35px;
        padding: 10px ;
        font-size: small;
    }

    .container-popup {
        width: 80%;
        min-width: 10px;
    }

    .footer-div {
        padding-bottom: 10px;
    }
}

@media all and (max-width: 500px) and (min-width:410px) {
    .rating {
       align-items: center;
       min-width: 10px;
       background-image: linear-gradient();
       width: 80%;
   }


   .container-popup {
       min-width: none;
   }

   .btn-div {
       margin-right: 10px;
       margin-left: 15px;
       padding-top: 10px;
   }

   .button {
       margin-right: 10px;
       margin-left: 10px;
       width: 40px;
       padding: 10px ;
       
   }

   .container-popup {
       width: 80%;
       min-width: 10px;
   }

   .footer-div {
       padding-bottom: 10px;
   }
}
```
```js
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
```

## Author

- Linkedin - [Ruan Pereira](https://www.linkedin.com/in/ruan-pereira-651523237/)
- Frontend Mentor - [@jhonRPdoe](https://www.frontendmentor.io/profile/jhonRPdoe)

## Acknowledgments

I would like to thank my good friend Igor Tadayuki, who helped me with the event to close the popup and kept me from getting stuck on the project.

- Igor's Linkedin - [Igor Tadayuki](https://www.linkedin.com/in/igor-tadayuki-hangui-silva-3243b3186/)
