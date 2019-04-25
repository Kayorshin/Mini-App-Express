require("dotenv").config();
const express = require("express");
const routes = require("./routes");
const nunjucks = require("nunjucks");

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(routes);
app.use("/static", express.static(`${__dirname}/public`));

nunjucks.configure("./src/views", {
  autoescape: true,
  express: app,
  watch: true
});

app.set("view engine", "njk");

app.listen(process.env.PORT, () => console.log(`Server listening on port ${process.env.PORT}...`));
