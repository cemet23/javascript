function panggilShift() {
  var a = ['a','b','c'];
  console.log(a);
  var a2 = a.shift();
  console.log(a2);
  console.log(a);
}
panggilShift();

function panggilPop() {
  var a = ['a','b','c'];
  console.log(a);
  var a2 = a.pop();
  console.log(a2);
  console.log(a);
}
panggilPop();

function panggilPush() {
  var a = ['a','b','c'];
  console.log(a);
  a.push('d');
  console.log(a);
}
panggilPush();

function panggilSplice() {
  var a = ['a','b','c'];
  console.log(a);
  a.splice(2,1,'d','e'); // 2 = letak insert data, 1 = jumlah hapus data
  return a;
}
console.log(panggilSplice());

function panggilUnshift() {
  var a = ['a','b','c'];
  console.log(a);
  a.unshift('d','e');
  return a;
}
console.log(panggilUnshift());
