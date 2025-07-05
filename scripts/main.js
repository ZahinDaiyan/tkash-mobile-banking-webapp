// Wait till the page fully loads
document.addEventListener("DOMContentLoaded", function () {
    // Select the registration form
    const form = document.getElementById("registerForm");

    // Listen for submission (note: "submit" must be lowercase)
    form.addEventListener("submit", function (e) {
        const pin = document.getElementById("pin").value;
        const confirmPin = document.getElementById("confirmPin").value;

        // Now, checking if pin matches
        if (pin !== confirmPin) {
            alert("Error: PIN does not match.");
            e.preventDefault();
            return;
        }

        // Now check if it’s 4 digits long (remove space after ^ in regex)
        const pinPattern = /^\d{4}$/;
        if (!pinPattern.test(pin)) {
            alert("Error: PIN must contain exactly 4 digits.");
            e.preventDefault();
            return;
        }

        // If all pass
        alert("Registration Successful");
    });
});
