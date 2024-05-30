import Footer from "./Footer";

const Services = () => {
    return(
        <div>
            <div class="container-fluid px-5 py-5" id="featured-3" style={{backgroundColor:"#FAF9F9",color:"#211527"}}>
            <h1 class="pb-3" style={{fontSize:"60px",fontWeight:"700",textAlign:"center"}}>The <span style={{color:"#D53831"}}>Event Management</span> Specialists</h1>
                    <h5 style={{fontWeight:"400",textAlign:"center"}}>From Wedding Functions to Birthday Parties or Corporate Events to Musical Functions, We offer full range of Events Management Services that scale to your needs & budget.</h5>
                <div class="row g-4 px-5 py-5 row-cols-1 row-cols-lg-3">
                    <div class="feature col">
                        <div class="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
                            <i class="material-icons" style={{fontSize:"30px",color:"#FAF9F9",background:"#D53831",borderRadius:"0px 10px",padding:"5px"}}>festival</i>
                        </div>
                        <h2>Venue Selection</h2>
                        <p>With our extensive range of contacts throughout the country - We offer some of the best rates available for events.</p>
                    </div>
                    <div class="feature col">
                        <div class="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
                            <i class="material-icons" style={{fontSize:"30px",color:"#FAF9F9",background:"#D53831",borderRadius:"0px 10px",padding:"5px"}}>design_services</i>
                        </div>
                        <h2>Event Design</h2>
                        <p>Conferences, Event set up and Design, floral displays. A full in house team to cater for event needs.</p>
                    </div>
                    <div class="feature col">
                        <div class="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
                            <i class="material-icons" style={{fontSize:"30px",color:"#FAF9F9",background:"#D53831",borderRadius:"0px 10px",padding:"5px"}}>campaign</i>
                        </div>
                        <h2>AV-Sound</h2>
                        <p>Sound, lighting, audio visual and technical support for all sizes of event.</p>
                    </div>
                    <div class="feature col">
                        <div class="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
                            <i class="material-icons" style={{fontSize:"30px",color:"#FAF9F9",background:"#D53831",borderRadius:"0px 10px",padding:"5px"}}>confirmation_number</i>
                        </div>
                        <h2>Entertainment</h2>
                        <p>The Dancers, Bands, Dancers and International Acts & Music for all events.</p>
                    </div>
                    <div class="feature col">
                        <div class="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
                            <i class="material-icons" style={{fontSize:"30px",color:"#FAF9F9",background:"#D53831",borderRadius:"0px 10px",padding:"5px"}}>camera_enhance</i>
                        </div>
                        <h2>Documentation</h2>
                        <p>We have all the things to capture your memorable event.</p>
                    </div>
                    <div class="feature col">
                        <div class="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
                            <i class="material-icons" style={{fontSize:"30px",color:"#FAF9F9",background:"#D53831",borderRadius:"0px 10px",padding:"7px"}}>cake</i>
                        </div>
                        <h2>Catering</h2>
                        <p>we provide the very best service and menu options available from our in house catering division.</p>
                    </div>
                </div>

            </div>
            <Footer/>
        </div>
    );
}
export default Services