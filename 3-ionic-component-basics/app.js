const inputReason = document.querySelector('#input-reason');
const inputAmount = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');
const expensesList = document.querySelector('#expenses-list');
const totalExpensesOutput = document.querySelector('#total-expenses');

let totalExpenses = 0;

const clear = () => {
    inputReason.value = '';
    inputAmount.value = '';
};

const presentAlert = async () => {
    const alert = document.createElement('ion-alert');
    alert.header = 'Invalid Input';
    alert.message = 'Please enter a valid reason and amount!';
    alert.buttons = ['Okay'];

    document.body.appendChild(alert);
    await alert.present();
}

confirmBtn.addEventListener('click', async () => {
    const enteredReason = inputReason.value;
    const enteredAmount = inputAmount.value;

    if (enteredReason.trim().length <= 0 || enteredAmount <= 0 || enteredAmount.trim().length <= 0) {
        presentAlert();
        return;
    }

    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason + ': $' + enteredAmount;
    expensesList.appendChild(newItem);

    totalExpenses += +enteredAmount;
    totalExpensesOutput.textContent = totalExpenses;

    clear();
});

cancelBtn.addEventListener('click', clear);