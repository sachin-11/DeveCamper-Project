//desc Get all bootcamps
//@route GET/api/v1/bootcamps
//@access Public

exports.getBootcamps = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: "Show all bootcamp", hello: req.hello });
};

//desc Get single bootcamps
//@route GET/api/v1/bootcamps/:id
//@access Public

exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `Get single bootcamp ${req.params.id}` });
};

//desc Create bootcamps
//@route POST/api/v1/bootcamps
//@access Private

exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, message: "Create bootcamp" });
};

//desc update bootcamps
//@route PUT/api/v1/bootcamps
//@access Private

exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `Update Bootcamp ${req.params.id}` });
};

//desc DELETE bootcamps
//@route POST/api/v1/bootcamps
//@access Private

exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `Delete Bootcamp ${req.params.id}` });
};
