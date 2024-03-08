import { OrderDTO } from "../../Domain/Entities/OrderDto";

export class OrderService {
  async createNewOrder(orderData: OrderDTO): Promise<void> {

    console.log("Order data:", orderData);

    return Promise.resolve();
  }
}