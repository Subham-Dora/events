const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
 
 // List of columns for Events schema
 let Events = new Schema({
 name: {
 type: String
 },
 email: {
 type: String
 },
 type: {
 type: String
 },
 location: {
 type: String
 },
 date: {
 type: String
 },
 guest: {
 type: String   
 },
 budget: {
 type: String
 }
 },{
 collection: 'events'
 });
 
 module.exports = mongoose.model('Events', Events);