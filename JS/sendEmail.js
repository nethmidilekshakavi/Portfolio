
function sendEmail(){
    (function (){

        emailjs.init("w8fwoqZKlq0TGX-T9");
    })();

    var params = {

        sendermsg : document.getElementById("message").value
    }

    var serviceId = "service_sqabcic"
    var templteId = "template_o1p6mb1"

    emailjs.send(serviceId,templteId,params)
        .then(res => {

            alert("Email Sent Successfully!")

        })
        .catch()
}