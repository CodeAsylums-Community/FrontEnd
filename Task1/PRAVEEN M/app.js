function Validate() {
  var check=document.getElementById('terms')
  if(check.checked){}
  else{
    alert("Terms and conditions needs to be checked");
    return false
  }
  /*Name validation */
  var fname = document.getElementById('Fname').value;
  var lname = document.getElementById('Lname').value;
  var nameRGEX= /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  var nameResult1 = nameRGEX.test(fname);
  var nameResult2 = nameRGEX.test(lname);
  if (!nameResult1 || !nameResult2){
    alert("Name should not contain number(s) or special character(s)");
    return false;
  }
  /*Date validation*/
  var dob = document.getElementById('DOB').value;
  var dobRGEX = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
  var dobResult = dobRGEX.test(dob);
  if (!dobResult){
    alert("D.O.B should be of format dd/mm/yyyy");
    return false;
  }
  /*Phone Number validation */
  var phoneNumber = document.getElementById('phone-Number').value;
  var phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
  var phoneResult = phoneRGEX.test(phoneNumber);
  if (!phoneResult){
    alert("Phone No. should not contain character(s), symbol(s) or whitespaces");
    return false;
  }
  /*Email validation*/
  var mail = document.getElementById('mailid').value;
  var mailREGX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var mailResult = mailREGX.test(mail);
  if (!mailResult){
    alert("Invalid E-mail ID");
  }
  /*Address validation*/
   var address = document.getElementById('address').value;
  var addRGEX = /\s+(\d{2,5}\s+)(?![a|p]m\b)(([a-zA-Z|\s+]{1,5}){1,2})?([\s|\,|.]+)?(([a-zA-Z|\s+]{1,30}){1,4})(court|ct|street|st|drive|dr|lane|ln|road|rd|blvd)([\s|\,|.|\;]+)?(([a-zA-Z|\s+]{1,30}){1,2})([\s|\,|.]+)?\b(AK|AL|AR|AZ|CA|CO|CT|DC|DE|FL|GA|GU|HI|IA|ID|IL|IN|KS|KY|LA|MA|MD|ME|MI|MN|MO|MS|MT|NC|ND|NE|NH|NJ|NM|NV|NY|OH|OK|OR|PA|RI|SC|SD|TN|TX|UT|VA|VI|VT|WA|WI|WV|WY)([\s|\,|.]+)?(\s+\d{5})?([\s|\,|.]+)/i;
  var addResult = addRGEX.test(address);
  if (!addResult){
    alert("Invalid Address");
    return false;
  }
}
