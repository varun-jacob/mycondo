require("dotenv").config();
const express = require('express');
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8080;
const BACKEND_URL = process.env.BACKEND_URL;

const condosRoutes = require('./routes/condosRoute');
const residentsRoutes = require('./routes/residentsRoute');
const amenitiesRoutes = require('./routes/amenitiesRoute');
const bookingsRoutes = require('./routes/bookingsRoute');

//middleware to enable CORS
app.use(cors());

//middleware to parse req.body
app.use(express.json());

// all condos routes
app.use('/condos', condosRoutes);

// all residents routes
app.use('/residents', residentsRoutes);

// all amenities routes
app.use('/amenities', amenitiesRoutes);

// all bookings routes
app.use('/bookings', bookingsRoutes);

app.listen(PORT, () => {
  console.log(`running at ${BACKEND_URL}${PORT}`);
});