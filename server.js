// inisiasi library
const express = require("express");
const app = express();

const role = require("./router/role");
const pengguna = require("./router/pengguna");
const ideaplan = require("./router/ideaplan");
const menu = require("./router/menu");
const bahan_menu = require("./router/bahan_menu");

app.use("/role", role);
app.use("/pengguna", pengguna);
app.use("/ideaplan", ideaplan);
app.use("/menu", menu);
app.use("/bahan_menu", bahan_menu);

app.listen(8000, () => {
  console.log("server run on port 8000");
});

// isinya semua penghubung dari semua table
