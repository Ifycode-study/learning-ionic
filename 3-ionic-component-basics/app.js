const inputReason = document.querySelector('#input-reason');
const inputAmount = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');

confirmBtn.addEventListener('click', () => {
    const enteredReason = inputReason.value;
    const enteredAmount = inputAmount.value;

    if (enteredReason.trim().length <= 0 || enteredAmount <= 0 || enteredAmount.trim().length <= 0) {
        return;
    }

    console.log(enteredReason, enteredAmount);
});