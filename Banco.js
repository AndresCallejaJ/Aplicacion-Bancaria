let balance = 0;

function updateBalance() {
    document.getElementById('balance').innerText = `Balance: $${balance.toFixed(2)}`;
}

function deposit() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount for deposit.');
        return;
    }

    balance += amount;
    updateBalance();
}

function withdraw() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount for withdrawal.');
        return;
    }

    if (amount > balance) {
        alert('Insufficient funds.');
        return;
    }

    balance -= amount;
    updateBalance();
}
