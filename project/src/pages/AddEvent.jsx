import React, { Component } from 'react'; 
import axios from 'axios';
import './AddEvent.css';
import Footer from './Footer';

class AddEvent extends Component {
   constructor(props) {
      super(props);
      this.state = {
         name:'',
         email:'',
         type:'',
         location:'',
         date:'',
         guest:'',
         budget:''
      }
   }
 
   // When value changes of the fields
   handleChange = (event) => {
      this.setState({ [event.target.name]: event.target.value });
   }
 
   // To add new employee when user submits the form
   handleSubmit = (event) => {
      event.preventDefault();
      const { name, email, type, location, date, guest, budget } = this.state;
      axios.post('http://localhost:4000/events/addEvents', {
         name: name,
         email: email,
         type: type,
         location: location,
         date: date,
         guest: guest,
         budget: budget,
      })
      .then((response) => {
         alert("Event Booked!!");
         console.log(response);
         this.props.history.push('/');
      })
      .catch((error) => {
         console.log(error);
      });
   }
 
   render() {
      return(
         <div>
         <div class="form-body" style={{background:"#FAF9F9"}}>
           <div class="row">
               <div class="form-holder">
                   <div class="form-content">
                       <div class="form-items" style={{backgroundColor:"#211527"}}>
                           <h3>Let's get this party started.</h3>
                           <p>Please fill out the form below</p>
                           <form class="requires-validation" noValidate onSubmit={this.handleSubmit}>
   
                               <div class="col-md-12">
                                  <input class="form-control" onChange={this.handleChange} type="text" name="name" placeholder="Name*"/>
                               </div>
   
                               <div class="col-md-12">
                                   <input class="form-control" onChange={this.handleChange} type="email" name="email" placeholder="Email*" />
                               </div>
                               
                               <div class="col-md-12">
                                  <input class="form-control" onChange={this.handleChange} type="text" name="type" placeholder="Event Type*"/>
                               </div>
   
                              <div class="row">
                              <div class="col-md-6">
                                  <input class="form-control" onChange={this.handleChange} type="text" name="location" placeholder="Event Location*"/>
                              </div>
                              <div class="col-md-6">
                              <input class="form-control" onChange={this.handleChange} type="text" name="date" placeholder="Event Date*"/>
                              </div>
                              </div>
   
                              <div class="col-md-12">
                                 <input class="form-control" onChange={this.handleChange} type="text" name="guest" placeholder="Estimated Guest Count*" />
                              </div>
   
                              <div class="col-md-12 pb-1">
                                 <input class="form-control" onChange={this.handleChange} type="text" name="budget" placeholder="Estimated Budget*"/>
                              </div>
                              
                               <div class="form-button mt-3">
                                   <button id="submit" type="submit">Book</button>
                               </div>
                           </form>
                       </div>
                   </div>
               </div>
           </div>
       </div>
       <Footer/>
       </div>
         );
 }
 }
 
 export default AddEvent;