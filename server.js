const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// inisiasi controller
const mahasiswaController = require("./app/controllers/mahasiswaController");

// routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// produk
app.get("/api/mahasiswa", mahasiswaController.getAll);
app.get("/api/mahasiswa/:id", mahasiswaController.getById);
app.post("/api/mahasiswa", mahasiswaController.create);
app.put("/api/mahasiswa/:id", mahasiswaController.update);
app.delete("/api/mahasiswa/:id", mahasiswaController.delete);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
