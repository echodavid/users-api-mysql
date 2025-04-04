require('dotenv').config();

const serve = require('./server');
const { sequelize } = require('./database/models'); // Asegúrate de que este sea el path correcto a tus modelos

const PORT = process.env.PORT || 8000;

(async () => {
    try {
        console.log('Running migrations...');
        // Ejecuta las migraciones creadas con Sequelize CLI
        await sequelize.getQueryInterface().sequelize.query('SET FOREIGN_KEY_CHECKS = 0'); // Opcional: desactiva restricciones si es necesario
        await sequelize.sync(); // Sincroniza los modelos con la base de datos
        console.log('Migrations completed.');

        // Inicia el servidor después de completar las migraciones
        serve.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Error running migrations:', error);
        process.exit(1); // Salir si hay un error
    }
})();