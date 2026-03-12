//Create mini-express app(Seperate route)
import exp from "express";
import { productModel } from "../models/ProductModel.js";
import { verifyToken } from "../middlewares/verifyToken.js";
export const productApp = exp.Router();

//DEFINE PRODUCT REST API ROUTES
//Product login
productApp.post("/auth", async (req, res) => {
  //get user cred obj from client
  const { productId} = req.body;
  //verify email
  let product = await productApp.findOne({ productId:productId });
  //if email not existed
  if (!product) {
    return res.status(400).json({ message: "Invalid email" });
  }
  //compare the passwords
  const result = await compare(productId, product.productId);
  //if password dont match
  if (!result) {
    res.status(400).json({ message: "Incorrect password" });
  }
  //if passwords are matched
  //Create token (Jsonwebtoken -jwt--jaat)
  const signedToken = sign({ productId: product.productId }, "abcdef", { expiresIn: '1h' });
  //store token as httpOnly cookie
  res.cookie("token", signedToken, {
    httpOnly: true,
    sameSite: "lax",
    secure: false,
  });
  //send res
  res.status(200).json({ message: "Login success", payload: user });
});

//Create new product
productApp.post("/products", async (req, res) => {
  //get new product from req
  const newProduct = req.body;
  //create new product document
  const newProductDocument = productModel(newProduct);
  //save the document
  const result = await newProductDocument.save();
  console.log("Result:", result);
  //send res
  res.status(201).json({ message: "Product Added" });
});

productApp.get("/products",verifyToken, async (req, res) => {
  //read all products from db
  const productList = await productModel.find();
  //send res
  res.status(200).json({ message: "Product list", payload: productList });
});

productApp.get("/products/:id",verifyToken, async (req, res) => {
  //get productId from req
  const pid = req.params.id;
  //find the product by id
  const productObj = await productModel.findOne({ productId: pid });
  //send res
  res.status(200).json({ message: "Product found", payload: productObj });
});

productApp.put("/products/:id",verifyToken, async (req, res) => {
  //get the id from req
  const pid = req.params.id;
  //get modified product from req
  const modifiedProduct = req.body;
  //find and update product by id
  const productObj = await productModel.findOneAndUpdate(
    { productId: pid },
    { $set: { ...modifiedProduct } },
    { new: true },
  );
  //send res
  res.status(200).json({ message: "Product modified", payload: productObj });
});

productApp.delete("/products/:id",verifyToken, async (req, res) => {
  //get id from req
  const pid = req.params.id;
  //find and delete product by id
  const productObj = await productModel.findOneAndDelete({ productId: pid });
  if (!productObj) {
    return res.status(404).json({ message: "Product not found" });
  }
  //send res
  res.status(200).json({ message: "Product Deleted", payload: productObj });
});
