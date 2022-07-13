const { FILENAME_DATABASE } = require("../../constants");
const fs = require("fs");
const { options } = require("../../BBDD/mariaDB");
const { json } = require("express");
const knex = require("knex")(options);

module.exports = {

  /// Trae todos los productos


  getProducts: async (req, res) => {
    try {
        const products = await knex
        .from("productos")
        .select('*')
        .catch((err) => {
        console.log(err);})
      res.render("pages/datos.ejs",
      {data: JSON.parse(JSON.stringify(products))}) 
    } catch (error) {
      res.json({ msg: `Error: ${error.message}` });
    } 
  },

  /// busca producto por ID

  getProductById: async (req, res) => {
    const { id } = req.params;
    try {
      if (!+id) throw new Error("Error. Proporcione un ID");
      const product = await knex
      .from("productos")
      .where({ id: id })
      .select('*')
      .then((products) => {
        if (products.length === 0) throw new Error("Error. No se encontró el producto");
        res.render("pages/datos.ejs",
        {data: products} )
      })
      .catch((err) => {
        console.log(err);})
    } catch (error) {
      res.json({ msg: `Error: ${error.message}` });
    }
  },


  /// crea nuevo productos
  createProduct: async (req, res) => {
    const products = req.body;

    knex("productos")
    .insert(products)
    .then(() => {
      console.log("products inserted");
    })
    .catch((err) => {
      console.log(err);
    }) 
  },


  updateProduct: async (req, res) => {
    const { id } = req.params;
    const newData = req.body;

    console.log(newData);
/* 
    try {
      if (!+id) throw new Error("Error. Proporcione un ID");

      knex
        .from("productos")
        .where({ id: id })
        .update({ stock: 1 })
        .then(() => console.log("stock updated"))
        .catch((err) => {
          console.log(err);
        })
        res.json({ msg: `Producto  actualizado con exito` });
    } catch (error) {
      res.json({ msg: `Error: ${error.message}` });
    } */
  },

  deleteProduct: async (req, res) => {
    const { id } = req.params;

    try {
      if (!+id) throw new Error("Error. Proporcione un ID");

      const products = await fs.promises.readFile(FILENAME_DATABASE, "utf-8");
      const dataFiltrada = JSON.parse(products).filter(item => item.id != id);


        await fs.promises.writeFile(
          FILENAME_DATABASE,
          JSON.stringify(dataFiltrada),
          "utf-8"
        );
      res.json({ msg: `Producto ${id} eliminado con exito` });

    } catch (error) {
      res.json({ msg: `Error: ${error.message}` });
    }
  }

};
