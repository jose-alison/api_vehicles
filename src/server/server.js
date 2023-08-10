const express = require("express");
const app = express();
const routeVeiculos = require("../routes/vehicles");
const { checkPassword } = require("../middlewares/authUser");

app.use(express.json());
app.use(checkPassword);

app.get("/", (req, res) => {
    res.status(200).json({ message: "Successfull connection" });
});

app.use("/vehicles", routeVeiculos);

module.exports = app;
