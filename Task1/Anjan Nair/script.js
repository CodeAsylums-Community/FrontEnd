function username() {
    //to check username for letters
    var user = document.forms["inputer"]["username"].value;
    var letters = /^[A-Za-z]+$/;
    
    //to check for only alphabets and no special characters
    if(!user.match(letters)){
        alert("Your username must not contain special charaters or numbers. Only alphabets.");
    }
}
function phonenumber() {
    //to check phone number
    var phone = document.forms["inputer"]["phone"].value;
    var number = /^[6-9]\d{9}$/;

    //to check only for 10 digit phone numbers (India only)
    if(!phone.match(number)){
        alert("Enter a valid 10 digit phone number");
    }
}

function emailcheck() {
    //to check for valid email
    var email = document.forms["inputer"]["email"].value;
    var emailregex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    if(!email.match(emailregex)){
        alert("Enter a valid email!");
    }
}

function githubcheck() {
    //to check for valid link
    var link = document.forms["inputer"]["git"].value;
    var linkcheck = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

    if(!link.match(linkcheck)){
        alert("Enter a valid link");
    }
    else{
        //checks for valid github profile link
        var githubprofile = /(?:https?:)?\/\/(?:www\.)?github\.com\/(?P<login>[A-z0-9_-]+)\/?/;
        if(!link.match(githubprofile)){
            alert("Enter a valid github profile link!");
        }
    }
}