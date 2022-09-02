const express = require("express");

const menuroutes = express.Router();

const { get, post, update, destroy } = require("../../Controler/Menu/Menu");


menuroutes.get("/menu", get);
menuroutes.post("/menu", post);
menuroutes.put("/menu/:m_id", update);
menuroutes.delete("/menu/:m_id", destroy);

module.exports = {menuroutes};
