const { type } = require("os");
const { demand, demandOption } = require("yargs");
const yargs = require("yargs");
const {
  simpanData,
  listKontak,
  detailKontak,
  deleteKontak,
} = require("./contactApp");

//add contact
yargs
  .command({
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
  })
  .demandCommand();

// show list contact
yargs.command({
  command: "list",
  describe: "Menampilkan daftar kontak",
  handler() {
    listKontak();
  },
});

//show detail kontak
yargs.command({
  command: "detail",
  describe: "Menampilkan detail kontak",
  builder: {
    nama: {
      describe: "Nama lengkap",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    detailKontak(argv.nama);
  },
});

//delete kontak
yargs.command({
  command: "delete",
  describe: "Menghapus kontak",
  builder: {
    nama: {
      describe: "Nama lengkap",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    deleteKontak(argv.nama);
  },
});

yargs.parse();
