import { Router } from 'express';
import ordersRouter from '@modules/orders/routes/orders.router';

const routes = Router();

routes.use('/orders', ordersRouter);

export default routes;
