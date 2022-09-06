const express = require("express");
const {
  registerUser,
  loginUser,
  searchUsers,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.route("/").get(protect, searchUsers);
router.route("/register-user").post(registerUser);
router.post("/login", loginUser);

module.exports = router;
