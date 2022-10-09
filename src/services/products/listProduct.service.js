import database from "../../database";

const listProductService = async () => {
  try {
    let res = await database.query(`SELECT * FROM products`, []);
    return res.rows
  } catch (error) {
    throw new Error(error);
  }
};

export default listProductService;
