document.getElementById('donate-feni').addEventListener('click', function(){
    
    const donateAmount = getValueById('donate-amount-feni');
    const donatedAmountBDT = getTextById('donated-amount-feni');
    const accountBalance = getTextById('account-balance');

    if(!isNaN(donateAmount) && donateAmount > 0){
        const addedAmount = donatedAmountBDT + donateAmount;
        document.getElementById('donated-amount-feni').innerText = addedAmount;

        const newBalance = accountBalance - donateAmount;
        document.getElementById('account-balance').innerText = newBalance;
        alert('Congratulation! You have donated for Flood at Noakhali.');
    }
    else{
        alert('Failed to donate.')
    }
})