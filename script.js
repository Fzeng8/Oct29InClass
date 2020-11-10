const app = {

    //this doesnt work lol
    firstNameContent: document.getElementById("firstName"),
    lastNameContent: document.getElementById("lastName"),
    emailContent: document.getElementById("emailAdd"),

    initialize: function () {
        document.getElementById('submitForm').addEventListener('click', () => {
            console.log("yes", app.firstNameContent.value, app.lastNameContent.value, app.emailContent.value);
            app.firstNameEmpty();
            app.lastNameEmpty();
            app.emailEmpty();
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
            console.log("yes @")
        } else {
            app.emailContent.classList.add('redBorder');
        }
  },


}
