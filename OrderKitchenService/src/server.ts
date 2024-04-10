import express from 'express';
import { Connect } from './Infrastructure/consumer';
import route from './Presentation/Routes/route';

const app = express();

const connectQueue = new Connect();

app.use(express.json());
app.use(connectQueue.connectRMQ);
app.use(route);


app.listen(3001, () => console.log("Kitchen service is running at port 3001!"));