function panggilObject() {
  var mobil = {
    jenis: 'sedan',
    harga: 200,
    warna: 'hitam',
    tahun: [2001,2002,2003],
    coba: coba(),
    ban: {
      ukuran: 220,
      tebal: 15,
    }
  }
  mobil.jenis = 'jeep';
  mobil.merk = 'Mercedes';
  console.log(mobil);
  console.log(mobil.jenis);
  console.log(mobil.tahun[0]);
  console.log(mobil.ban.tebal);
}
function coba() {
  return 'coba';
}
panggilObject();
