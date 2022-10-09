import database from "../../database";

const createProductService = async (product) => {
  try {
    const res = await database.query(
      `INSERT INTO 
        products(name, price)
      VALUES 
        ($1, $2)
      RETURNING *;`,
      [product.name, product.price]
    );
    return res.rows[0];
  } catch (error) {
    throw new Error(error);
  }
};

export default createProductService;
