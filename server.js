const path = require('path');
const express  = require('express');
const dotenv = require('dotenv');
const connectDB =  require('./config/db');

dotenv.config({path: './config/.env'});
connectDB();

const app = express();
const transactions = require('./routes/transaction');
app.use(express.json());
app.use( '/api/v1/transactions', transactions);

const PORT = process.env.PORT || 5000;

app.listen(PORT,console.log(`server running on port: ${PORT}`));