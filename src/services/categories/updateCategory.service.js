import database from "../../database";

const updateCategoryService = async (id, category) => {
  try {
    if (category.id) {
      delete category["id"];
    }
    let query = "UPDATE categories SET";
    const keys = Object.keys(category);
    const values = Object.values(category);
    keys.forEach((key, index) => {
      query += `${key} = \$${(index += 1)}, `;
    });
    query = query.slice(0, -2);
    query += `WHERE id = \$${(keys.length += 1)} RETURNING *;`;
    const res = await database.query(query, [...values, id]);
    if (res.rowCount === 0) {
      throw new Error("Category not Found");
    }
    return res.rows[0];
  } catch (error) {
    throw new Error(error);
  }
};

export default updateCategoryService;
