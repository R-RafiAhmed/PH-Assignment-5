document.getElementById('donate-noakhali').addEventListener('click', function(){

    const donateAmount = getValueById('donate-amount');
    const donatedAmountBDT = getTextById('donated-amount');
    const accountBalance = getTextById('account-balance');

    if(!isNaN(donateAmount) && donateAmount > 0){
        const addedAmount = donatedAmountBDT + donateAmount;
        document.getElementById('donated-amount').innerText = addedAmount;

        const newBalance = accountBalance - donateAmount;
        document.getElementById('account-balance').innerText = newBalance;
        alert('Congratulation! You have donated for Flood at Noakhali.');
    }
    else{
        alert('Failed to donate.');
    }

})