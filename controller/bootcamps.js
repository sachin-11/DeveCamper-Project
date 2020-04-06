const ErrorResponse = require("../utils/errorResponse");
const Bootcamp = require("../models/Bootcamps");
//desc Get all bootcamps
//@route GET/api/v1/bootcamps
//@access Public

exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();
    res.status(200).json({ success: true, data: bootcamps });
  } catch (err) {
    next(err);
  }
};

//desc Get single bootcamps
//@route GET/api/v1/bootcamps/:id
//@access Public

exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);
    if (!bootcamp) {
      return next(
        new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
      );
    }
    res.status(200).json({ success: true, data: bootcamp });
  } catch (err) {
    next(err);
  }
};

//desc Create bootcamps
//@route POST/api/v1/bootcamps
//@access Private

exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({
      success: true,
      data: bootcamp,
    });
  } catch (err) {
    next(err);
  }
};

//desc update bootcamps
//@route PUT/api/v1/bootcamps
//@access Private

exports.updateBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!bootcamp) {
      return res.status(404).json({ success: false });
    }
    res.status(201).send({ success: true, data: bootcamp });
  } catch (err) {
    next(err);
  }
};

//desc DELETE bootcamps
//@route POST/api/v1/bootcamps
//@access Private

exports.deleteBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    if (!bootcamp) {
      return res.status(404).json({ success: false });
    }
    res.status(200).json({ success: false, data: bootcamp });
  } catch (err) {
    next(err);
  }
};
