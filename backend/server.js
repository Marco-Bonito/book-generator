import env from "/utils/localEnvConfig.js";
import app from "./src/utils/expressConfig.js";
import cors from "cors";
import userRoutes from "/routes/user_route.js";
import bookRoutes from "/routes/book_route.js";
import authRoutes from "/routes/auth_route.js";

const PORT = env.PORT || 3000;
app.use(
  cors({
    origin: ["http://localhost:3000/"],
  })
);
app.use("/user", userRoutes);
app.use("/book", bookRoutes);
app.use("/auth", authRoutes);
app.listen(PORT, () => {
  console.log(`Server in ascolto sulla porta PORT`);
});
