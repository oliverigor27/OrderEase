import { Router } from "express";
import { OrderController } from "../Controllers/OrderController";

const route = Router();

const orderController = new OrderController();

route.post("/post-new-order", orderController.createNewOrder)

export default route;