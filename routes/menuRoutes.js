const express = require("express");
const router = express.Router();
const {
  getMenu,
  addMenuItem,
  updateMenuItem,
  deleteMenuItem,
} = require("../controllers/menuController");
const { verifyToken, checkRole } = require("../middlewares/authMiddleware");

router.get("/", verifyToken, getMenu);
router.post("/", verifyToken, checkRole("canteen"), addMenuItem);
router.put("/:id", verifyToken, checkRole("canteen"), updateMenuItem);
router.delete("/:id", verifyToken, checkRole("canteen"), deleteMenuItem);

module.exports = router;
