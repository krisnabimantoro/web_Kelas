function calcSum() {
    const input1 = parseInt(document.getElementById("input1").value);
    const input2 = parseInt(document.getElementById("input2").value);
    const hasil = document.getElementById("hasil");

    let total = input1 + input2;
    hasil.innerHTML += total;
  }
  function move() {
    window.location.href = "./codelab2.html";
  }