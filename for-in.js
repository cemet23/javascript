function panggilObject() {
  var mahasiswa = {
    nama: 'Adi',
    jurusan: 'TI',
    usia: 20,
  }
  for (var x in mahasiswa) {
    console.log(mahasiswa[x]);
  }
}
panggilObject();
