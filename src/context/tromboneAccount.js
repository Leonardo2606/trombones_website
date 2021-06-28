import React from 'react';

const tromboneAccount = React.createContext({replaceEmailInput, focusElement});

function replaceEmailInput(executed, setExecuted) {
    if(executed==false){
    let emailInput = document.querySelector('#emailInput');
    let startButton = document.querySelector('.getStartButton');
    let submitedText = document.createElement('p');
    submitedText.setAttribute('id', 'submitedText');
    submitedText.innerHTML = 'Email submited';
    emailInput.replaceWith(submitedText);
    startButton.replaceWith();
    setExecuted(true);
    } else return;
}

function focusElement(event) {
    const element = event.target.name;
    document.querySelector(`#${element}`).scrollIntoView();
}

export default tromboneAccount;