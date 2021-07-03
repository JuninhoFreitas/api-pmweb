import { Request, Response } from 'express';
import ListOrdersService from '../services/ListOrdersService';

export default class OrdersController {
  public async list(request: Request, response: Response): Promise<Response> {
    const { startDate, endDate } = request.body;
    const listOrders = new ListOrdersService();
    const orders = await listOrders.execute({ startDate, endDate });
    let count = 0;
    let revenue = 0;
    let quantity = 0;

    orders.map(function (data) {
      count++;
      revenue = revenue + Number(data.price);
      quantity = quantity + data.quantity;
    });
    const averageRetailPrice = revenue / quantity;
    const averageOrderValue = revenue / count;
    const result = {
      count: count,
      revenue: Number(revenue.toFixed(2)),
      quantity: quantity,
      averageRetailPrice: Number(averageRetailPrice.toFixed(2)),
      averageOrderValue: Number(averageOrderValue.toFixed(2)),
    };
    const orderResult = await {
      success: true,
      data: {
        result,
      },
    };

    return response.json(orderResult);
  }
}
