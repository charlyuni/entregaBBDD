const { options } = require("./mariaDB");
const knex = require("knex")(options);

const products = [
    {
        precio: 1500,
        title: "Botas",
        thumbnailUrl: "https://res.cloudinary.com/dkn534d0p/image/upload/v1656945679/img_produc/product_01_ndlwm0.jpg",
        reviews: 25,
        star: 2,
        Categoria: "Calzados",
        description: "Botas de cuero de alta calidad",
        stock: 10
    },
    {
        precio: 1300,
        title: "Campera",
        thumbnailUrl: "https://res.cloudinary.com/dkn534d0p/image/upload/v1656945680/img_produc/product_02_fzotws.jpg",
        reviews: 25,
        star: 3.5,
        Categoria: "Indumentaria",
        description: "Campera de cuero de alta calidad",
        stock: 10
    },
   {
        precio : 1100,
        title: "Bufandas",
        thumbnailUrl: "https://res.cloudinary.com/dkn534d0p/image/upload/v1656945680/img_produc/product_03_x0xmql.jpg",
        reviews: 25,
        star: 3.2,
        Categoria: "Indumentaria",
        description: "Bufandas de cuero de alta calidad",
        stock: 10
    },
    {
        precio: 1250,
        title: "Snow Toys",
        thumbnailUrl: "https://res.cloudinary.com/dkn534d0p/image/upload/v1656945680/img_produc/product_04_nw4ykz.jpg",
        reviews: 23,
        star: 3.5,
        Categoria: "Hogar",
        description: "Regalos para navidad",
        stock: 10
    },
    {
        precio: 4310,
        title: "Pulover",
        thumbnailUrl: "https://res.cloudinary.com/dkn534d0p/image/upload/v1656945680/img_produc/product_05_op976v.jpg",
        reviews: 11,
        star: 3.5,
        Categoria: "Indumentaria",
        description: "Pulover de pana de alta calidad",
        stock: 10
    },
    {
        precio: 1250,
        title: "Snow Toys",
        thumbnailUrl: "https://res.cloudinary.com/dkn534d0p/image/upload/v1656945680/img_produc/product_06_yxr9om.jpg",
        reviews: 66,
        star: 3.5,
        Categoria: "Hogar",
        description: "Regalos para navidad",
        stock: 10
    },
    {
        precio: 133250,
        title: "Celular Samsung",
        thumbnailUrl: "https://res.cloudinary.com/dkn534d0p/image/upload/v1656945679/img_produc/celular_zwcubb.png",
        reviews: 611,
        star: 5,
        Categoria: "Tecno",
        description: "Mejor Celular del mundo",
        stock: 10
    },
    {
        precio: 122250,
        title: "TV Samsung",
        thumbnailUrl: "https://res.cloudinary.com/dkn534d0p/image/upload/v1656945679/img_produc/tv_prrpbm.png",
        reviews: 611,
        star: 4,
        Categoria: "Tecno",
        description: "Mejor televisor del mundo",
        stock: 10
    },
    {
        precio: 111250,
        title: "Laptop Samsung",
        thumbnailUrl: "https://res.cloudinary.com/dkn534d0p/image/upload/v1656945679/img_produc/laptop_laiiw3.png",
        reviews: 611,
        star: 4,
        Categoria: "Tecno",
        description: "Mejor laptop del mundo",
        stock: 10
    },
    {
        precio: 3150,
        title: "Licuadora",
        thumbnailUrl: "https://res.cloudinary.com/dkn534d0p/image/upload/v1656945679/img_produc/licuadora_upgzpl.png",
        reviews: 21,
        star: 5,
        Categoria: "Electro",
        description: "Mejor Celular del mundo",
        stock: 10
    },
    {
        precio: 2200,
        title: "Mixer",
        thumbnailUrl: "https://res.cloudinary.com/dkn534d0p/image/upload/v1656945679/img_produc/mixer_t6q91y.png",
        reviews: 51,
        star: 4,
        Categoria: "Electro",
        description: "Mejor televisor del mundo",
        stock: 10
    },
    {
        precio: 5250,
        title: "Tostadora",
        thumbnailUrl: "https://res.cloudinary.com/dkn534d0p/image/upload/v1656945680/img_produc/tostadora_oxsabv.png",
        reviews: 61,
        star: 3,
        Categoria: "Electro",
        description: "Mejor laptop del mundo",
        stock: 10
    },
    {
        precio: 1500,
        title: "Cafetera",
        thumbnailUrl: "https://res.cloudinary.com/dkn534d0p/image/upload/v1656945679/img_produc/product_01_ndlwm0.jpg",
        reviews: "23",
        star: "3",
        Categoria: "Tecno",
        description: "Mejor cafetera del mundo",
        stock: "123"
    },
    {
        precio: "1500",
        title: "Botas Ricky",
        thumbnailUrl: "https://res.cloudinary.com/dkn534d0p/image/upload/v1656945679/img_produc/product_01_ndlwm0.jpg",
        reviews: "23",
        star: "3",
        Categoria: "Tecno",
        description: "Mejor cafetera del mundo",
        stock: "123"
    } 
]; 


// insert cars to BD
knex("productos")
  .insert(products)
  .then(() => {
    console.log("products inserted");
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    knex.destroy();
  });
