// Wait till the page fully loads
document.addEventListener("DOMContentLoaded", function () {
    // === REGISTER FORM LOGIC ===
    const form = document.getElementById("registerForm");

    if (form) {
        form.addEventListener("submit", function (e) {
            const pin = document.getElementById("pin").value;
            const confirmPin = document.getElementById("confirmPin").value;

            // PIN match check
            if (pin !== confirmPin) {
                alert("Error: PIN does not match.");
                e.preventDefault();
                return;
            }

            // PIN format check: exactly 4 digits
            const pinPattern = /^\d{4}$/;
            if (!pinPattern.test(pin)) {
                alert("Error: PIN must contain exactly 4 digits.");
                e.preventDefault();
                return;
            }

            // Store registration data in localStorage
            const userData = {
                fullName: document.getElementById("fullName").value,
                email: document.getElementById("email").value,
                contactNo: document.getElementById("contactNo").value,
                operator: document.querySelector('input[name="operator"]:checked')?.value,
                accountType: document.querySelector('input[name="accountType"]:checked')?.value,
                pin: pin
            };

            localStorage.setItem(userData.email, JSON.stringify(userData));

            alert("Registration Successful!");
            e.preventDefault();
            form.reset();
        });
    }

    // === LOGIN FORM LOGIC ===
    const loginForm = document.getElementById("loginform");

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const email = document.getElementById("email").value;
            const pin = document.getElementById("pin").value;

            const storedUser = localStorage.getItem(email);

            if (!storedUser) {
                alert("This email is NOT registered.");
                return;
            }

            const userData = JSON.parse(storedUser);

            if (userData.pin !== pin) {
                alert("Incorrect PIN.");
                return;
            }

            alert(`Welcome back, ${userData.fullName}!`);
        });
    }
});
