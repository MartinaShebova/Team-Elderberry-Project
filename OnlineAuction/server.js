'use strict';

const port = parseInt(process.env.PORT, 10) || 3001;

const app = require('./config');


app.listen(port, () => console.log(`Magic happening at http://localhost:${port}`));