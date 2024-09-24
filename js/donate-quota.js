document.getElementById('donate-quota').addEventListener('click', function(){
    
    const donateAmount = getValueById('donate-amount-quota');
    const donatedAmountBDT = getTextById('donated-amount-quota');
    const accountBalance = getTextById('account-balance');

    if(accountBalance < 0){
        alert('Failed to donate.');
        return;
    }

    if(!isNaN(donateAmount) && donateAmount > 0){
        if(accountBalance < donateAmount){
            alert('Failed to donate.');
            return;
        }
        const addedAmount = donatedAmountBDT + donateAmount;
        document.getElementById('donated-amount-quota').innerText = addedAmount;

        const newBalance = accountBalance - donateAmount;
        document.getElementById('account-balance').innerText = newBalance;
        alert('Congratulation! You have donated for Aid for Injured in the Quota Movement.');

        // donation history
        const historyCard = document.createElement('div');
        historyCard.className = 'p-8 border-2 rounded-2xl mb-6';
        historyCard.innerHTML = `
            <h3 class="text-xl font-bold leading-8 mb-2">${donateAmount} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh.</h3>
            <p>Date : ${new Date()}</p>
        `;
        document.getElementById('historys').appendChild(historyCard);
    }
    else{
        alert('Failed to donate.');
    }

    console.log(donateAmount, donatedAmountBDT, accountBalance);
})