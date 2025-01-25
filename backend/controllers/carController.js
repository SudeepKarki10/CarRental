const Car = require("../models/Car");

// @desc    Get all cars
// @route   GET /api/cars
// @access  Public
const getCars = async (req, res) => {
  try {
    const cars = await Car.find({});
    res.json(cars);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc    Get single car
// @route   GET /api/cars/:id
// @access  Public
const getCarById = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (car) {
      res.json(car);
    } else {
      res.status(404).json({ message: "Car not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc    Create a car
// @route   POST /api/cars
// @access  Private/Admin
const createCar = async (req, res) => {
  try {
    const car = new Car({
      name: req.body.name,
      type: req.body.type,
      image: req.body.image,
      price: req.body.price,
      fuelType: req.body.fuelType,
      transmission: req.body.transmission,
      seats: req.body.seats,
    });

    const createdCar = await car.save();
    res.status(201).json(createdCar);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getCars,
  getCarById,
  createCar,
};
