const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");

app.use(cors());
const port = 4050;

// hotal crud operation
const {hotalroutes} = require('../Backend/Routes/Hotal/Hotelroutes');

app.use("/", hotalroutes)

// Menu item crud operation
const {menuroutes} = require('../Backend/Routes/Menu/Menuroutes');

app.use("/", menuroutes);

app.listen(port, (err, res) =>{
    console.log(`server is connected on port http://localhost:${port}`);
})