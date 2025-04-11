require('dotenv').config();

const serve = require('./server');
const { sequelize } = require('./database/models');

const PORT = process.env.PORT || 8000;

(async () => {
    try {
        // console.log('Testing database connection...');
        // await sequelize.authenticate(); // Verifica la conexión antes de continuar
        // console.log('Database connection established.');

        // console.log('Running migrations...');
        // await sequelize.sync(); // Sincroniza los modelos con la base de datos
        // console.log('Migrations completed.');

        serve.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Error running migrations:', error);
        process.exit(1);
    }
})();