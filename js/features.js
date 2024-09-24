document.getElementById('show-donation-btn').addEventListener('click', function(){
    showSectionById('show-donation');
})

document.getElementById('show-history-btn').addEventListener('click', function(){
    showSectionById('show-history');
})

const historyTab = document.getElementById('show-history-btn');
historyTab.addEventListener('click', function(){
    historyTab.classList.add('bg-[#B4F461]', 'text-[#111111]');

    document.getElementById('show-donation-btn').classList.remove('bg-[#B4F461]', 'text-[#111111]');
})

const donationTab = document.getElementById('show-donation-btn');
donationTab.addEventListener('click', function(){
    donationTab.classList.add('bg-[#B4F461]', 'text-[#111111]');

    document.getElementById('show-history-btn').classList.remove('bg-[#B4F461]', 'text-[#111111]');
})