const inputs = document.querySelectorAll(".otp-input");

inputs.forEach((input, index) => {
    input.addEventListener("input", () => {
        if (input.value.length === 1 && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });

    input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && input.value === "" && index > 0) {
            inputs[index - 1].focus();
        }
    });
});

function verifyOTP() {
    let otp = "";

    inputs.forEach(input => {
        otp += input.value;
    });

    if (otp.length !== 4) {
        document.getElementById("message").innerText = "Enter complete OTP";
        document.getElementById("message").style.color = "red";
        return;
    }

    localStorage.setItem("userOTP", otp);

    window.location.href = "success.html";
}