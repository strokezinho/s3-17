import createCategoryService from "../services/categories/createCategory.service";
import listCategoryService from "../services/categories/listCategory.service"; 
import retrieveCategoryService from "../services/categories/retrieveCategory.service";
import deleteCategoryService from "../services/categories/deleteCategory.service";
import updateCategoryService from "../services/categories/updateCategory.service";


const createCategoryController = async (request, response) => {
    try {
      const category = request.body;
      const createdCategory = await createCategoryService(category);
      return response.status(201).json(createdCategory);
    } catch (error) {
      return response.status(400).json({ message: error.message });
    }
  };
  
  const listCategoryController = async (request, response) => {
    try {
      const categories = await listCategoryService();
      return response.json(categories);
    } catch (error) {
      return response.status(400).json({ message: error.message });
    }
  };
  
  const retrieveCategoryController = (request, response) => {
    try {
      const id = request.params.id;
      const category = retrieveCategoryService(id);
      return response.json(category);
    } catch (error) {
      return response.status(400).json({ message: error.message });
    }
  };
  
  const deleteCategoryController = async (request, response) => {
    try {
      const id = request.params.id;
      await deleteCategoryService(id);
      return response.status(204).send();
    } catch (error) {
      return response.status(400).json({ message: error.message });
    }
  };
  
  const updateCategoryController = async (request, response) => {
    try {
      const id = request.params.id;
      const category = request.body;
      const updatedCategory = await updateCategoryService(id, category);
  
      return response.json(updatedCategory);
    } catch (error) {
      return response.status(400).json({ message: error.message });
    }
  };
  
  export default { createCategoryController, listCategoryController, retrieveCategoryController, deleteCategoryController, updateCategoryController };