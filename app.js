const { isiPertanyaan, simpanData } = require("./contactApp");

const main_function = async () => {
  const nama = await isiPertanyaan("Masukkan nama Anda : ");
  const email = await isiPertanyaan("Masukkan email Anda : ");
  const noHP = await isiPertanyaan("Masukkan nomor HP Anda : ");

  simpanData(nama, email, noHP);
};

main_function();
