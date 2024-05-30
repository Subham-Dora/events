import React, { Component } from 'react';
import axios from 'axios';
 
class EditEvent extends Component {
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
 
    componentDidMount = () => {
        this.getEventById();
    }
 
    // To get employee based on ID
    getEventById() {
        axios.get('http://localhost:4000/events/editEvents/' + this.props.match.params.id)
        .then((response) => {
            this.setState({
                name: response.data.name,
                email: response.data.email,
                type: response.data.type,
                location: response.data.location,
                date: response.data.date,
                guest: response.data.guest,
                budget: response.data.budget
            });
        })
        .catch((error) => {
            console.log(error);
        })
    }
 
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
 
    // To update the record on submit
    handleSubmit = (event) => {
        event.preventDefault();
        const { name, email, type, location, date, guest, budget } = this.state;
        axios.post('http://localhost:4000/events/updateEvents/' + this.props.match.params.id, {
            name: name,
            email: email,
            type: type,
            location: location,
            date: date,
            guest: guest,
            budget: budget,
        })
        .then((response) => {
            console.log(response);
            this.props.history.push('/');
        })
        .catch((error) => {
            console.log(error);
        });
 
    }
 
    render() {
        return(
           <div class="form-body">
             <div class="row">
                 <div class="form-holder">
                     <div class="form-content">
                         <div class="form-items" style={{backgroundColor:"#211527"}}>
                             <h3>Let’s get this party started.</h3>
                             <p>Please fill out the form below</p>
                             <form class="requires-validation" noValidate onSubmit={this.handleSubmit}>
     
                                 <div class="col-md-12">
                                    <input class="form-control" onChange={this.handleChange} type="text" name="name" placeholder="Name*" required />
                                 </div>
     
                                 <div class="col-md-12">
                                     <input class="form-control" onChange={this.handleChange} type="email" name="email" placeholder="Email*" required />
                                 </div>
                                 
                                 <div class="col-md-12">
                                    <input class="form-control" onChange={this.handleChange} type="text" name="type" placeholder="Event Type*" required />
                                 </div>
     
                                <div class="row">
                                <div class="col-md-6">
                                    <input class="form-control" onChange={this.handleChange} type="text" name="location" placeholder="Event Location*" required />
                                </div>
                                <div class="col-md-6">
                                <input class="form-control" onChange={this.handleChange} type="text" name="date" placeholder="Event Date*" required />
                                </div>
                                </div>
     
                                <div class="col-md-12">
                                   <input class="form-control" onChange={this.handleChange} type="text" name="guest" placeholder="Estimated Guest Count*" required />
                                </div>
     
                                <div class="col-md-12 pb-1">
                                   <input class="form-control" onChange={this.handleChange} type="text" name="budget" placeholder="Estimated Budget*" required />
                                </div>
                                
                                 <div class="form-button mt-3">
                                     <button id="submit" type="submit" class="btn btn-primary btn-lg">Update</button>
                                 </div>
                             </form>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
           );
   }
 }
 
 export default EditEvent;