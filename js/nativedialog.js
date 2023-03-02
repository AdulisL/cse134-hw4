
window.addEventListener('DOMContentLoaded', init);

function init() { 
    
    //*Declarations & Definitions of variables */
    let alert = document.getElementById('alert');
    let confirm = document.getElementById('confirm');
    let prompt = document.getElementById('prompt');
    let safer = document.getElementById('safer');
    let txtfield = document.querySelector('textarea');
    let output = document.querySelector('output');

    alert.addEventListener('click', (e) => {
        output.hidden = true;

        setTimeout(() => {
            window.alert('Alert generated!');
        }, 0);
    });

    confirm.addEventListener('click', function(e) {
        output.hidden = true;

        setTimeout(() => {
            output.hidden = false;
            let result = window.confirm('Confirm please?');
            output.firstElementChild = txtfield.value;
            output.textContent = `Confirm result: ${result}`;
        }, 0);
    });

    prompt.addEventListener('click', function(e) {
        output.hidden = true;

        setTimeout(() => {
            output.hidden = false;
            let result = window.prompt('What is your name?');
            output.firstElementChild = txtfield.value;
            if (result === '' || result === null) {
                output.innerHTML = 'User didn’t enter anything';
            } else {
                output.innerHTML = `Prompt Result: ${result}`;
            }
        }, 0);
    });

    safer.addEventListener('click', function(e) {
        output.hidden = true;

        setTimeout(() => {
            output.hidden = false;
            let result = window.prompt('What is your name?');
            output.firstElementChild = txtfield.value;
            if (result === '' || result === null) {
                output.innerHTML = 'User didn’t enter anything';
            } else {
                let clean = DOMPurify.sanitize(result);
                output.innerHTML = `Prompt Result: ${clean}`;
            }
        }, 0);
    });
}