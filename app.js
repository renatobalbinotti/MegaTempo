const express = require('express')

const app = express();

app.use(express.static(__dirname + "/src"))
app.use(express.static(__dirname + "/src/api"))
app.use(express.static(__dirname + "/src/controller"))
app.use(express.static(__dirname + "/src/css"))
app.use(express.static(__dirname + "/src/js"))
app.use(express.static(__dirname + "/src/repository"))

app.get("/", function(req, res){

    res.sendFile(__dirname + "/src/index.html")
})

app.listen(8080);