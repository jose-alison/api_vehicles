const vehicles = require("../database/vehicles");
const getDateNow = require("../services/getDateNow");

const getVehicles = (req, res) => {
    console.log(req);
    res.status(200).json(vehicles);
};

const getVehicleByPlate = (req, res) => {
    const plateReq = req.params.plate;
    const vehicleData = vehicles.find((vehicle) => vehicle.plate === plateReq);

    if (vehicleData) {
        return res.status(200).json(vehicleData);
    } else {
        return res.status(404).json({ message: "Vehicle not found" });
    }
};

const patchDataVehicle = (req, res) => {
    const {
        plate,
        brand,
        model,
        color,
        manufacturingYear,
        modelYear,
        purchaseValue,
        fipeTableValue,
        purchaseDate
    } = req.body;
    const plateReq = req.params.plate;
    const indexVehicle = vehicles.findIndex(
        (vehicle) => vehicle.plate === plateReq
    );
    const Registeredplate = vehicles.findIndex(
        (vehicle) => vehicle.plate === plate
    );
    const target = vehicles[indexVehicle];

    if (indexVehicle >= 0) {
        const dataLog = {
            operation: "modification",
            date: getDateNow(),
            status: "unmodified",
            plate: false,
            brand: false,
            color: false,
            manufacturingYear: false,
            modelYear: false,
            purchaseValue: false
        };

        if (plate) {
            if (Registeredplate >= 0) {
                dataLog.push();
                return res
                    .status(400)
                    .json({ message: "License plate registered" });
            } else {
                target.plate = plate;
            }
        }
        if (brand) {
            target.brand = brand;
        }
        if (model) {
            target.model = model;
        }
        if (color) {
            target.color = color;
        }
        if (manufacturingYear) {
            target.manufacturingYear = manufacturingYear;
        }
        if (modelYear) {
            target.modelYear = modelYear;
        }
        if (purchaseValue) {
            target.purchaseValue = purchaseValue;
        }
        if (fipeTableValue) {
            target.fipeTableValue = fipeTableValue;
        }
        if (purchaseDate) {
            target.purchaseDate = purchaseDate;
        }
    } else {
        return res.status(404).json({ message: "Vehicle not found" });
    }
};

module.exports = {
    getVehicles,
    getVehicleByPlate,
    patchDataVehicle
};
