require('dotenv').config();

const serve = require('./server');

const PORT = process.env.PORT || 8333;

serve.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});