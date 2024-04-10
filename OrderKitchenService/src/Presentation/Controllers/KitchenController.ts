import { Request, Response } from "express";
import { KitchenService } from "../../Application/Services/kitchenService";

export class KitchenController
{
    private kitchenService;

    constructor() {
        this.kitchenService = new KitchenService();
    }

    async getOrders(req: Request, res: Response)
    {
        const result = await this.kitchenService.GetOrders();
        const newResult = JSON.stringify(result);

        return res.status(200).json(newResult);
    }
}