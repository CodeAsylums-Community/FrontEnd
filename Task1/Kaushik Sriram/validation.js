function validateFn() {
  var firstname = document.form.firstname.value;
  var regexOfName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  if (firstname.length == 0) {
    return;
  } else if (!regexOfName.test(firstname)) {
    document.getElementById("fn").style.color = "red";
    document.getElementById("fn").innerHTML = "enter valid name <br>";
    return false;
  } else {
    document.getElementById("fn").innerHTML = "";
  }
}

function validateLn() {
  var lastname = document.form.lastname.value;
  var regexOfName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  if (lastname.length == 0) {
    return;
  } else if (!regexOfName.test(lastname)) {
    document.getElementById("ln").style.color = "red";
    document.getElementById("ln").innerHTML = "enter valid name <br>";
    return false;
  } else {
    document.getElementById("ln").innerHTML = "";
  }
  
}

function validatePass(){
  var password = document.form.password.value;
  var regexOfPass = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
  
  if(password.length==0){
          return;
       }
      else if(!regexOfPass.test(password)) {
         document.getElementById("pass").style.color = "red";
         document.getElementById("pass").innerHTML = "should contain minimum eight characters,at least one letter and one number<br>";
         return false;
       }else{
         document.getElementById("pass").innerHTML = "";
       }

}

function validateNum(){
      var number = document.form.number.value;
      var regexOfNum = /^(\+\d{1,3}[- ]?)?\d{10}$/;

      if(number.length==0){
          return;
       }
      else if(!regexOfNum.test(number)) {
         document.getElementById("ph").style.color = "red";
         document.getElementById("ph").innerHTML = "enter valid number<br>";
         return false;
       }else{
         document.getElementById("ph").innerHTML = "";
       }
}

function validateEmail(){
    var regexOfEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    var email = document.form.email.value;

    if(email.length==0){
      return;
    }
    else if (!regexOfEmail.test(email)) {
      document.getElementById("email").style.color = "red";
      document.getElementById("email").innerHTML = "enter valid email<br>";
      return false;
    }else{
      document.getElementById("email").innerHTML = "";
    }
}

function validateRegnum(){
    var regexOfRegNum = /^[A-Z0-9]{6}$/;
    var regNum = document.form.regnum.value;

    if (regNum.length == 0) {
      return;
    } else if (!regexOfRegNum.test(regNum)) {
      document.getElementById("regn").style.color = "red";
      document.getElementById("regn").innerHTML = "enter valid 6-digit register number<br>";
      return false;
    } else {
      document.getElementById("regn").innerHTML = "";
    }

}