const validpin = 1234;

document.getElementById('add-money-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const bank = document.getElementById('bank').value

    const bankaccountnumber = document.getElementById('account-number').value

    const amount = parseInt(document.getElementById('add-amount').value);

    const pinnumber = parseInt(document.getElementById('add-pin').value);
    // console.log(bank, bankaccountnumber, amount, pinnumber);
    if (bankaccountnumber.length < 11) {
        alert('please provide valid account number');
        return;
    }
    if (pinnumber !== validpin) {
        alert('please provide valid pin number');
        return;
    }

    const availableBalance = parseInt(document.getElementById('Available-Balance').innerText)
    console.log(availableBalance);

    const totalAvailableBalance = amount + availableBalance
    document.getElementById('Available-Balance').innerText = totalAvailableBalance;

})

// toggling feature

document.getElementById('add-button').addEventListener('click', function () {
  document.getElementById('cashout-parent').style.display ='none';
  document.getElementById('add-money-parent').style.display ='block'
})


document.getElementById('cashout-button').addEventListener('click', function () {
  document.getElementById('add-money-parent').style.display ='none';
  document.getElementById('cashout-parent').style.display ='block'
})