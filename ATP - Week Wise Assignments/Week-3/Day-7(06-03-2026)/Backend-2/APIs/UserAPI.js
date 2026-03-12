//Create mini-express app(Seperate route)
import exp from "express";
export const userApp = exp.Router();
import { userModel } from "../models/UserModel.js";
import { hash, compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import { verifyToken } from "../middlewares/verifyToken.js";
import {config} from 'dotenv'
const { sign } = jwt;

//DEFINE USER REST API ROUTES

//User login
userApp.post("/auth", async (req, res) => {
  //get user cred obj from client
  const { email, password } = req.body;
  //verify email
  let user = await userModel.findOne({ email: email });
  //if email not existed
  if (!user) {
    return res.status(400).json({ message: "Invalid email" });
  }
  //compare the passwords
  const result = await compare(password, user.password);
  //if password dont match
  if (!result) {
    res.status(400).json({ message: "Incorrect password" });
  }
  //if passwords are matched
  //Create token (Jsonwebtoken -jwt--jaat)
  const signedToken = sign({ email: user.email }, process.env.SECRET_KEY, {
    expiresIn: "1h",
  });
  //store token as httpOnly cookie
  res.cookie("token", signedToken, {
    httpOnly: true,
    sameSite: "lax",
    secure: false,
  });
  //send res
  res.status(200).json({ message: "Login success", payload: user });
});

//Create new User
userApp.post("/users", async (req, res) => {
  //get new user obj from req
  const newUser = req.body;
  //hash the password
  const hashedPassword = await hash(newUser.password, 10);
  //replace plain password with hashed password
  newUser.password = hashedPassword;
  //Create new user document
  const newUserDocument = new userModel(newUser);
  //save
  const result = await newUserDocument.save();
  console.log("result:", result);
  res.status(201).json({ message: "User Created" });
});
//Read all users(protected user)
userApp.get("/users", verifyToken, async (req, res) => {
  let userObj = req.user;
  //read all users from db
  const usersList = await userModel.find();
  //send res
  res.status(200).json({ message: "Users:", payload: usersList });
});
//Read User by Object id
userApp.get("/user", verifyToken, async (req, res) => {
  //read user email from req
  const emailOfUser = req.user?.email;
  //console.log(emailOfUser)
  //Read object id from req params

  //find user by id
  const userObj = await userModel
    .findOne({ email: emailOfUser })
    .populate("cart.product");
  //if user not found
  if (!userObj) {
    return res.status(404).json({ message: "User not found" });
  }

  //sedn res
  res.status(200).json({ message: "User: ", payload: userObj });
});
//Update a User by id
userApp.put("/users/:id", verifyToken, async (req, res) => {
  //get modified user from req
  const modifiedUser = req.body;
  const uid = req.params.id;
  const hashedPassword = await hash(modifiedUser.password, 10);
  modifiedUser.password = hashedPassword;
  //find user by id & update
  const updatedUser = await userModel.findByIdAndUpdate(
    uid,
    { $set: { ...modifiedUser } },
    { new: true, runValidators: true },
  );
  //send res
  res.status(200).json({ message: "User modified", payload: updatedUser });
});
//Delete a user by id
userApp.delete("/users/:id", verifyToken, async (req, res) => {
  //get id from req
  const uid = req.params.id;
  //find and delete user by id
  const deletedUser = await userModel.findOneAndDelete(uid);
  if (!deletedUser) {
    return res.status(404).json({ message: "User not found" });
  }
  //send res
  res.status(200).json({ message: "User Deleted", payload: deletedUser });
});

//add product to cart

//add product to cart
userApp.put("/cart/product-id/:pid", verifyToken, async (req, res) => {
  //get product id from url param
  const productId = req.params.pid;

  //Get current user details
  const emailOfUser = req.user?.email;

  //find user
  const user = await userModel.findOne({ email: emailOfUser });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  //check if product already exists in cart
  const productIndex = user.cart.findIndex(
    (item) => item.product.toString() === productId
  );

  if (productIndex !== -1) {
    //product exists → increment count
    user.cart[productIndex].count += 1;
  } else {
    //product does not exist → add new product
    user.cart.push({
      product: productId,
      count: 1,
    });
  }

  //save updated user
  await user.save();

  res.status(200).json({ message: "product added to the cart", payload: user.cart });
});

//userApp.get(path,verifyToken,req-handler)
