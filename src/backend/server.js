const express = require("express");
const pg = require('pg');
const app = express();
var cors = require("cors");
app.use(cors());
app.use(express.json);

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    databse: "children",
    password: "R0shanJ0y1l",
    port: 5432
})


app.post("/getChild",async (req, res) => {
    const name = req.body.name;
    const age = req.body.age;

    const result = db.query(
        "INSERT INTO children (name, age) VALUES ($1, $2)",
        [name, age]
    );
    console.log(result)
    res.render("done")
});

// app.post("/createChild", async (req, res) => {
//     const child = req.body;
//     const newChild = new childModel(child);
//     await newChild.save();

//     res.json(child);
// })

app.listen(3001, () => {
    console.log("server is running on port 3001");
})