/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
require('dotenv/config');

export default {
  host: process.env.DATABASE_HOSTNAME,
  type: 'postgres',
  port: 5432,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DATABASE,
  entities: ['./src/modules/**/typeorm/entities/*.ts'],
  migrations: ['./src/shared/typeorm/migrations/*.ts'],
  cli: {
    migrationsDir: './src/shared/typeorm/migrations',
  },
};
