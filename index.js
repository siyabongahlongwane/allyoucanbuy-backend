const express = require('express');
const cors = require('cors');
let { mongoose } = require('./db');
const app = express();
const port = process.env.PORT || 3000;
const userController = require('./controllers/user');
app.use(cors({origin: '*'}));
app.use(express.urlencoded({extended: true})); //Replaced body-parser
app.use(express.json());
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})

app.use('/users', userController)