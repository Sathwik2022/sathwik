const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Item = require("../Hotel/models/hotel");
const port = 3000;

const Routes = require("./routes/hotel");

const app = express();

async function run() {
    mongoose.connect("mongodb://127.0.0.1:27017/Hotel", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("connected to database");
    });

    const item = await Item.create({ name: 'Rice' }, { name: 'Samber' }, { name: 'Palya' }, { name: 'Curd' });
}
run();

app.use(cors());
app.use(bodyParser.json());
app.use("/api", Routes);

app.listen(port, () => {
    console.log(`Listening to http://localhost:${port}`);
});