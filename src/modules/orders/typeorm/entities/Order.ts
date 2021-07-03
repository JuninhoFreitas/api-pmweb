import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('orders')
class Order {
  @PrimaryColumn()
  order_id: string;

  @Column()
  order_date: Date;

  @Column()
  product_sku: string;

  @Column()
  SIZE: string;

  @Column()
  color: string;

  @Column()
  quantity: number;

  @Column()
  price: number;
}

export default Order;
