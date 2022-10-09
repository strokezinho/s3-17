import { Router } from "express";

import { createProductController, listProductController, retrievePoductController, deleteProductController, updateProductController, productAndCategoryController } from "../controllers/product.controllers";

const router = Router();

router.post("", createProductController);
router.get("", listProductController);
router.get("/:id", retrievePoductController);
router.patch("/:id", updateProductController);
router.delete("/:id", deleteProductController);
router.get("/category/:id", retrievePoductController);

export default router;
