require('dotenv').config();

module.exports = {
  development: {
    use_env_variable: 'DATABASE_URL', // Corregido: use_env_variable
    dialect: 'mysql',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // Permitir conexiones SSL sin verificación estricta
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