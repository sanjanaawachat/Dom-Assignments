//que11:

11.  //"Create a form having name ,email, phone no. , birth year 
//Add validations - phone no. should start with 91 , it should be 10 digits
//email should be domain prepbytes.com
  function numberCheck() {
    let a = document.getElementById("phoneno").value;
    if (!a.startsWith("91")) {
      let b = document.getElementById("startcheck");
      b.style.display = "inline";
    } else {
      let b = document.getElementById("startcheck");
      b.style.display = "none";
    }
    if (a.length != 10) {
      let b = document.getElementById("digitcheck");
      b.style.display = "inline";
    } else {
      let b = document.getElementById("digitcheck");
      b.style.display = "none";
    }
  }
  //birth year should be > 95"
  function bYearCheck() {
    let a = document.getElementById("byear").value;
    if (a < 1998) {
      let b = document.getElementById("byearcheck");
      b.style.display = "inline";
    } else {
      let b = document.getElementById("byearcheck");
      b.style.display = "none";
    }
  }