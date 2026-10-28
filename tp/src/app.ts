import express from "express";
import itemRoutes from "./routes/itemRoutes";
import notFound from "./middlewares/notFound";
import errorHandler from "./middlewares/errorHandler";

const app = express();
app.use(express.json());
app.use("/items", itemRoutes);
app.use(notFound);
app.use(errorHandler);

export default app;
