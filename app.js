const { type } = require("os");
const { demand, demandOption } = require("yargs");
const yargs = require("yargs");
const { simpanData } = require("./contactApp");

//ambil argument dari commandline
yargs.command({
  command: "add",
  describe: "Menambah data kontak",
  builder: {
    nama: {
      describe: "Nama lengkap",
      demandOption: true,
      type: "string",
    },
    email: {
      describe: "Email",
      demandOption: false,
      type: "string",
    },
    noHP: {
      describe: "Nomor HP",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    simpanData(argv.nama, argv.email, argv.noHP);
  },
});

yargs.parse();

// const { isiPertanyaan, simpanData } = require("./contactApp");

// const main_function = async () => {
//   const nama = await isiPertanyaan("Masukkan nama Anda : ");
//   const email = await isiPertanyaan("Masukkan email Anda : ");
//   const noHP = await isiPertanyaan("Masukkan nomor HP Anda : ");

//   simpanData(nama, email, noHP);
// };

// main_function();
