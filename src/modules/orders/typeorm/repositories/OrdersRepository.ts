import { EntityRepository, getRepository, Repository } from 'typeorm';
import Order from '../entities/Order';

@EntityRepository(Order)
export class OrdersRepository extends Repository<Order> {
  public async findByDate(
    StartDate: string,
    EndDate: string,
  ): Promise<Order | any> {
    const orders = await getRepository(Order)
      .createQueryBuilder('order')
      .where('order.order_date between :startDate', { startDate: StartDate })
      .andWhere(':endDate', { endDate: EndDate })
      .getMany();
    return orders;
  }
}
