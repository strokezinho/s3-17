import database from "../../database";

const listCategoryService = async () => {
  try {
    let res = await database.query(`SELECT * FROM categories`, []);
    return res.rows
  } catch (error) {
    throw new Error(error);
  }
};

export default listCategoryService;
