function validation() {
    var name = document.getElementById('name').value;
    var reg = document.getElementById('reg').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    var linkedin = document.getElementById('linkedin').value;
    var password = document.getElementById('password').value;
    var repassword = document.getElementById('repassword').value;
    var city = document.getElementById('city').value;
    var country = document.getElementById('country').value;

    var name_check = /^[A-Za-z]{3,20}$/;
    var reg_check = /^[A-za-z0-9]{3,}$/;
    var email_check = /^[A-Za-z_.0-9]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{3,}$/;
    var mobile_check = /^[6789]{1}[0-9]{9}$/;
    var link_check = /^[A-Za-z0-9-._]{3,}$/
    var pass_check = /^(?=.*[0-9])(?=.*[!@#$%^&*.])[a-zA-Z0-9!@#$%^&*.]{8,16}$/;
    var city_check = /^[A-Za-z.]{2,}$/;
    var country_check = /^[A-Za-z.]{2,}$/;

    if(name_check.test(name)){
        document.getElementById('name_error').innerHTML=" ";
    }
    else {
        document.getElementById('name_error').innerHTML ="Name is Not Valid";
        return false;
    }
    
    if(reg_check.test(reg)){
        document.getElementById('reg_error').innerHTML=" ";
    }
    else {
        document.getElementById('reg_error').innerHTML ="Registration No. is Not Valid";
        return false;
    }

    if(email_check.test(email)){
        document.getElementById('email_error').innerHTML=" ";
    }
    else {
        document.getElementById('email_error').innerHTML ="Email ID is Not Valid";
        return false;
    }

    if(mobile_check.test(mobile)){
        document.getElementById('number_error').innerHTML=" ";
    }
    else {
        document.getElementById('number _error').innerHTML ="Mobile No. is Not Valid";
        return false;
    }

    if(link_check.test(linkedin)){
        document.getElementById('url_error').innerHTML=" ";
    }
    else {
        document.getElementById('url_error').innerHTML ="Linkedin Username is Not Valid";
        return false;
    }

    if(pass_check.test(password)){
        document.getElementById('password_error').innerHTML=" ";
    }
    else{
        document.getElementById('password_error').innerHTML ="Password is Not valid";
        return false;
    }

    if(repassword.match(password)){
        document.getElementById('repass_error').innerHTML=" ";
    }
    else {
        document.getElementById('repass_error').innerHTML ="Re-Password doesn't Match";
        return false;
    }
  
    if(city_check.test(city)){
        document.getElementById('city_error').innerHTML=" ";
    }
    else {
        document.getElementById('city_error').innerHTML ="City Name is Not Valid";
        return false;
    }
    
    if(country_check.test(country)){
        document.getElementById('country_error').innerHTML=" ";
    }
    else {
        document.getElementById('country_error').innerHTML ="Country Name is Not Valid";
        return false;
    }
}