const cookieSession = require("cookie-session");
const passport = require("passport");
const cors = require("cors");
const express = require("express");
const app = express();
const passportSetup = require("./passport");
const authRoute = require("./routes/auth");


app.use(cookieSession({
    name: "session",
    keys: ["lama"],
    maxAge: 24 * 60 * 60 * 1000,   
}));

app.use(passport.initialize())
app.use(passport.session())



app.use(
    cors({
        origin: "http://localhost:3000",
        methods: "GET, POST, PUT, DELETE",
        credentials: true,
    })
); 

app.use("/auth", authRoute);

app.listen("5000", ()=>{
    
    console.log("Server is running!!!");
});