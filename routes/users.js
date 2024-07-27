const express = require('express');
const router = express.Router();
const {
  register,
  login,
  findOne,
  getAll,
  deleteUser,
  updateUser,
} = require("../controllers/users");
//const { authenticated } = require("../middlewares/auth");

router.get("/getAll", getAll);
router.get("/getById/:Id", findOne);
router.post("/login", login);
router.post("/register", register);
router.delete("/delete/:Id", deleteUser);
router.put("/update/:Id", updateUser);



module.exports = router;