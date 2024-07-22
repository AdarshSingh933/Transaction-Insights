const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

const initDBRoute = require('./routes/initDBRoute');
const transactionsRoute = require('./routes/transactionsRoute');
const statisticsRoute = require('./routes/statisticsRoute');
const barChartRoute = require('./routes/barChartRoute');
const pieChartRoute = require('./routes/pieChartRoute');
const combinedRoute = require('./routes/combinedRoute');

const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/init-db', initDBRoute);
app.use('/api/transactions', transactionsRoute);
app.use('/api/statistics', statisticsRoute);
app.use('/api/bar-Chart', barChartRoute);
app.use('/api/pie-Chart', pieChartRoute);
app.use('/api/combined', combinedRoute);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
