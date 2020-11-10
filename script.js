const app = {


    firstNameContent: document.getElementById("firstName"),
    lastNameContent: document.getElementById("lastName"),
    emailContent: document.getElementById("emailAdd"),
    robotCheck: document.getElementById("notRobot"),
    submitButton: document.getElementById("submitForm"),

    firstNameBool: false,
    lastNameBool: false,
    emailBool: false,
    checkBool: false,


    initialize: function () {
        document.getElementById('submitForm').addEventListener('click', () => {
            // console.log("yes", app.firstNameContent.value, app.lastNameContent.value, app.emailContent.value);
            app.firstNameEmpty();
            app.lastNameEmpty();
            app.emailEmpty();
            app.robotEmpty();

            if (app.firstNameBool === true && app.lastNameBool === true && app.emailBool === true && app.checkBool === true) {
                app.firstNameContent.classList.add('hideItem');
                app.lastNameContent.classList.add('hideItem');
                app.emailContent.classList.add('hideItem');
                app.robotCheck.classList.add('hideItem');
                app.submitButton.classList.add('hideItem');
                document.getElementById("robotLabel").classList.add('hideItem');
                
                document.getElementById("loadCircle").classList.add('showItem');

            };
        });
    },


    firstNameEmpty: function () {
        if (app.firstNameContent.value === '') {
            app.firstNameContent.classList.add('redBorder');
            app.firstNameBool = false;
            //console.log("nothing");
        } else {
            app.firstNameContent.classList.remove('redBorder');
            app.firstNameBool = true;
        }
    },

    lastNameEmpty: function () {
        if (app.lastNameContent.value === '') {
            app.lastNameContent.classList.add('redBorder');
            app.lastNameBool = false;
            // console.log("nothing");
        } else {
            app.lastNameContent.classList.remove('redBorder');
            app.lastNameBool = true;
        }
    },

    emailEmpty: function () {
        if (app.emailContent.value.includes("@")) {
            app.emailContent.classList.remove('redBorder');
            app.emailBool = true;
            //console.log("yes @")
        } else {
            app.emailContent.classList.add('redBorder');
            app.emailBool = false;
        }
    },

    robotEmpty: function () {
        if (app.robotCheck.checked === false) {
            //console.log("no check")
            document.getElementById("robotLabel").classList.add('redText');
            app.checkBool = false;
        } else {
            document.getElementById("robotLabel").classList.remove('redText');
            app.checkBool = true;
        }
    },


}
