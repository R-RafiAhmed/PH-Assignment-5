function getValueById(id){
    const inputValue = document.getElementById(id).value;
    return inputValue;

}

function getTextById(id){
    const innerText = document.getElementById(id).innerText;
    const innerTextNumber = parseFloat(innerText);
    return innerTextNumber;
}

function showSectionById(id){

    document.getElementById('show-donation').classList.add('hidden');
    document.getElementById('show-history').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}