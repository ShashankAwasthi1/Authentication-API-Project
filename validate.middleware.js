const validate = (fields) => {
  return (req, res, next) => {
    const missingFields = fields.filter((field) => !req.body[field]);

    if (missingFields.length > 0) {
      res.status(400);
      return next(new Error(`${missingFields.join(", ")} is required`));
    }

    if (req.body.email && !/^\S+@\S+\.\S+$/.test(req.body.email)) {
      res.status(400);
      return next(new Error("Valid email is required"));
    }

    if (req.body.password && req.body.password.length < 6) {
      res.status(400);
      return next(new Error("Password must be at least 6 characters"));
    }

    next();
  };
};

module.exports = validate;
