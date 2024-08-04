function openAddFundsPopup() {
    document.getElementById('addFundsPopup').style.display = 'block';
}

function closeAddFundsPopup() {
    document.getElementById('addFundsPopup').style.display = 'none';
    document.getElementById('amount').value = '';
    document.getElementById('qrCodeContainer').style.display = 'none';
    document.getElementById('qrCode').src = '';
    document.getElementById('confirmation').style.display = 'none';
}

function generateQRCode() {
    const amount = document.getElementById('amount').value;
    if (amount > 0) {
        const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Payment for ${amount}`;
        document.getElementById('qrCode').src = qrCodeUrl;
        document.getElementById('qrCodeContainer').style.display = 'block';
    } else {
        alert('Please enter a valid amount');
    }
}

function simulatePayment() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (amount > 0) {
        let currentBalance = parseFloat(document.getElementById('tradingBalance').textContent.replace('$', ''));
        currentBalance += amount;
        document.getElementById('tradingBalance').innerHTML = `$${currentBalance.toFixed(2)}`;
        document.getElementById('confirmation').style.display = 'block';
        document.getElementById('qrCodeContainer').style.display = 'none';

        // Show confirmation and redirect after 2 seconds
        setTimeout(() => {
            closeAddFundsPopup();
            showConfirmationMessage("Funds added successfully!");
        }, 2000);
    }
}

function openWithdrawPopup() {
    document.getElementById('withdrawPopup').style.display = 'block';
}

function closeWithdrawPopup() {
    document.getElementById('withdrawPopup').style.display = 'none';
    document.getElementById('withdrawAmount').value = '';
    document.getElementById('withdrawForm').style.display = 'none';
    document.getElementById('accountNumber').value = '';
    document.getElementById('ifscCode').value = '';
    document.getElementById('bankBranch').value = '';
    document.getElementById('withdrawConfirmation').style.display = 'none';
}

function checkBalance() {
    const withdrawAmount = parseFloat(document.getElementById('withdrawAmount').value);
    const currentBalance = parseFloat(document.getElementById('tradingBalance').textContent.replace('$', ''));
    if (withdrawAmount > 0) {
        if (withdrawAmount <= currentBalance) {
            document.getElementById('withdrawForm').style.display = 'block';
        } else {
            alert('Insufficient balance');
        }
    } else {
        alert('Please enter a valid amount');
    }
}

function processWithdrawal() {
    const withdrawAmount = parseFloat(document.getElementById('withdrawAmount').value);
    const accountNumber = document.getElementById('accountNumber').value;
    const ifscCode = document.getElementById('ifscCode').value;
    const bankBranch = document.getElementById('bankBranch').value;
    if (accountNumber && ifscCode && bankBranch) {
        let currentBalance = parseFloat(document.getElementById('tradingBalance').textContent.replace('$', ''));
        currentBalance -= withdrawAmount;
        document.getElementById('tradingBalance').innerHTML = `$${currentBalance.toFixed(2)}`;
        document.getElementById('withdrawConfirmation').style.display = 'block';
        document.getElementById('withdrawForm').style.display = 'none';

        // Show confirmation and redirect after 2 seconds
        setTimeout(() => {
            closeWithdrawPopup();
            showConfirmationMessage("Withdrawal successful!");
        }, 2000);
    } else {
        alert('Please fill in all the details');
    }
}

function showConfirmationMessage(message) {
    const confirmationMessage = document.createElement('div');
    confirmationMessage.className = 'confirmation-message';
    confirmationMessage.innerHTML = `<h3>${message}</h3>`;
    document.body.appendChild(confirmationMessage);
    confirmationMessage.style.display = 'block';

    setTimeout(() => {
        confirmationMessage.style.display = 'none';
        document.body.removeChild(confirmationMessage);
    }, 2000);
}
document.addEventListener('DOMContentLoaded', () => {
    const logoutBtn = document.getElementById('logoutBtn');
    const modal = document.getElementById('logoutModal');
    const confirmLogoutBtn = document.getElementById('confirmLogout');
    const closeModalBtn = document.querySelector('.close');

    logoutBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    confirmLogoutBtn.addEventListener('click', () => {
        // Here, you can redirect to the signup/sign-in page
        // For demonstration, let's just show a message
        alert('Logout successful! Redirecting to signup/sign-in page.');
        // Redirect to signup page
        window.location.href = 'http://127.0.0.1:5500/landingpage/sinup/sign/login-form-07/index.html'; // Replace 'signup.html' with your actual signup page URL
    });
});
