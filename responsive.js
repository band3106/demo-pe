function hide() {
  var a = document.getElementById("para2").innerHTML;
  if (a == "SHOW LESS") {
    document.getElementById("para").style.display = "none";
    document.getElementById("para2").innerHTML = "SHOW MORE";
  }

  if (a == "SHOW MORE") {
    document.getElementById("para").style.display = "block";
    document.getElementById("para2").innerHTML = "SHOW LESS";
  }
}

function enroll() {
  var a = document.forms.register.email.value;
  var b = document.forms.register.password.value;
  var c = document.forms.register.repassword.value;
  if (document.forms.register.full_name.value =="" || a == "" || b == "" || c == "") {
    alert("Please fill all fields");
    return false;
  }
  else if(b != c){
    alert("Password not match");
    return false;
  }
  if(!confirm("Would you like to choose options?")){
    alert("Start learning Web201c")
  }else{
    return false;
  }
}
