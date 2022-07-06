const express = require('express');
const cors = require('cors');
let { mongoose } = require('./db');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors({origin: '*'}));
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})