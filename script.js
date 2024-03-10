function SendMail(event) {
    event.preventDefault();
    
    var params = {
        from_name: document.getElementById("FullName").value,
        email_id: document.getElementById("email_id").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_se3vr9m", "template_sor74df", params)
        .then(function (res) {
            alert("Success!" + res.status);
        })
        .catch(function (error) {
            console.error("Error sending email:", error);
            alert("An error occurred while sending the email. Please try again later.");
        });
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").addEventListener("submit", SendMail);
});