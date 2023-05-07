import express from "express";
import inventoryController from "../controller/inventoryController.js";
import verifyToken from "../middleware/verifyToken.js";
const router = express.Router();

router.use(verifyToken);
router.route("/").get(inventoryController.getAll);
router.route("/filter").get(inventoryController.filter);

export default router;
