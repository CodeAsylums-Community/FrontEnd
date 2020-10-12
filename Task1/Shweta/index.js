function validateForm() {
    /* Registration Number Validation */
    var register = document.getElementById('regno').value;
    var registerNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(!(register.match(registerNum))) {
        alert("Registration number invalid must be 10 digit in length");
        return false;
    }
    /* Telephone number Valiation */
    var phone = document.getElementById('telnum').value;
    var phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(!(phone.match(phoneNum))) {
        alert("Phone number invalid");
        return false;
    }

    /* Email Validation */
    var email = document.getElementById('emailid').value;
    var emailValue = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var emailResult = emailValue.match(email);
    if (!emailResult){
      alert("Invalid E-mail ID");
      return false;
    }
    
    /*Password Validation*/
    var newPassword = document.getElementById('password').newPassword.value;
    var minNumberofChars = 6;
    var maxNumberofChars = 16;
    var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    alert(newPassword); 
    if(newPassword.length < minNumberofChars || newPassword.length > maxNumberofChars){
        return false;
    }
    if(!regularExpression.match(newPassword)) {
        alert("password should contain atleast one number and one special character");
        return false;
    }
    if(document.Form.password.value == "" || document.Form.password.value.length < 8) {
        alert("Please provide an 8 digit password.");
        document.Form.password.focus() ;
        return false;
    }
  return (true);
}