require('dotenv').config();
const connection = require('./database/connection');
const express=require('express');
const app=express();
const cors=require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

 const userRoutes = require('./routes/users');
 const projectRoutes = require('./routes/projects'); 
 const educationRoutes = require('./routes/education');
// const cafeteriaRoutes = require('./routes/cafeteriaRoute');
// const eventsRoutes = require('./routes/eventRoute');
// const bookingsRoutes = require('./routes/bookingRoute');
// const mailRoutes = require('./routes/mailRoute');
 
 app.use('/users', userRoutes);
 app.use('/projects', projectRoutes); 
 app.use('/education', educationRoutes);
// app.use('/cafeteria', cafeteriaRoutes);
// app.use('/events', eventsRoutes);
// app.use('/bookings', bookingsRoutes);
// app.use('/mail', mailRoutes);


app.listen(process.env.PORT,()=>{
    connection.checkConnection();
    console.log(`server is running on port:${process.env.PORT}`)
})