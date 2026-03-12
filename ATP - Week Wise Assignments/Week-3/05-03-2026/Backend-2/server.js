//Create express app
import exp from "express";
import { connect } from "mongoose";
import { userApp } from "./APIs/UserAPI.js";
import { productApp } from "./APIs/ProductAPI.js";
import cookieParser from 'cookie-parser'
import {config} from 'dotenv'
config() //process.env.PORT,process.end.DB_URL
const app = exp();

//add body parser middleware
app.use(exp.json());
//add cookieParser middleware
app.use(cookieParser())
//forward req to UserApp if path starts with /user-api
app.use("/user-api", userApp);
app.use("/product-api", productApp);
const port=process.env.PORT || 4000

//connect to DB server
async function connectDB() {
  try {
    await connect(process.env.DB_URL);
    console.log("DB connection is successful");
    //start server
    app.listen(port, () => console.log(`server on port 4000`));
  } catch (err) {
    console.log("Error in DB connection:", err);
  }
}
connectDB();

//error handling middleware
app.use((err, req, res, next) => {
  console.log(err.name);
  console.log(err);
  //ValidationError
  if (err.name === "ValidationError") {
    return res
      .status(400)
      .json({ message: "Error occured", error: err.message });
  }
  //CastError
  if (err.name === "CastError") {
    return res
      .status(400)
      .json({ message: "Error occured", error: err.message });
  }
  //Send server side errors
  res.status(500).json({ message: "Error occured", error: err.message });
});
