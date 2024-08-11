const phoneForm = document.getElementById('phoneForm');
const otpForm = document.getElementById('otpForm');
const resendButton = document.getElementById('resendButton');
const countdownElement = document.getElementById('countdown');

function formSwitch (e) {
    e.preventDefault();
    phoneForm.style.display = 'none';
    otpForm.style.display = 'block';
    startCountdown();
};
function resendButtonF(e) {
    e.preventDefault()
    startCountdown();
};

function startCountdown() {
    let timeLeft = 30;
    resendButton.disabled = true;

    let countdown = setInterval(function() {
        timeLeft--;
        countdownElement.textContent = `Resend OTP in ${timeLeft} seconds`;

        if (timeLeft <= 0) {
            clearInterval(countdown);
            resendButton.disabled = false;
            countdownElement.textContent = '';
        }
    }, 1000);
}