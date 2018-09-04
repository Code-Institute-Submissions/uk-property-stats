function sendMail(contactForm) {
    emailjs.send("gmail", "interactive_front_end", {
        "firstname": contactForm.firstname.value,
        "lastname": contactForm.lastname.value,
        "emailaddress": contactForm.emailaddress.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        });
}