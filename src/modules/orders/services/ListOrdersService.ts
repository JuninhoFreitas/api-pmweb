import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Order from '../typeorm/entities/Order';
import { OrdersRepository } from '../typeorm/repositories/OrdersRepository';

interface IRequest {
  startDate: string;
  endDate: string;
}

class ListOrdersService {
  public async execute({ startDate, endDate }: IRequest): Promise<Order[]> {
    const ordersRepository = getCustomRepository(OrdersRepository);

    const orders = ordersRepository.findByDate(startDate, endDate);

    if (!orders) {
      throw new AppError('Pedidos não encontrados neste intervalo de data.');
    }

    return orders;
  }
}

export default ListOrdersService;
