// server.js
const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

// Models
const {Pump, Tank, Nozzle, Attendant, POS, QR, Loyalty, CreditCustomer, TankTruck, Attendance, Sale, Inspection} = require('./models');

// Routes
app.use('/api/config', require('./routes/config'));
app.use('/api/entry', require('./routes/entry'));
app.use('/api/assign', require('./routes/assign'));
app.use('/api/reports', require('./routes/reports'));
app.use('/api/inspection', require('./routes/inspection'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
