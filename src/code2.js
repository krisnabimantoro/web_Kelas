function validateForm() {
  let name = document.forms["myform"]["name"].value;
  let email = document.forms["myform"]["email"].value;
  let alamat = document.forms["myform"]["alamat"].value;

  if (name == "") {
    alert("Nama data harus diisi");
    return false;
  }
  else if (email == "") {
    alert("Email data harus diisi");
    return false;
  }
  else if (alamat == "") {
    alert("Alamat data harus diisi");
    return false;
  }
}
