import express from "express";
import orderController from "../controller/orderController.js";
import verifyToken from "../middleware/verifyToken.js";
const router = express.Router();

router.use(verifyToken);
router.route("/filter").get(orderController.filterDes);

export default router;
