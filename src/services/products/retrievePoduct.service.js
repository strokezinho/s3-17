import database from "../../database";

const retrievePoductService = async (id) => {
  try {
    const res = await database.query(
      `SELECT
            *
        FROM
            products
        WHERE
            id = $1;`,
      [id]
    );
    const product = res.rows[0];
    if(!product) {
        throw new Error('Product not found')
    }
    return product;
  } catch (error) {
    throw new Error(error);
  }
};

export default retrievePoductService;
