const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();



const dbUrl = "mongodb+srv://Ankit9442:Ankitrawat9442@cluster0.za0hxos.mongodb.net/SportsPortal?retryWrites=true&w=majority" ; //  ||  process.env.LOCAL_DB_CONNECT;
const authRoute = require("./routes/auth");
const bookRoute = require("./routes/booking");

const mongoOpts = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
};

app.use(cors());
app.use(express.json());
mongoose.connect(
  
    dbUrl,
    mongoOpts,
    (err) => {
        if (err) console.log(err);
        else console.log("mongodb is connected");
        
       
    }
);



app.use("/api/user", authRoute);
app.use("/api/booking", bookRoute);

app.listen(process.env.PORT ||  4000, () => console.log("server is running 4000"));