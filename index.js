require('dotenv').config();

const serve = require('./server');

const PORT = process.env.PORT || 8000;

serve.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

(async () => {
    try {
        console.log('Running migrations...');
        await sequelize.sync(); // O usa sequelize.getQueryInterface().migrate() si usas migraciones específicas
        console.log('Migrations completed.');

        serve.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Error running migrations:', error);
        process.exit(1); // Salir si hay un error
    }
})();