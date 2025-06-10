import env from "./src/utils/localEnvConfig.js";
import express from "express";
import cors from "cors";
import userRoutes from "./src/routes/user_route.js";
import bookRoutes from "./src/routes/book_route.js";
import authRoutes from "./src/routes/auth_route.js";

const PORT = env.PORT || 8080;
const app = express();

app.use(express.json());
/*app.use(
  cors({
    origin: ["http://localhost:3000/", "http://127.0.0.1:8081"],
  })
);*/
app.use("/user", userRoutes);
app.use("/book", bookRoutes);
app.use("/auth", authRoutes);
app.listen(PORT, () => {
  console.log(`Server in ascolto sulla porta PORT`);
});
