function validateForm() {
    var x = document.forms["myForm"]["name"].value;
    if (x == "") {
      alert("Name and E-mail must be filled out");
      return false;
    }
  }