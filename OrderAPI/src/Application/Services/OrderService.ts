import { OrderDTO } from "../../Domain/Entities/OrderDto";
import { Connect } from "../../Infrastructure/publisher";

export class OrderService {
  async createNewOrder(orderData: OrderDTO): Promise<void> {
    const publisher = new Connect();

    publisher.connectRMQ(orderData);

    return Promise.resolve();
  }
}