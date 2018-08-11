const error = document.querySelector('.error');
const nameInput = document.getElementById('nameInput');
const displayCost = document.querySelector('.displayCost');
const calculate = document.getElementById('calculate');

calculate.addEventListener('click', function () {

    if (nameInput.value) {

        error.style.visibility = 'hidden';
        displayCost.style.visibility = 'visible';

        var text = nameInput.value.replace(/\s/g, '')

        displayCost.innerHTML = `$${text.length * 5}`

    } else {

        error.style.visibility = 'visible';
        displayCost.style.visibility = 'hidden';
    }
})

clear.addEventListener('click', function () {
    nameInput.value = '';
    error.style.visibility = 'hidden';
    displayCost.style.visibility = 'hidden';
})