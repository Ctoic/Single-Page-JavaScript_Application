const express  = require("express");
const path = require("path");

const app = express();

app.use("/static", express.static(path.resolve(__dirname,"frontend", "static")));
app.get("/*", (req, res) => {
    res.send(path.resolve("frontend", "index.html"));

});


app.listen(process.env.PORT || 5060 , () => console.log("Server is running on port 5060"));
