let current = 'red';

function changeColor(button) {    
    if (current == 'red') {
        button.style.setProperty('background-color', 'orange');
        current = 'orange'
    } else if (current == 'orange') {
        button.style.setProperty('background-color', 'yellow');
        current = 'yellow';
    } else if (current == 'yellow') {
        button.style.setProperty('background-color', 'green');
        current = 'green';
    } else if (current == 'green') {
        button.style.setProperty('background-color', 'blue');
        current = 'blue';
    } else if (current == 'blue') {
        button.style.setProperty('background-color', 'purple');
        current = 'purple';
    } else if (current == 'purple') {
        button.style.setProperty('background-color', 'red');
        current = 'red';
    } else {
        button.style.setProperty('background-color', 'red');
        current = 'red';
    }

}