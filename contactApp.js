//core module
// const { rejects } = require("assert");

// const { resolve } = require("path/posix");

//write string ke file syncronous

// try {
//   fs.writeFileSync("data/syn.txt", "selamat pagi dunia tipu tipu");
// } catch (e) {
//   console.log(e);
// }

//write file asyncronous
// fs.writeFile("data/asyn.txt", "halo bambang", (err) => {
//   if (err) throw err;
//   console.log("The file has been saved!");
// });

//membaca isi file asyn
// fs.readFile("data/asyn.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });
const fs = require("fs");
const chalk = require("chalk");
const validator = require("validator");
// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

//cek folder data
if (!fs.existsSync("./data")) {
  fs.mkdirSync("./data");
}

//cek file kontak.json
if (!fs.existsSync("./data/kontak.json")) {
  fs.writeFileSync("./data/kontak.json", "[]", "utf-8");
}

//1
// const input1 = () => {
//   return new Promise((resolve, reject) => {
//     rl.question("Masukkan nama Anda : ", (nama) => {
//       resolve(nama);
//     });
//   });
// };

// const input2 = () => {
//   return new Promise((resolve, reject) => {
//     rl.question("Masukkan email Anda : ", (email) => {
//       resolve(email);
//     });
//   });
// };

// const input3 = () => {
//   return new Promise((resolve, reject) => {
//     rl.question("Masukkan nomor HP Anda : ", (noHP) => {
//       resolve(noHP);
//     });
//   });
// };

// const main_function = async () => {
//   const nama = await input1();
//   const email = await input2();
//   const noHP = await input3();

//   const kontak = { nama, email, noHP };
//   const file = fs.readFileSync("./data/kontak.json", "utf-8");
//   const contact = JSON.parse(file);

//   contact.push(kontak);

//   fs.writeFileSync("./data/kontak.json", JSON.stringify(contact));

//   rl.close();
// };

// const isiPertanyaan = (pertanyaan) => {
//   return new Promise((resolve, reject) => {
//     rl.question(pertanyaan, (nama) => {
//       resolve(nama);
//     });
//   });
// };

const loadKontak = () => {
  const file = fs.readFileSync("./data/kontak.json", "utf-8");
  const contact = JSON.parse(file);
  return contact;
};

const simpanData = (nama, email, noHP) => {
  const kontak = { nama, email, noHP };
  const contact = loadKontak();

  //cek nama duplicate
  const duplicate = contact.find(
    (contact) => contact.nama.toLowerCase() === nama
  );
  if (duplicate) {
    console.log(chalk.red.bold("Data sudah ada, gunakan nama lain"));
    return false;
  }

  //cek format email
  if (email) {
    if (!validator.isEmail(email)) {
      console.log(chalk.red.bold("Format email salah bro"));
      return false;
    }
  }

  //cek nomor HP
  if (!validator.isMobilePhone(noHP, "id-ID")) {
    console.log(chalk.red.bold("Yaelah no Hp salah, yang bener dong"));
    return false;
  }

  contact.push(kontak);

  fs.writeFileSync("./data/kontak.json", JSON.stringify(contact));
};

const listKontak = () => {
  const contact = loadKontak();

  console.log("Daftar kontak");
  contact.forEach((contact, i) => {
    console.log(`${i + 1}. ${contact.nama} - ${contact.noHP}`);
  });
};

const detailKontak = (nama) => {
  const contact = loadKontak();

  const kontak = contact.find((kontak) => kontak.nama.toLowerCase() === nama);

  if (!kontak) {
    console.log(`${nama} tidak ditemukan pada daftar`);
    return false;
  }

  console.log(kontak.nama);
  if (kontak.email) {
    console.log(`Email : ${kontak.email}`);
  }
  console.log(`No.HP : ${kontak.noHP}`);
};

module.exports = { simpanData, listKontak, detailKontak };
