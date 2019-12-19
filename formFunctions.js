$(document).ready(function () {
    let fname = $('#firstName');
    let lname = $('#lastName');
    let suff = $('#suffix');
    let phoneNum = $('#phone');
    let email = $('#email');
    let gradYr = $('#gradYear');
    let degreeConc = $('#degreeConcentration');
    let jobT = $('#jobTitle');
    let emp = $('#employer');
    let pic = $('#photo');
    let jobDesc = $('#jobDescription');
    let fromMGA = $('#whatFromMGA');
    let bio = $('#biography');
    let agree = $('#agreement');

    let collection = {
        firstName: fname,
        lastName: lname,
        suffix: suff,
        numPhone: phoneNum,
        Email: email,
        gradYear: gradYr,
        degreeConcentration: degreeConc,
        jobTitle: jobT,
        employer: emp,
        photo: pic,
        jobDescription: jobDesc,
        receivedFromMGA: fromMGA,
        biography: bio,
        agreement: agree
    };
    let allForm = $(":input");
    let delimitor = $("#agreement");
    let subB = $('#submit');

    function formCheck() {
        for (let i = 0; i < allForm.val.length; i++) {
            if (allForm.val() == "") {
                alert("Please check your form data");
                delimitor.prop('checked', false);
            } else {
                changer();
            };
        }
    };

    function changer() {
        if (delimitor.prop('checked') == true) {
            subB.prop('disabled', false);
        } else if (delimitor.prop('checked') == false) {
            subB.prop('disabled', true)
        }
    };

    function validateF() {
        let entry = fname.val()
        const check = new RegExp('^[A-Za-z]{2,15}')
        if (check.test(entry)) {
            console.log("it works")
            fname.css("background-color", "white")
            subB.show()
        }
        else {
            fname.css("background-color", "red")
            console.log('nope')
            subB.hide()
        };
    };
    function validateL() {
        let entry = lname.val()
        const check = new RegExp('^[A-Za-z]{2,15}')
        if (check.test(entry)) {
            console.log("it works")
            lname.css("background-color", "white")
            subB.show()
        }
        else {
            lname.css("background-color", "red")
            subB.hide()
        };
    };
    function validateE() {
        let entry = email.val();
        const check = new RegExp("^[A-Za-z0-9.]*@[A-Za-z0-9]*.[a-z]{2,4}");

        if (check.test(entry)) {
            email.css("background-color", "white")
            subB.show()
        }
        else {
            email.css("background-color", "red")
            subB.hide()
        };
    };
    function validateP() {
        let entry = phoneNum.val();
        const check = new RegExp("^[0-9-()+]{3,20}");

        if (check.test(entry)) {
            phoneNum.css("background-color", "white")
            subB.show()
        }
        else {
            phoneNum.css("background-color", "red")
            subB.hide()
        };
    };
    function validateGY() {
        let entry = gradYr.val();
        const check = new RegExp("^[0-9]{1,4}");

        if (check.test(entry)) {
            gradYr.css("background-color", "white")
            subB.show()
        }
        else {
            gradYr.css("background-color", "red")
            subB.hide()
        };
    };
    function validateDeg() {
        let entry = degreeConc.val();
        const check = new RegExp("^[A-Za-z -&]{1,30}");
        if (check.test(entry)) {
            degreeConc.css("background-color", "white")
            subB.show()
            console.log("I\'m working")
        }
        else {
            degreeConc.css("background-color", "red")
            subB.hide()
        };
    };
    function validateJT() {
        let entry = jobT.val();
        const check = new RegExp("^[A-Za-z0-9-() ]{1,40}");

        if (check.test(entry)) {
            jobT.css("background-color", "white")
            subB.show()
        }
        else {
            jobT.css("background-color", "red")
            subB.hide()
        };
    };
    function validateEmp() {
        let entry = emp.val();
        const check = new RegExp("^[A-Za-z ]{1,30}");

        if (check.test(entry)) {
            emp.css("background-color", "white")
            subB.show()
        }
        else {
            emp.css("background-color", "red")
            subB.hide()
        };
    };
    function validateJobDesc() {
        let entry = jobDesc.val();
        if (entry == "") {
            jobDesc.css("background-color", "red")

        }
        else {
            jobDesc.css("background-color", "white")
        };
    };
    function validateFromMGA() {
        let entry = fromMGA.val();
        if (entry == "") {
            fromMGA.css("background-color", "red")
        }
        else {
            fromMGA.css("background-color", "white")
        };
    };
    function validateBio() {
        let entry = bio.val();
        if (entry == "") {
            bio.css("background-color", "red")

        }
        else {
            bio.css("background-color", "white")
        };
    };


    let collectSend = JSON.stringify(collection)
    function sendStuff(event) {
        event.preventDefault();
        $.ajax({
            url:'mail.php',
            type: "POST",
            data: collectSend,
            dataType: 'JSON'
        }).done(function (data) {
            console.log(data);
            alert("It's OK!");
        }).fail(function (data) {
            console.log(data);
        });
    }

    $('#firstName').on('keydown', validateF);
    $('#lastName').on('keydown', validateL);
    $('#email').on('keydown', validateE);
    $('#phone').on('keydown', validateP);
    $('#gradYear').on('keydown', validateGY);
    $('#degreeConcentration').on('keydown', validateDeg);
    $('#jobTitle').on('keydown', validateJT);
    $('#employer').on('keydown', validateEmp);
    $('#jobDescription').on('keydown', validateJobDesc);
    $('#whatFromMGA').on('keydown', validateFromMGA);
    $('#biography').on('keydown', validateBio);
    $('#agreement').on('click', formCheck);
    $('#submit').on('click', sendStuff);

});
