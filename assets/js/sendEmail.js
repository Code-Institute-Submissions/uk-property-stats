// Javascript function 

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
    //Before this was applied the form was tempremental, with the emails being sent only some of the time. After looking at this with the tutor the error was fixed.
    return false;
}