import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateOrders1625261949565 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'orders',
        columns: [
          {
            name: 'order_id',
            type: 'varchar',
          },
          {
            name: 'order_date',
            type: 'timestamp',
          },
          {
            name: 'product_sku',
            type: 'varchar',
          },
          {
            name: 'SIZE',
            type: 'varchar',
          },
          {
            name: 'color',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'quantity',
            type: 'int',
          },
          {
            name: 'price',
            type: 'decimal',
            precision: 10,
            scale: 2,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('orders');
  }
}
