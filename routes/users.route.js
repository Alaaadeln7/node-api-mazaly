const express = require("express");

const router = express.Router();

// import controllers
const {
  getAllUsers,
  register,
  login,
} = require("../controllers/users.controller");

router.route("/").get(getAllUsers);

router.route("/register").post(register);

router.route("/login").post(login);

module.exports = router;
