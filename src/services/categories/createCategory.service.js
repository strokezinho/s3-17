import database from "../../database";

const createCategoryService = async (category) => {
  try {
    const res = await database.query(
      `INSERT INTO 
        categories(name)
      VALUES 
        ($1)
      RETURNING *;`,
      [category.name]
    );
    return res.rows[0];
  } catch (error) {
    throw new Error(error);
  }
};

export default createCategoryService;
