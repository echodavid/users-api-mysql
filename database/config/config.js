require('dotenv').config();

module.exports = {
  development: {
    use_env_variable: 'DATABASE_URL', 
    dialect: 'mysql',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, 
      },
    },
  },
  test: {
    use_env_variable: 'DATABASE_URL', // Corregido: use_env_variable
    dialect: 'mysql',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
  production: {
    use_env_variable: 'DATABASE_URL', // Corregido: use_env_variable
    dialect: 'mysql',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};