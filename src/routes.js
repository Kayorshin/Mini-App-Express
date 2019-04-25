const express = require("express");
const verifyQuery = require("./services/verifyQuery");

const routes = express.Router();

routes.get("/", (req, res) => res.render("form"));

routes.post("/check", (req, res) => {
  if (req.body.age >= 18) {
    return res.redirect(`/major/?age=${req.body.age}`);
  }

  return res.redirect(`/minor/?age=${req.body.age}`);
});

routes.get("/major", verifyQuery, (req, res) =>
  res.render("age", {
    major: true,
    age: req.query.age > 100 ? "mais de 100" : req.query.age
  })
);

routes.get("/minor", verifyQuery, (req, res) =>
  res.render("age", { major: false, age: req.query.age })
);

module.exports = routes;
