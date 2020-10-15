function validation() {
    var name = document.getElementById('name').value;
    var college = document.getElementById('college').value;
    var reg = document.getElementById('reg').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    var linkedin = document.getElementById('linkedin').value;
    var password = document.getElementById('password').value;
    var repassword = document.getElementById('repassword').value;


    if(name == "") {
        document.getElementById('name_error').innerHTML="Please Enter Your Name";
    } else {
        var name_check = /^[a-zA-Z\s]+$/;                
        if(name_check.test(name) === false) {
            document.getElementById('name_error').innerHTML="Please Enter A Valid Name";
        } else {
            document.getElementById('name_error').innerHTML=" ";
            name_error = false;
        }
    }

    if(college == "") {
        document.getElementById('college_error').innerHTML="Please Enter Your Name";
    } else {
        var name_check = /^[a-zA-Z\s]+$/;                
        if(name_check.test(name) === false) {
            document.getElementById('college_error').innerHTML="Please Enter A Valid College Name";
        } else {
            document.getElementById('college_error').innerHTML=" ";
            name_error = false;
        }
    }

    if(reg == "") {
        document.getElementById('reg_error').innerHTML="Please Enter The Registration Number";
    } else {
        var reg_check = /^[1-9]\d{5}$/;
        if(reg_check.test(reg) === false) {
            document.getElementById('reg_error').innerHTML="Please enter a valid 6 digit registration number";
        } else{
            document.getElementById('reg_error').innerHTML="";
            reg_error = false;
        }
    }

    // Validate email address
    if(email == "") {
        document.getElementById('email_error').innerHTML="Please enter your email address";
    } else {
        var email_check = /^\S+@\S+\.\S+$/;
        if(email_check.test(email) === false) {
            document.getElementById('email_error').innerHTML="Please enter a valid email address";
        } else{
            document.getElementById('email_error').innerHTML="";
            email_error = false;
        }
    }

    // Validate mobile number
    if(mobile == "") {
        document.getElementById('number_error').innerHTML="Please enter your mobile number";
    } else {
        var num_check = /^[1-9]\d{9}$/;
        if(num_check.test(mobile) === false) {
            document.getElementById('number_error').innerHTML="Please enter a valid 10 digit mobile number";
        } else{
            document.getElementById('number_error').innerHTML="";
            number_error = false;
        }
    }


    if(linkedin== "") {
        document.getElementById('url_error').innerHTML="Please enter your linkedin url";
    } else {
        var url_check = /(https?)?:?(\/\/)?(([w]{3}||\w\w)\.)?linkedin.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        if(url_check.test(linkedin) === false) {
            document.getElementById('url_error').innerHTML="Please enter a valid linkedin url";
        } else{
            document.getElementById('url_error').innerHTML="";
            url_error = false;
        }
    }


    if(password== "") {
        document.getElementById('password_error').innerHTML="Please enter your password";
    } else {
        var pass_check = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/;
        if(pass_check.test(password) === false) {
            document.getElementById('password_error').innerHTML="Please enter 6 characters including 1 number,1 lowercase and 1 uppercase letter";
        } else{
            document.getElementById('password_error').innerHTML="";
            url_error = false;
        }
    }

    //checking if passwords match
    if (password != repassword) {
        document.getElementById('repass_error').innerHTML ="Passwords doesn't Match";
        return false;
    }
    else{
        document.getElementById('repass_error').innerHTML=" ";
    }
} 