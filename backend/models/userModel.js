const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: { type: "String", required: true },
    email: { type: "String", unique: true, required: true },
    password: { type: "String", required: true },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { collection: "users" }
);

module.exports = mongoose.model("User", userSchema);
