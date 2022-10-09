import database from "../../database";

const productAndCategoryService = async () => {
  try {
    const res = await database.query(
      `SELECT 
        *
       FROM 
        categories c 
       JOIN
        products p ON c.id = p.category_id;`,
      []
    );
    return res.rows[0];
  } catch (error) {
    throw new Error(error);
  }
};

export default productAndCategoryService;
