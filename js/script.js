(function trader() {
    'use strict';

    let calculate = document.body.querySelector('.calculate');
    let clear = document.body.querySelector('.clear');
    let result = document.body.querySelector('.result');
    let text = document.body.querySelector('.text');

    calculate.onclick = (e) => {

        let jewelToChaos = document.getElementById('jewelToChaos').value;
        let chaosToFusing = document.getElementById('chaosToFusing').value;
        let jewelToFusing = document.getElementById('jewelToFusing').value;
        e.preventDefault();
        result.textContent = jewelToChaos * chaosToFusing;

        let message = "Buy chaos orbs first";
        if (jewelToChaos * chaosToFusing < jewelToFusing) {
            message = "Buy fusing orbs";
        }
        text.textContent = message;
    };
    clear.onclick = (e) => {
        result.textContent = "";
        text.textContent = "";
    };
}());
