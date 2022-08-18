"use strict";

let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));


buttonEvents()

function buttonEvents() {
    buttons.map(button => {
        button.addEventListener('click', (e) => {
            switch (e.target.innerText) {
                case("ac"):
                    display.innerText = '';
                    break;
                case("del"):
                    display.innerText = display.innerText.slice(0, -1);
                    break;
                case('='):
                    try {
                        display.innerText = eval(display.innerText)
                    } catch {
                        display.innerText = "! error !";
                    }
                    break;
                default:
                    display.innerText += e.target.innerText;
            }

        })
    })
}