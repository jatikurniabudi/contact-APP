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
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

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

const isiPertanyaan = (pertanyaan) => {
  return new Promise((resolve, reject) => {
    rl.question(pertanyaan, (nama) => {
      resolve(nama);
    });
  });
};

const simpanData = (nama, email, noHP) => {
  const kontak = { nama, email, noHP };
  const file = fs.readFileSync("./data/kontak.json", "utf-8");
  const contact = JSON.parse(file);

  contact.push(kontak);

  fs.writeFileSync("./data/kontak.json", JSON.stringify(contact));

  rl.close();
};

module.exports = { isiPertanyaan, simpanData };
