import { Router } from "express";

import { createCategoryController, listCategoryController, retrieveCategoryController, deleteCategoryController, updateCategoryController } from "../controllers/category.controllers";

const router = Router();

router.post("", createCategoryController);
router.get("", listCategoryController);
router.get("/:id", retrieveCategoryController);
router.patch("/:id", updateCategoryController);
router.delete("/:id", deleteCategoryController);

export default router;

