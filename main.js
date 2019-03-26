'use strict'

window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
    const button = document.querySelector('input');
    button.addEventListener('click', (event) => {
        console.log ('button has been cicked');
    });
});

