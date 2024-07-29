const btnConvert = document.getElementById('convert-btn');
const elInput = document.getElementById('number');
const elOutput = document.getElementById('output');

const numerals = [
    ["M",1000],
    ["CM",900],
    ["D",500],
    ["CD",400],
    ["C",100],
    ["XC",90],
    ["L",50],
    ["XL",40],
    ["X",10],
    ["IX",9],
    ["V",5],
    ["IV",4],
    ["I",1],
]

btnConvert.addEventListener( 'keydown', e => {
    if (e.key = "Enter"){
        btnConvert.click()
    }
})

btnConvert.addEventListener('click', () => {
    let value = elInput.value;

    if (!value) {
        elOutput.textContent = "Please enter a valid number";
    }else if (value < 0) {
        elOutput.textContent = "Please enter a number greater than or equal to 1";
    } else if  (value >= 4000) {
        elOutput.textContent = "Please enter a number less than or equal to 3999";
    }
    else {
        let result = '';
        for (const [roman, number] of numerals){
            while (number <= value) {
                result += roman;
                value -= number;
            }
        }
        elOutput.innerText = result;
    }
})
