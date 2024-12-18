import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDb } from "./utils/db.js";
import userRoutes from "./routes/user.routes.js"
import adminRoutes from "./routes/admin.routes.js"
import courseRoutes from "./routes/course.routes.js"

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000

app.get("/", (req, res) => {
    res.send("Server test");
});
app.use("/api/user", userRoutes);
app.use("/api/course", courseRoutes);
app.use("/api/admin", adminRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    connectDb();
});

