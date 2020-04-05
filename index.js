var message = "Hello Coding";
let msg1 = "Hallo";

const msg2 = "Coding";

if (true) {
  msg3 = "Selamat";
}

console.log(msg3);

function jalanScript() {
  console.log('Hore!');
}

function jalanScript2() {
  console.log(document.getElementById('namadepan'));
  console.log(document.getElementById('namabelakang'));
}

function jalanScript3() {
  console.log(document.getElementsByClassName('middle'));
}

function jalanScript4() {
  console.log(document.getElementsByTagName('input'));
}

function jalanScript5() {
  console.log(document.querySelector(".middle"));
}

function Tombol() {
  var a = document.getElementsByTagName("button")[0];
  var b = a.attributes.item(1).name;
  document.getElementById("contoh").innerHTML = b;
}
