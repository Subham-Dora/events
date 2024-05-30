import React, { Component } from 'react';
import axios from 'axios';
// To use routing functionalities
import { Link } from 'react-router-dom';
import EventService from './Services.js';
import Footer from './Footer.jsx';

class Events extends Component {
 
    constructor(props) {
        super(props);
        this.EventService = new EventService();
        this.state = {
            events: []
        }
        this.deleteEvent = this.deleteEvent.bind(this);
    }
 
    componentDidMount = () => {
        this.getEventList();
    }
 
    // To get all the employees
    getEventList() {
        axios.get('http://localhost:4000/events')
        .then((response) => {
            console.log(response);
            this.setState({
                events: response.data
            });
        })
        .catch((error) => {
            console.log(error);
        })
    }
 
    // To delete any employee
    deleteEvent(eventid) {
        this.EventService.deleteEvent(eventid);
        this.getEventList();
    }
 
    render() {
        const { events } = this.state;
        return (
            <div>
            <div className='table-responsive-md text-center px-5 py-5' style={{background:"#FAF9F9",color:"#211527"}}>
            <h1 class="py-5" style={{fontSize:"60px",fontWeight:"700"}}>Booked <span style={{color:"#D53831"}}>Events</span></h1>

                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Type</th>
                            <th scope="col">Location</th>
                            <th scope="col">Date</th>
                            <th scope="col">Guest Count</th>
                            <th scope="col">Budget</th>
                            <th colSpan={2} scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            events && events.map((events, i) => {
                                return (
                                <tr>
                                    <td>{events.name}</td>
                                    <td>{events.email}</td>
                                    <td>{events.type}</td>
                                    <td>{events.location}</td>
                                    <td>{events.date}</td>
                                    <td>{events.guest}</td>
                                    <td>{events.budget}</td>
                                    <td>
                                    <button style={{fontSize:"15px",background:"#211527",borderRadius:"0px 10px",padding:"5px 10px",border:"none"}}><Link to={ "/EditEvent" + events._id } style={{textDecoration:"none",color:"#FAF9F9"}}className="" >Edit</Link></button>
                                    </td>
                                    <td>
                                        <button onClick={() => this.deleteEvent(events._id)} style={{textDecoration:"none",color:"#FAF9F9",border:"none",fontSize:"",background:"#D53831",borderRadius:"0px 10px",padding:"5px 10px"}}>Delete</button>
                                    </td>
                                </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div>
                    <Footer/>
                </div>
            </div>
        );
    } 
}
 
export default Events;