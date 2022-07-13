const { Router } = require("express");
const productsController = require("../Controllers/productos.controller")
const router = Router();
const ADMIN = true;

const isAdmin = (req, res, next) => {
    if (ADMIN) {
        next();
    } else {
        res.status(401).send("You are not authorized");
    }
}

router.get("/", isAdmin , productsController.getProducts);
router.get("/:id", productsController.getProductById);
router.post("/", productsController.createProduct);
router.put("/update/:id", productsController.updateProduct);
/* router.get("/form",isAdmin,  productsController.muestraFormulario);
router.put("/update/:id",isAdmin, productsController.updateProduct);
router.delete("/delete/:id",isAdmin, productsController.deleteProduct); */

module.exports = router;
