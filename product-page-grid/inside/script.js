let plus = document.getElementById('plusButton');
plus.addEventListener('click', incFunction);

function incFunction() {
    document.getElementById('productQuantity').value = ++plus;
};

let minus = document.getElementById('minusButton');
minus.addEventListener('click', decFunction);

function decFunction() {
    document.getElementById('productQuantity').value = --plus;
};