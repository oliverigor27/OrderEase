import { connect } from 'amqplib';

// docker logs -f order_ease

export class Connect 
{
    constructor() {
        this.connectRMQ();
    }

    async connectRMQ()
    {
        try {
            const connection = await connect('amqp://localhost:5672');
            const channel = await connection.createChannel();
    
            const result = await channel.assertQueue("orders");
    
            channel.consume("orders", message => {
                const result = JSON.parse(message.content.toString());
                console.log(result);
            });
    
            console.log("Kitchen service is waiting for data!");
        } catch (error) {
            console.log(error);
        }
    }

}