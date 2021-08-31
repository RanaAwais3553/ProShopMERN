import bcrypt from "bcryptjs";

const User = [
  {
    name: "Awais",
    email: "ranaawais3553@gmail.com",
    password: bcrypt.hashSync("123456"),
    isAdmin: true,
  },
  {
    name: "Saad",
    email: "saad3553@gmail.com",
    password: bcrypt.hashSync("123456"),
  },
  {
    name: "Atif",
    email: "atif3553@gmail.com",
    password: bcrypt.hashSync("123456"),
  },
];
export default User;
