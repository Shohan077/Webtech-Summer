  document.getElementById("donationForm").addEventListener("submit", function(e) {
        e.preventDefault();

        var firstName = document.getElementById("firstName").value.trim();

        var lastName = document.getElementById("lastName").value.trim();
    
        var phone = document.getElementById("phone").value.trim();
        var email = document.getElementById("email").value.trim();
        var password = document.getElementById("password").value;
        var confirmPassword = document.getElementById("confirmPassword").value;
        var amount = document.querySelector('input[name="amount"]:checked');
        var otherAmount = document.getElementById("otherAmount").value.trim();

        if (!firstName || !lastName || !phone || !email || !password || !confirmPassword || !amount) {
            alert("Please fill out all required fields.");
            return;
        }

        else if (!/^[a-zA-Z\s]+$/.test(firstName) || !/^[a-zA-Z\s]+$/.test(lastName)) {
            alert("Name must contain only alphabets(A-Z, a-z)");
            return;
        }

        else if (!/^\d{11}$/.test(phone)) {
            alert("Phone number must be exactly 11 digits.");
            return;
        }

       else if (!/^\S+@\S+\.\S+$/.test(email)) {
            alert("Invalid email format.");
            return;
        }

        else if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])/.test(password)) {
            alert("Password must include uppercase, lowercase, number, and special character.");
            return;
        }

        else if (amount.value === "other") {
            if (!/^\d+(\.\d{1,2})?$/.test(otherAmount) || Number(otherAmount) <= 0) {
                alert("Please enter a valid other amount.");
                return;
            }
        }

        alert("Form submitted successfully!");
    });