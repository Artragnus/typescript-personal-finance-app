import app from "./app";
import "dotenv/config";

const PORT = process.env.PORT as string;
app.listen(PORT, () => {
  console.log(`server listening on PORT: ${PORT}`);
});
