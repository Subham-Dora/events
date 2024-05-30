// Importing important packages
const express = require('express');
 
// Using express and routes
const app = express();
const eventsRoute = express.Router();

// Events module which is required and imported
let eventsModel = require('../Model/Events');

// To Get List Of Events
eventsRoute.route('/').get(function (req, res) {
eventsModel.find(function (err, events) {
if (err) {
console.log(err);
}
else {
res.json(events);
}
});
});

// To Add New Event
eventsRoute.route('/addEvents').post(function (req, res) {
let events = new eventsModel(req.body);
events.save()
.then(game => {
res.status(200).json({ 'events': 'Event Added Successfully' });
})
.catch(err => {
res.status(400).send("Something Went Wrong");
});
});

// To Get Employee Details By Employee ID
eventsRoute.route('/editEvents/:id').get(function (req, res) {
let id = req.params.id;
eventsModel.findById(id, function (err, events) {
res.json(events);
});
});

// To Update The Employee Details
eventsRoute.route('/updateEvents/:id').post(function (req, res) {
eventsModel.findById({ _id: req.params.id }, function (err, events) {
if (!events)
return next(new Error('Unable To Find Event With This Id'));
else {
events.name = req.body.name;
events.email = req.body.email;
events.type = req.body.type;
events.location = req.body.location;
events.date = req.body.date;
events.guest = req.body.guest;
events.budget = req.body.budget;

events.save().then(emp => {
res.json('Events Updated Successfully');
})
.catch(err => {
res.status(400).send("Unable To Update Events");
});
}
});
});

// To Delete The Employee
eventsRoute.route('/deleteEvents/:id').get(function (req, res) {
eventsModel.findByIdAndRemove({ _id: req.params.id }, function (err, events) {
if (err) res.json(err);
else res.json('Event Deleted Successfully');
});
});

module.exports = eventsRoute;