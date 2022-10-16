import createProductService from "../services/products/createProduct.service";
import deleteProductService from "../services/products/deleteProduct.service";
import listProductService from "../services/products/listProduct.service";
import productAndCategoryService from "../services/products/productAndCategory.service";
import retrievePoductService from "../services/products/retrievePoduct.service";
import updateProductService from "../services/products/updateProduct.service";

const createProductController = async (request, response) => {
  try {
    const product = request.body;
    const createdProduct = await createProductService(product);
    return response.status(201).json(createdProduct);
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};

const deleteProductController = async (request, response) => {
  try {
    const id = request.params.id;
    await deleteProductService(id);
    return response.status(204).send();
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};

const listProductController = async (request, response) => {
  try {
    const products = await listProductService();
    return response.json(products);
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};

const productAndCategoryController = async (request, response) => {
  try {
    const products = await productAndCategoryService();
    return response.json(products);
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};

const retrievePoductController = (request, response) => {
  try {
    const id = request.params.id;
    const product = retrievePoductService(id);
    return response.json(product);
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};

const updateProductController = async (request, response) => {
  try {
    const id = request.params.id;
    const product = request.body;
    const updatedProduct = await updateProductService(id, product);

    return response.json(updatedProduct);
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};

export { createProductController, deleteProductController, listProductController, productAndCategoryController, retrievePoductController, updateProductController }