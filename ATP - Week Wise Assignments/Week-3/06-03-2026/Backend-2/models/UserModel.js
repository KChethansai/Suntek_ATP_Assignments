import { Schema, model, Types } from "mongoose";

//Create cart Schema {product,count,}

const cartSchema = new Schema({
  product: {
    type: Types.ObjectId,
    ref: "product", //name of the product model
  },
  count: {
    type: Number,
    default: 1,
  },
});

//Create User Schema(username,password,email,age)

const userSchema = new Schema(
  {
    //structure of User resource
    username: {
      type: String,
      required: [true, "Username is reuired"],
      minLength: [4, "Username should be atleast 4 characters long"],
      maxLength: [6, "Username size exceeded 6 chars"],
    },
    password: {
      type: String,
      required: [true, "Password required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "Email already existed"],
    },
    age: {
      type: Number,
    },
    cart: [cartSchema],// {product:"",count:2}
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

//Generate UserModel
export const userModel = model("user", userSchema);
