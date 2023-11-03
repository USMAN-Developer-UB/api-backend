// inisiasi library
const express = require("express");
const multer = require("multer");

// call models
const models = require("../models/index");
const role = models.role;
// const detail_transaksi = models.detail_transaksi;

// implementation
const app = express();
app.use(express.urlencoded({ extended: true }));

// endpoint akses data => GET
app.get("/", async (req, res) => {
  //ambil data
  let data = await role
    .findAll()
    .then((result) => {
      res.json({
        data: result,
      });
    })
    .catch((error) =>
      res.json({
        message: error.message,
      })
    );
});

// endpoint ambil data by id => GET
app.get("/:id_role", async (req, res) => {
  // ambil data by id
  let param = { id_role: req.params.id_role };
  let data = await role
    .findOne({ where: param })
    .then((result) => {
      res.json({
        data: result,
      });
    })
    .catch((error) => {
      res.json({
        message: error.message,
      });
    });
});

// end-point simpan data => POST
app.post("/", async (req, res) => {
  //insert data

  //tampung data
  let data = {
    id_role: req.body.id_role,
    nama_role: req.body.nama_role,
  };

  //insert data
  role
    .create(data)
    .then((result) => {
      res.json({
        message: "data has been inserted",
      });
    })
    .catch((error) => {
      res.json({
        message: error.message,
      });
    });
});

// // end-point update data => PUT
// app.put("/", async (req, res) => {
//   //update data

//   //tampung data
//   let data = {
//     customer_id: req.body.customer_id,
//     waktu: req.body.waktu,
//   };

//   //tampung data parameter
//   let param = {
//     transaksi_id: req.body.transaksi_id,
//   };

//   //proses insert data ke tabel transaksi
//   transaksi
//     .update(data, { where: param })
//     .then((result) => {
//       //hapus data di detail
//       detail_transaksi.destroy({ where: param }).then().catch();

//       //ambil nilai dari trasaksi_id
//       let transaksi_id = param.transaksi_id;
//       let detail = JSON.parse(req.body.detail_transaksi);

//       //proses menyisipkan transaksi_id
//       detail.forEach((element) => {
//         element.transaksi_id = transaksi_id;
//       });

//       //proses insert data ke detail_transaksi
//       detail_transaksi
//         .bulkCreate(detail)
//         .then((result) => {
//           res.json({
//             message: "data has been updated",
//           });
//         })
//         .catch((error) => {
//           res.json({
//             message: error.message,
//           });
//         });
//     })
//     .catch((error) => {
//       res.json({
//         message: error.message,
//       });
//     });
// });

// // end-point hapus data => DELETE
// app.delete("/:transaksi_id", async (req, res) => {
//   //delete data

//   //tampung data transaksi dari parameter yang dituju
//   let param = { transaksi_id: req.params.transaksi_id };
//   try {
//     //hapus detail_transaksi
//     await detail_transaksi.destroy({ where: param });

//     //hapus transaksinya
//     await transaksi.destroy({ where: param });

//     //berhasil hapus berikan output
//     res.json({
//       message: "data has been deleted",
//     });
//   } catch (error) {
//     res.json({
//       message: error.message,
//     });
//   }
// });

module.exports = app;

/** async -> spy aman
 *  await -> salah satu funtion asyn
 *  create -> dibuat utk insert 1 data / row
 *  bulkCreate -> dibuat utk insert multiple data/row
 *  function .then/.catch -> utk utk promise. Then jika pas eksekusi sukses, catch utk jika eksekusi gagal
 *  function Promise -> mulai findAll, findOne, create, update, destroy
 *  findAll() -> mengambil semua data pada tabel transaksi
 *
 */
