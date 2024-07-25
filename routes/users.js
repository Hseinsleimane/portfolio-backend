const express = require("express");
const router = express.Router();
const {
  register,
  login,
  findOne,
  getAll,
  deleteUser,
  updateUser,
} = require("../controllers/users");

// Routes
router.post("/register", register);
router.post("/login", login);
router.get("/", getAll);
router.get("/:Id", findOne);
router.put("/:Id", updateUser);
router.delete("/:Id", deleteUser);

module.exports = router;
