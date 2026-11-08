const express = require("express");
const jsonServer = require("json-server");
const db = require("./db.json");

const app = express();

const middleware = jsonServer.defaults({
  readOnly: true,
});
const router = jsonServer.router(db);

app.use(middleware);
app.use(router);

module.exports = app;
