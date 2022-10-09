import database from "../../database";

const retrieveCategoryService = async (id) => {
  try {
    const res = await database.query(
      `SELECT
            *
        FROM
            categories
        WHERE
            id = $1;`,
      [id]
    );
    const category = res.rows[0];
    if(!category) {
        throw new Error('Category not found')
    }
    return category;
  } catch (error) {
    throw new Error(error);
  }
};

export default retrieveCategoryService;
