
import cors from "cors";
import dotenv from "dotenv";

import certificateRoutes from "./routes/certificate.route.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static("uploads"));

app.use("/api/certificates", certificateRoutes);

app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

app.listen(process.env.PORT || 5000, () =>
  console.log("Server started")
);
