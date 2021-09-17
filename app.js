//core module
const fs = require("fs");

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

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukkan nama : ", (nama) => {
  rl.question("Masukkan nomor HP : ", (noHP) => {
    const kontak = { nama, noHP };
    const file = fs.readFileSync("data/kontak.json", "utf-8");
    const contact = JSON.parse(file);

    contact.push(kontak);

    fs.writeFileSync("data/kontak.json", JSON.stringify(contact));

    rl.close();
  });
});
