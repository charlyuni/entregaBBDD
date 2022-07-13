const { options } = require("./mariaDB");
const knex = require("knex")(options);

// create table productos
knex.schema
    .createTable("productos", (table) => {
        table.increments("id");
        table.string("title");
        table.integer("reviews");
        table.string("thumbnailUrl");
        table.float("precio");
        table.integer("stock");
        table.string("Categoria");
        table.string("description");
        table.integer("star");
    })
    .then(() => {
        console.log("Table productos created");
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        knex.destroy();
    });
