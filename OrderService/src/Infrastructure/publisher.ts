import amqp from 'amqplib';
import { OrderDTO } from '../Domain/Entities/OrderDto';

export class Connect 
{
    async connectRMQ(data: OrderDTO)
    {
        const connection = await amqp.connect('amqp://localhost:5672');
        const channel = await connection.createChannel();

        const result = await channel.assertQueue("orders");

        channel.sendToQueue("orders", Buffer.from(JSON.stringify(data)));

        console.log("Result: " + JSON.stringify(data));

        channel.close();
    }

}