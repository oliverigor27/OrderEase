import { Router } from "express";
import { KitchenController } from "../Controllers/KitchenController";

const route = Router();

const kitchenController = new KitchenController();

route.get("/show-orders", kitchenController.getOrders);

export default route;