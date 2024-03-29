import { connect } from 'amqplib';
import { KitchenService } from '../Application/Services/kitchenService';

// docker logs -f order_ease

export class Connect 
{
    private service: KitchenService;

    constructor() {

        this.service = new KitchenService;

        this.connectRMQ();
    }

    async connectRMQ()
    {
        try {
            const connection = await connect('amqp://localhost:5672');
            const channel = await connection.createChannel();
    
           await channel.assertQueue("orders");
    
            channel.consume("orders", message => {
                const result = JSON.parse(message.content.toString());
                
                KitchenService.KitchenConsumer(result);

                channel.ack(message);
            });
            console.log("Kitchen service is waiting for data!");
        } catch (error) {
            console.log(error);
        }
    }

}

function KitchenConsumer(result: any) {
    throw new Error('Function not implemented.');
}
