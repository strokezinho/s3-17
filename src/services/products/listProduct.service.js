import database from "../../database";

const listProductService = async () => {
  try {
    let res = await database.query(`SELECT * FROM products`, []);
    if(res == null){
      throw new Error("Product not found")
    }
    return res.rows
  } catch (error) {
    throw new Error(error);
  }
};

export default listProductService;
