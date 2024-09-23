document.getElementById('donate-noakhali').addEventListener('click', function(){

    const donateAmount = getValueById('donate-amount');
    const donatedAmountBDT = getTextById('donated-amount');
    const accountBalance = getTextById('account-balance');

    console.log(accountBalance);

    if(!isNaN(donateAmount) && donateAmount > 0){
        const addedAmount = donatedAmountBDT + donateAmount;
        document.getElementById('donated-amount').innerText = addedAmount;

        const newBalance = accountBalance - donateAmount;
        document.getElementById('account-balance').innerText = newBalance;
        alert('Congratulation! You have donate for Flood at Noakhali.');
    }
    else{
        alert('Failed to donate.');
    }

})