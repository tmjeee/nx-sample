import 'express-async-errors';
import express from 'express';
import * as routes from './routes';

const app = express();

routes.init(app);


const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
