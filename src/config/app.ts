import 'dotenv/config';

export const server = {
  port: process.env.PORT,
  host: process.env.HOST
};

export const datBase = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
};
