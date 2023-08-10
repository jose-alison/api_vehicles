const express = require("express");
const route = express.Router();
const {
    getVehicles,
    getVehicleByPlate,
    patchDataVehicle
} = require("../controllers/vehicles");

route.get("/", getVehicles);
route.get("/:plate", getVehicleByPlate);
route.patch("/:plate", patchDataVehicle);

module.exports = route;
