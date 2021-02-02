var logInButton = document.getElementById("logIn");
logInButton.addEventListener("click", function() {
    const loginForm = document.getElementById("form__section");
    loginForm.style.display = "none";
    const transactionArea = document.getElementById("transactionArea")
    transactionArea.style.display = "block";
});


document.getElementById('addDeposit').addEventListener("click", function() {
    const depositNumber = getInputNumber('depositInput');
    updateSpanTag('currentDeposit', depositNumber);
    updateSpanTag('currentBalance', depositNumber);
});

function updateSpanTag(id, Deposit) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = currentNumber + Deposit;
    document.getElementById(id).innerText = total;
}

function getInputNumber(id) {
    const input = document.getElementById(id);
    const inputNumber = parseFloat(input.value);
    input.value = '';
    return inputNumber;
}



document.getElementById('addWithdraw').addEventListener('click', function() {
    const withdrawInputNumber = getInputNumber('withdrawInput');
    updateSpanTag('currentWithdraw', withdrawInputNumber);
    updateSpanTag('currentBalance', -1 * withdrawInputNumber);
})


// ! non-optimized code
// // login Area
// document.getElementById("loginBtn").addEventListener('click', function() {
//     document.getElementById("loginArea").style.display = 'none';
//     document.getElementById("transactionArea").style.display = 'block';
// })

// // deposit button
// document.getElementById("addDeposit").addEventListener('click', function() {
//     const depositInputString = document.getElementById("depositInput");
//     const depositInputNumber = parseFloat(depositInputString.value);

//     const currentDepositString = document.getElementById("currentDeposit").innerText;
//     const currentDepositNumber = parseFloat(currentDepositString);
//     const totalDeposit = depositInputNumber + currentDepositNumber;
//     document.getElementById("currentDeposit").innerText = totalDeposit;

//     const currentBalanceString = document.getElementById("currentBalance").innerText;
//     const currentBalanceNumber = parseFloat(currentBalanceString);
//     const totalBalance = depositInputNumber + currentBalanceNumber;
//     document.getElementById("currentBalance").innerText = totalBalance;

//     depositInputString.value = "";
// })

// // withdraw button
// document.getElementById("addWithdraw").addEventListener('click', function() {
//     const withdrawInputString = document.getElementById("withdrawInput");
//     const withdrawInputNumber = parseFloat(withdrawInputString.value);

//     const currentWithdrawString = document.getElementById("currentWithdraw").innerText;
//     const currentWithdrawNumber = parseFloat(currentWithdrawString);
//     const totalWithdraw = withdrawInputNumber + currentWithdrawNumber;
//     document.getElementById("currentWithdraw").innerText = totalWithdraw;

//     const currentBalanceString = document.getElementById("currentBalance").innerText;
//     const currentBalanceNumber = parseFloat(currentBalanceString);
//     const totalBalance = currentBalanceNumber - withdrawInputNumber;
//     document.getElementById("currentBalance").innerText = totalBalance;

//     withdrawInputString.value = "";

// })