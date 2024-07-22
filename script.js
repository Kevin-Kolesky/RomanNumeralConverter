const btnConvert = document.getElementById('convert-btn');
const elInput = document.getElementById('number');
const elOutput = document.getElementById('output');

btnConvert.addEventListener( 'click', () => {
    let number = elInput.value;

    if (number == '') {
        elInput.textContent = "Please enter a valid number";
    }else if (number == '-1') {
        elInput.textContent = "Please enter a valid number";
    } else if  (number >= 4000) {
        elInput.textContent = "Please enter a number less or equal to 3999";
    }

})
