import { Request, Response } from "express";
import { OrderService } from "../../Application/Services/OrderService";
import { OrderDTO } from "../../Domain/Entities/OrderDto";

export class OrderController
{
    async createNewOrder(req: Request, res: Response)
    {
        const orderService = new OrderService();

        if(req.body instanceof OrderDTO)
        {
            res.status(404).send("Order cannot be created! Some itens must be missing!");
        }
 
        await orderService.createNewOrder(req.body);

        return res.status(200).send("Order was created");
    }
}