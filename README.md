# Restaurant Order Command Microservice

This microservice is designed to handle restaurant orders using RabbitMQ as the message broker.

## Overview

The Restaurant Order Command Microservice is a component of a larger restaurant management system. Its main responsibility is to process incoming orders, handle the communication with the kitchen service, and manage the order status updates.

### Features

- **Order Creation**: Accepts incoming orders from clients.
- **Order Processing**: Sends order details to the kitchen service for preparation.
- **Order Status Updates**: Updates the status of orders and notifies clients.
- **RabbitMQ Integration**: Utilizes RabbitMQ for message queuing and communication.

## Technologies Used

- **Node.js**: Backend JavaScript runtime environment.
- **Express**: Web framework for Node.js.
- **RabbitMQ**: Message broker for handling communication between services.
- **MongoDB**: Database for storing order and customer information.

## Getting Started

To get a local copy of this microservice up and running, follow these steps:

### Prerequisites

- Node.js installed on your local machine
- RabbitMQ server running locally or accessible
- MongoDB instance running locally or accessible

### Installation

1. Clone this repository:
   ```sh
   git clone https://github.com/your_username/restaurant-order-command.git
   ```

2. Navigate to the project directory:
   ```sh
   cd OrderService
   ```

3. Install dependencies:
   ```sh
   npm install
   ```

4. Create a `.env` file in the root directory and configure the following environment variables:
   ```sh
   PORT=3000
   RABBITMQ_URL=amqp://localhost
   MONGODB_URI=mongodb://localhost/restaurant
   ```

### Running the Microservice

1. Start the microservice:
   ```sh
   npm start
   ```

2. The microservice will be running at `http://localhost:3000`.

## API Endpoints

- `POST /api/orders`: Create a new order.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
