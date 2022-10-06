require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts');

// express app
const app = express();

// middleware
app.use(express.json()); 

app.use((req,res,next) => {
	console.log(req.path, req.method);
	next();
});

// routes
// app.get('/', (req,res) => {
// 	res.json({mssg: 'Welcome to the app.'})
// })
app.use('/api/workouts', workoutRoutes);

// connect to the database
mongoose.connect(process.env.MONGO_URI)
	.then( () => {
		//  listen for request
		app.listen(process.env.PORT, () => {
			console.log('connected to DB & listening on port',process.env.PORT);
		});
	})
	.catch( e => {
		console.error(e);
	});