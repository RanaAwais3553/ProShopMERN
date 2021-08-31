import Order from "./models/orderModel.js";
import Product from "./models/productModel.js";
import User from "./models/userModel.js";
import colors from "colors";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import product from "./data/products.js";
import user from "./data/user.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(user);
    const adminUsers = createdUsers[0]._id;
    const sampleProducts = product.map((products) => {
      return { ...products, user: adminUsers };
    });
    await Product.insertMany(sampleProducts);
    console.log("data imported:".green.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    console.log("data Destroyed:".red.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};
if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
