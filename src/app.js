import express from "express";
import "dotenv/config";

import productRouter from './routes/productRoutes'
import categoryRouter from './routes/categoryRoutes'

const app = express();

app.use(express.json());

app.use("/products", productRouter)
app.use("/categories", categoryRouter)

export default app.listen(3333, () => {
  console.log("Server running");
});
