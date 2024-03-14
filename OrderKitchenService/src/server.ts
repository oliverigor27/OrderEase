import express from 'express';
import { Connect } from './Infrastructure/consumer';

const app = express();

const connectQueue = new Connect();

app.use(express.json());
app.use(connectQueue.connectRMQ);


app.listen(3001, () => console.log("Kitchen service is running at port 3001!"));