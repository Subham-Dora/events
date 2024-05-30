import Footer from "./Footer";

const About = () => {
    return(
        <>
        <div class="container-fluid text-center" style={{backgroundColor:"#FAF9F9",color:"#211527"}}>
            <div class="row py-5" style={{paddingLeft:"200px",paddingRight:"200px"}}>
                <div class="col-md-12">
                    <h1 class="pb-3" style={{fontSize:"60px",fontWeight:"700"}}>We Create <span style={{color:"#D53831"}}>Events</span> That Lasts</h1>
                    <h5 style={{fontWeight:"400"}}>From Wedding Functions to Birthday Parties or Corporate Events to Musical Functions, We offer full range of Events Management Services that scale to your needs & budget.</h5>
                </div>
            </div>
            <div class="row pb-5" style={{paddingLeft:"100px",paddingRight:"100px"}}>
                <div class="col-md-4">
                    <img src="./images/img13.jpg" height="250" width="100%"/>
                    <h3 class="py-3" >Our <span style={{color:"#D53831"}}>Vision</span></h3>
                    <h6>We have a clear vision to ensure clients satisfaction and loyalty. As every event has to be perfect social, technical and creative fit, we have a collaborative approach to all the projects.</h6>
                </div>
                <div class="col-md-4">
                    <img src="./images/img14.jpg" height="250" width="100%"/>
                    <h3 class="py-3">Our <span style={{color:"#D53831"}}>Approach</span></h3>
                    <h6>TSD was created by pairing together our passion for business and events. We bring a fresh, unique approach to the event management industry.</h6>
                </div>
                <div class="col-md-4">
                    <img src="./images/img15.jpg" height="250" width="100%"/>
                    <h3 class="py-3">Our <span style={{color:"#D53831"}}>Goals</span></h3>
                    <h6>To be the leading Event Management Company in India, by meeting and exceeding the expectations of our Clients through innovative ideas and the delivery of excellent service.</h6>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}
export default About