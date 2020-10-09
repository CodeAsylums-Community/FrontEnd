function validateForm() {
    if(document.myForm.name.value == "") {
        alert( "Please provide your name!");
        document.myForm.Name.focus() ;
        return false;
    }
    if(document.myForm.regno.value == "" || isNaN(document.myForm.regno.value) || document.myForm.regno.value.length != 9) {
        alert("Please provide a 9 digit registration number.");
        document.myForm.regno.focus() ;
        return false;
    }
    if(document.myForm.pass.value == "" || document.myForm.pass.value.length < 8) {
        alert("Please provide an 8 digit password.");
        document.myForm.Name.focus() ;
        return false;
    }
    if(document.myForm.email.value == "") {
        alert("Please provide your Email!");
        document.myForm.EMail.focus() ;
        return false;
    }
    var emailID = document.myForm.EMail.value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");
    if (atpos < 1 || ( dotpos - atpos < 2 )) {
        alert("Please enter correct email ID")
        document.myForm.EMail.focus() ;
        return false;
    }
    if(document.myForm.age.value == "" || isNaN(document.myForm.age.value)) {
        alert("Please provide a valid age.");
        document.myForm.Zip.focus() ;
        return false;
    }
    if(document.myForm.zip.value == "" || isNaN(document.myForm.zip.value) || document.myForm.zip.value.length != 6) {
        alert("Please provide a zip in the format ######. Ex: 100011");
        document.myForm.Zip.focus() ;
        return false;
    }
    if(document.myForm.state.value == "") {
        alert("Please provide your state!");
        return false;
    }
    let x = document.myForm.country.value;
    if(x == "-1") {
        alert("Please provide your country!");
        return false;
    }
    return( true );
}