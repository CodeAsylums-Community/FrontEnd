function username_check() {
    //to check username for letters
    var user = document.forms["inp1"]["username"].value;
    var letters = /^[A-Za-z]+$/;
    
    //to check for only alphabets and no special characters
    if(!user.match(letters)){
        alert("Your username must not contain special charaters or numbers. Only alphabets.");
    }
}

function number_check(){
    //to check phone number
    var phone = document.forms["inp1"]["phone"].value;
    var number = /^[6-9]\d{9}$/;

    //to check only for 10 digit phone numbers (India only)
    if(!phone.match(number)){
        alert("Enter a valid 10 digit phone number");
    }
}

function email_check(){
 //to check for valid email
    var email = document.forms["inp1"]["email"].value;
    var emailregex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    if(!email.match(emailregex)){
        alert("Enter a valid email!");
    }
}


function password_match(){
//to check for password match
var password1 = document.forms["inp1"]["pwd1"].value;
var password2 = document.forms["inp1"]["pwd2"].value;

if(password1 != password2){
    alert("Passwords don't match!");
}
}
