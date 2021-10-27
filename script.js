

var obj_UserDetail = {
  db_userName: "prasad", 
  db_password: "pwm@12345", 
  db_email: "pm@gmail.com", 
  db_mobileNum: "1230456789",
}

var obj_user1 = {
  db_userName: "", 
  db_password: "", 
  db_email: "", 
  db_mobileNum: "",
}


function validate() {
  event.preventDefault();

  var userName = document.getElementById("id_username").value;
  var password = document.getElementById("id_password").value;
  var email = document.getElementById("id_email").value;
  var mobileNum = document.getElementById("id_mobileNumber").value;
  
  if (userName == obj_UserDetail.db_userName) {
    document.getElementById("sp1").innerHTML = "User Name allready exist";
    document.getElementById("sp1").style.color = "red";
  } else {
    document.getElementById("sp1").innerHTML = "Username available";
    document.getElementById("sp1").style.color = "chartreuse";
    obj_user1.db_userName = userName;
  }

  if (password.length >= 6) {
    document.getElementById("sp2").innerHTML = "Strong password";
    document.getElementById("sp2").style.color = "chartreuse";
    obj_user1.db_password = password;
  } else {
    document.getElementById("sp2").innerHTML ="Week password need more than 6 character";
    document.getElementById("sp2").style.color = "red";
  }

  if(email.endsWith("@gmail.com")){
    if (email == obj_UserDetail.db_email) {
      document.getElementById("sp3").innerHTML = "Email ID allready exist";
      document.getElementById("sp3").style.color = "red";
    } else {
      document.getElementById("sp3").innerHTML = "Email ID available";
      document.getElementById("sp3").style.color = "chartreuse";
      obj_user1.db_email = email;
    }
  } else {
    document.getElementById("sp3").innerHTML = "Email ID needs @gmail.com";
    document.getElementById("sp3").style.color = "red";
  }

  if (mobileNum.length == 10) {
    if (mobileNum == obj_UserDetail.db_mobileNum) {
      document.getElementById("sp4").innerHTML = "Enter valid number";
      document.getElementById("sp4").style.color = "red";
    } else{
      obj_user1.db_mobileNum = mobileNum;
    }
  } else {
    document.getElementById("sp4").innerHTML = "Need 10 numbers"; 
    document.getElementById("sp4").style.color = "red";
  }
}

function detailVerified(){
  event.preventDefault();
  console.log(obj_user1);
}