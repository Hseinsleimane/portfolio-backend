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
 const certificateRoutes = require('./routes/certificates');
 const experienceRoutes = require('./routes/experience');
 const skillRoutes = require('./routes/skills');
 
 app.use('/users', userRoutes);
 app.use('/projects', projectRoutes); 
 app.use('/education', educationRoutes);
 app.use('/cerificates', certificateRoutes);
 app.use('/experience', experienceRoutes);
 app.use('/skills', skillRoutes);


app.listen(process.env.PORT,()=>{
    connection.checkConnection();
    console.log(`server is running on port:${process.env.PORT}`)
})

app.get('/', (req, res) => {
    res.send('hi yara!');
  });