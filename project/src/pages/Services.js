import axios from "axios";

class EventService {
 
    deleteEvent(id) {
    axios.get('http://localhost:4000/events/deleteEvents/' + id)
    .then(() => {
    console.log('Event Deleted !!!')
    })
    .catch((error) => {
    console.log(error)
    })
    }
    }
    
    export default EventService;