import "dotenv/config";
import app from "./src/app";
import seed from "./src/seed";

seed();

const PORT = Number(process.env.PORT ?? 3000);

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
