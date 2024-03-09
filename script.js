// script.js
function Sendmail() {
    var params = {
        from_name : document.getElementById("FullName").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_se3vr9m", "template_sor74df", params).then(function (res) {
        alert("Success!" + res.status);
    })
}