import './Footer.css';
function Footer(props){
    return(
        <>
            <div className="container-fluid px-5 pt-3" style={{backgroundColor:"#211527"}}>
                <div className="row">
                    <h3 className="text-center pb-3"><span style={{color:"#D53831",fontWeight:"700"}}>TSD</span><span style={{color:"#FAF9F9",fontWeight:"700"}}>events</span></h3>
                    <div className="col-md-3">
                        <h5 className="pb-3"><span style={{color:"#FAF9F9"}}>About TSD</span></h5>
                        <p style={{color:"#FAF9F9"}}><span style={{color:"#D53831",verticalAlign:"middle"}}><i class="material-icons">double_arrow</i></span>We Are The Best Event Planner & Organizer In Town</p>
                        <button className="footer">ABOUT US</button>
                    </div>
                    <div className="col-md-3">
                    <h5 className="pb-3"><span style={{color:"#FAF9F9"}}>Get In Touch</span></h5>
                        <ul className="list-unstyled" style={{color:"#FAF9F9"}}>
                            <li className='pb-2'>
                            <span style={{color:"#D53831",verticalAlign:"middle"}}><i class="material-icons">place</i></span>
                                3 Circle, Dumas Rd, Surat, Gujarat
                            </li>
                            <li className='pb-2'>
                            <span style={{color:"#D53831",verticalAlign:"middle"}}><i class="material-icons">phone_iphone</i></span>
                                (+91) 99887 76655
                            </li>
                            <li className='pb-2'>
                            <span style={{color:"#D53831",verticalAlign:"middle"}}><i class="material-icons">mail</i></span>
                                TSDevents@email.org
                            </li>
                            <li className='pb-2'>
                            <span style={{color:"#D53831",verticalAlign:"middle"}}><i class="material-icons">schedule</i></span>
                                Mon - Fri 9.00 am - 6.00 pm
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                    <h5 className="pb-3"><span style={{color:"#FAF9F9"}}>Quick Links</span></h5>
                        <ul className="list-unstyled" style={{color:"#FAF9F9"}}>
                            <li className="pb-2">
                            <span style={{color:"#D53831",verticalAlign:"middle"}}><i class="material-icons">navigate_next</i></span>
                                <a href="#!" className="footer">Home</a>
                            </li>
                            <li className="pb-2">
                            <span style={{color:"#D53831",verticalAlign:"middle"}}><i class="material-icons">navigate_next</i></span>
                                <a href="#!" className="footer">About</a>
                            </li>
                            <li className="pb-2">
                            <span style={{color:"#D53831",verticalAlign:"middle"}}><i class="material-icons">navigate_next</i></span>
                                <a href="#!" className="footer">Services</a>
                            </li>
                            <li className="pb-2">
                            <span style={{color:"#D53831",verticalAlign:"middle"}}><i class="material-icons">navigate_next</i></span>
                                <a href="#!" className="footer">Events</a>
                            </li>
                            <button className="footer">BOOK AN EVENT</button>
                        </ul>
                    </div>
                    <div className="col-md-3">
                    <h5 className="pb-3"><span style={{color:"#FAF9F9"}}>Events Gallary</span></h5>
                        <div className="row pb-3">
                            <div className="col-md-4"><img src="./images/img5.jpg" height="90" width="90"/></div>
                            <div className="col-md-4"><img src="./images/img6.jpg" height="90" width="90"/></div>
                            <div className="col-md-4"><img src="./images/img7.jpg" height="90" width="90"/></div>
                        </div>
                        <div className="row pb-3">
                            <div className="col-md-4"><img src="./images/img8.jpg" height="90" width="90"/></div>
                            <div className="col-md-4"><img src="./images/img9.jpg" height="90" width="90"/></div>
                            <div className="col-md-4"><img src="./images/img10.jpg" height="90" width="90"/></div>
                        </div>
                    </div>
                    <p className="text-center text-muted border-top pt-3">&copy; 2022 Shubham Dora</p>
                </div>
            </div>
        </>
    );
}
export default Footer