import env from "/utils/localEnvConfig.js";
import app from "./src/utils/expressConfig.js";
import cors from "cors";
import userRoutes from "/routes/userRoutes.js";

const PORT = env.PORT || 3000;
app.use(
  cors({
    origin: ["http://localhost:3000/"],
  })
);
app.use("/user", userRoutes);
app.listen(PORT, () => {
  console.log(`Server in ascolto sulla porta PORT`);
});
