function toggleTheme() {
    var page = document.body;
    var btn = document.getElementById("themeBtn");
    
    if (page.className === "dark-mode") {
        page.className = "";
        btn.innerText = "Dark Mode";
    } else {
        page.className = "dark-mode";
        btn.innerText = "Light Mode";
    }
}

function validateForm(event) {
    event.preventDefault();
    
    var n = document.getElementById("name").value;
    var e = document.getElementById("email").value;
    var m = document.getElementById("message").value;
    
    var errBox = document.getElementById("formError");
    var succBox = document.getElementById("formSuccess");
    
    errBox.innerText = "";
    succBox.innerText = "";
    
    if (n === "" || e === "" || m === "") {
        errBox.innerText = "Please fill out all fields.";
    } else if (e.indexOf("@") === -1) {
        errBox.innerText = "Please enter a valid email address.";
    } else {
        succBox.innerText = "Message sent successfully!";
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    }
}

function showResume() {
    document.getElementById("resumeModal").style.display = "block";
}

function hideResume() {
    document.getElementById("resumeModal").style.display = "none";
}