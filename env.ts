const database: object = {
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  user: process.env.DATABASE_USER,
  name: process.env.DATABASE_NAME,
};
console.log("🚀 ~ database:", database);
