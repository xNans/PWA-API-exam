

const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

// Lav express appp
const app = express()

// Håndtering af cors og middleware mellem frontend og backend - også kaldet BBL - buisness logic layer
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, HEAD, POST, PUT, DELETE"); // Jeg bruger js .fetch til at håndtere req
    res.header(
      "Access-Control-Allow-Headers",
      "auth-token, Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });


/* Database - promise. const uri definerer en connection til databasen - heri et promise. Hvis der er forbindelse, .then - vises success text
Hvis det ikke lykkedes .catch - fejlbesked - Resovle/reject */

// Promise
const uri = "mongodb+srv://admin:halløj123@cluster0.ryqo7mu.mongodb.net/";
mongoose.connect(uri, {
    //useNewUrlParser: true,
    //useUnifiedTopology: true
})
// Resolve
.then(() => {
    console.log("Fobindelse til mongoDB er oprettet!")
})
// Reject
.catch(err => console.log(err))

//.json læser og afvikler alt, inden det vises.
app.use(bodyParser.json())

// Routes
app.get("/", (req, res) => {
    res.send("Forside");
});


const TodosRoute = require("./routes/Todos");
app.use("/todos", TodosRoute);

// start server
app.listen(3000, () => {
    console.log("Listening at port 3000");
  });
  