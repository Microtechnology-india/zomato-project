const express = require("express");

const hotalroutes = express.Router()
const {get, post, update, destroy} = require("../../Controler/Hotal/Hotal");


hotalroutes.get("/hotal", get);
hotalroutes.post("/hotal", post);
hotalroutes.put("/hotal/:h_id", update);
hotalroutes.delete("/hotal/:h_id", destroy);

module.exports = {hotalroutes};