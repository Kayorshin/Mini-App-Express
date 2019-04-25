const verifyQuery = (req, res, next) => {
  if (
    req.query.age === undefined ||
    req.query.age === "" ||
    isNaN(parseInt(req.query.age))
  ) {
    return res.redirect("/");
  } else if (
    req.route.path === "/minor" &&
    (req.query.age < 1 || req.query.age > 17)
  ) {
    return res.redirect("/");
  } else if (req.route.path === "/major" && req.query.age < 18) {
    return res.redirect("/");
  }

  return next();
};

module.exports = verifyQuery;
