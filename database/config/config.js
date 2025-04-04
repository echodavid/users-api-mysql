require('dotenv').config();

module.exports = {
  development: {
    user_env_variable: 'DATABASE_URL',
    url: process.env.DATABASE_URL || 'postgres://localhost:5432/mydb',
    dialect: 'mysql',
  },
  test: {
    user_env_variable: 'TEST_DATABASE_URL',
    url: process.env.DATABASE_URL || 'postgres://localhost:5432/mydb',
    dialect: 'mysql',
  },
  production: {
    user_env_variable: 'PROD_DATABASE_URL',
    url: process.env.DATABASE_URL || 'postgres://localhost:5432/mydb',
    dialect: 'mysql',
  },
};