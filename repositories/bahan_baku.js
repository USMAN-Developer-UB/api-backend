const {
  ideaplan,
  Sequelize,
  menu,
  bahan_menu,
} = require('../models')
const flaverr = require('flaverr');
const { v4: uuidv4 } = require('uuid')

const library = {}
module.exports = library

library.create = async (data, id_ideaplan, transaction) => {
  const { menus } = data
  const menuArray = []
  const bahanBakuArray = []
  menus.forEach(async (item) => {
    let payload = {
      id_menu: uuidv4(),
      nama_menu: item.nama_menu,
      hari: item.hari,
      porsi: item.porsi,
      id_ideaplan
    }
    menuArray.push(payload)
    item.bahan_menu.forEach(async (bahan) => {
      let payloadMenu = {
        id_bahan_menu: uuidv4(),
        nama_bahan: bahan.nama_bahan,
        harga_bahan: bahan.harga_bahan,
        berat_bahan: bahan.berat_bahan,
        jenis_berat: bahan.jenis_berat,
        id_menu: payload.id_menu
      }
      bahanBakuArray.push(payloadMenu)
    })
  })
  try {
    await menu.bulkCreate(menuArray, { transaction })
    await bahan_menu.bulkCreate(bahanBakuArray, { transaction })
    return {
      success: true,
      result: {
        menu: menuArray,
        bahan_menu: bahanBakuArray
      }
    }
  } catch (err) {
    return {
      success: false,
      err
    }
  }
}
