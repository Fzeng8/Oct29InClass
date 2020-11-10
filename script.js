const app = {

    //this doesnt work lol
    firstNameContent: document.getElementById("firstName"),
    lastNameContent: document.getElementById("lastName"),
    emailContent: document.getElementById("emailAdd"),
    robotCheck: document.getElementById("notRobot"),

    initialize: function () {
        document.getElementById('submitForm').addEventListener('click', () => {
            console.log("yes", app.firstNameContent.value, app.lastNameContent.value, app.emailContent.value);
            app.firstNameEmpty();
            app.lastNameEmpty();
            app.emailEmpty();
            app.robotEmpty();
        });
    },


    firstNameEmpty: function () {
        if (app.firstNameContent.value === '') {
            app.firstNameContent.classList.add('redBorder');
            //console.log("nothing");
        } else {
            app.firstNameContent.classList.remove('redBorder');
        }
    },

    lastNameEmpty: function () {
        if (app.lastNameContent.value === '') {
            app.lastNameContent.classList.add('redBorder');
           // console.log("nothing");
        } else {
            app.lastNameContent.classList.remove('redBorder');
        }
    },
    
    emailEmpty: function () {
        if (app.emailContent.value.includes("@")) {
            app.emailContent.classList.remove('redBorder');
            //console.log("yes @")
        } else {
            app.emailContent.classList.add('redBorder');
        }
  },
    
    robotEmpty: function () {
        if (app.robotCheck.checked === false) {
            console.log("no check")
            document.getElementById("robotLabel").classList.add('redText');
        } else {
            document.getElementById("robotLabel").classList.remove('redText');
        }
    },


}
