document.addEventListener('DOMContentLoaded', function() {
    let screen = document.getElementById('screen');
    let buttons = document.querySelectorAll('button');
    let screenValue = "";
    
    for (let item of buttons) {
        item.addEventListener('click', (e) => {
            let buttonText = e.target.innerText;
            if (buttonText === "=") {
                screenValue = eval(screenValue);
            } else if (buttonText === "AC") {
                screenValue = "";
            } else {
                screenValue += buttonText;
            }
            screen.value = screenValue;
        });
    }
});