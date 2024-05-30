import Footer from "./Footer";
import "./Home.css";

const Home = () => {
  return(
    <div style={{backgroundColor:"#FAF9F9"}}>
      <div id="myCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{backgroundColor:"#211527"}}>
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./images/slide1.jpg" height="700" width="100%" style={{opacity:"0.7"}}/>
            <div className="container">
              <div className="carousel-caption">
                <span><span style={{color:"#D53831"}}>Event</span> Planning Is Hard</span>
                <p>WE CAN HELP YOU.</p>
                <p><a className="" href="/About">About</a></p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src="./images/slide2.jpg" height="700" width="100%" style={{opacity:"0.7"}}/>
            <div className="container">
              <div className="carousel-caption text-end">
                <span>Talent <span style={{color:"#D53831"}}>&</span> Skill</span>
                <p>THERE ARE NO HURDLES WE CAN‘T JUMP</p>
                <p><a className="" href="/Services">Services</a></p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src="./images/slide3.jpg" height="700" width="100%" style={{opacity:"0.7"}}/>
            <div className="container">
              <div className="carousel-caption text-start">
                <span>Busy<span style={{color:"#D53831"}}>,</span> Busy<span style={{color:"#D53831"}}>,</span> Busy</span>
                <p>A FEW OF OUR RECENT EVENTS</p>
                <p><a className="" href="/Events">Events</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-lg-6">
            <h3 className="fw-bold lh-1 mb-3" style={{color:"#D53831"}}>ABOUT TSD</h3>
            <h1 className="display-5 fw-bold lh-1 mb-3" style={{color:"#211527"}}>We Are The Best Event Planner & Organizer In Town</h1>
            <p className="lead" style={{color:"#211527"}}>With our passion, knowledge, creative flair and inspiration, we are dedicated in helping you to achieve your dream wedding day or special event within your budget.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" className="about">ABOUT US</button>
            </div>
          </div>
          <div className="col-10 col-sm-8 col-lg-6">
            <img src="./images/img1.jpg" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
          </div>
        </div>
      </div>

      <div className="container-fluid pb-5" style={{backgroundColor:"#211527"}}>
        <div className="row  pt-5" style={{paddingLeft:"100px",paddingRight:"100px"}}>
        <h3 className="fw-bold lh-1 mb-3" style={{color:"#D53831",textAlign:"center"}}>OUR SERVICES</h3>
        <h1 className="display-5 fw-bold lh-1 mb-5" style={{color:"#FAF9F9",textAlign:"center"}}>We Provide The Best Service For Your Event</h1>
          <div className="col-md-4">
            <div className="card" style={{backgroundColor:"#211527",border:"none"}}>
              <img src="./images/img2.jpg" className="card-img" height="400" style={{opacity:"0.7"}} alt="..."/>
              <div className="card-img-overlay">
                Wedding
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" style={{backgroundColor:"#211527",border:"none"}}>
              <img src="./images/img3.jpg" className="card-img" height="400" style={{opacity:"0.7"}} alt="..."/>
              <div className="card-img-overlay">
                Corporate Event
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" style={{backgroundColor:"#211527",border:"none"}}>
              <img src="./images/img4.jpg" className="card-img" height="400" style={{opacity:"0.7"}} alt="..."/>
              <div className="card-img-overlay">
                Social Event
              </div>
            </div>
          </div>
        </div>
      </div>

    <div className="container-fluid text-center pb-5">
      <div className="row pt-5" style={{paddingLeft:"100px",paddingRight:"100px"}}>
      <h3 className="fw-bold lh-1 mb-3" style={{color:"#D53831",textAlign:"center"}}>OUR EVENTS</h3>
        <h1 className="display-5 fw-bold lh-1 mb-5" style={{color:"#211527",textAlign:"center"}}>Beautiful & Unforgettable Times</h1>
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <img
            src="./images/img5.jpg"
            className="w-100 shadow-1-strong  mb-4"
            alt="Boat on Calm Water"
          />
          <img
            src="./images/img6.jpg"
            className="w-100 shadow-1-strong  mb-4"
            alt="Wintry Mountain Landscape"
          />
        </div>
        <div className="col-lg-4 mb-4 mb-lg-0">
          <img
            src="./images/img7.jpg"
            className="w-100 shadow-1-strong  mb-4"
            alt="Mountains in the Clouds"
          />
          <img
            src="./images/img8.jpg"
            className="w-100 shadow-1-strong  mb-4"
            alt="Boat on Calm Water"
          />
        </div>
        <div className="col-lg-4 mb-4 mb-lg-0">
          <img
            src="./images/img9.jpg"
            className="w-100 shadow-1-strong  mb-4"
            alt="Waves at Sea"
          />
          <img
            src="./images/img10.jpg"
            className="w-100 shadow-1-strong  mb-4"
            alt="Yosemite National Park"
          />
        </div>
        
      </div>
      </div>

      <div className="container-fluid col-xxl-8 px-5 py-5 text-center">
      <h3 className="fw-bold lh-1 mb-3" style={{color:"#D53831"}}>Testimonials</h3>
            <h1 className="display-5 fw-bold lh-1 mb-3" style={{color:"#211527"}}>What Client Says</h1>
    <div className="row flex-lg-row-reverse align-items-center g-5 ">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src="./images/img11.jpg" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div className="col-lg-6" style={{border:"none",backgroundColor:"#D53831"}}>
        <div id="carouselExampleControls" className="carousel slide text-center carousel-light py-3" data-mdb-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="rounded-circle shadow-1-strong mb-4"
                src="./images/img12.jpg" alt="avatar"
                style={{width:"115px",height:"115px"}} 
              />
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                  <h5 className="mb-3" style={{color:"#FAF9F9"}}>Virat Kohli</h5>
                  <p style={{color:"#FAF9F9"}}>Cricketer</p>
                  <p className="" style={{color:"#FAF9F9"}}>
                  TSD is an incredibly talented, professional and industry leading event management company.
                  They helped us to raise the bar each year we worked with them.
                  Our events would not have been what they were without them.
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="rounded-circle shadow-1-strong mb-4"
                src="./images/image1.jpg" alt="avatar"
                style={{width:"150px",height:"150px"}} 
              />
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                <h5 className="mb-3" style={{color:"#FAF9F9"}}>Virat Kohli</h5>
                  <p style={{color:"#FAF9F9"}}>Cricketer</p>
                  <p className="" style={{color:"#FAF9F9"}}>
                  TSD is an incredibly talented, professional and industry leading event management company.
                  They helped us to raise the bar each year we worked with them.
                  Our events would not have been what they were without them.
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="rounded-circle shadow-1-strong mb-4"
                src="./images/image3.jpg" alt="avatar" style={{width:"150px",height:"150px"}} />
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                <h5 className="mb-3" style={{color:"#FAF9F9"}}>Virat Kohli</h5>
                  <p style={{color:"#FAF9F9"}}>Cricketer</p>
                  <p className="" style={{color:"#FAF9F9"}}>
                  TSD is an incredibly talented, professional and industry leading event management company.
                  They helped us to raise the bar each year we worked with them.
                  Our events would not have been what they were without them.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-mdb-target="#carouselExampleControls"
          data-mdb-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-mdb-target="#carouselExampleControls"
          data-mdb-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>      
      </div>
    </div>
  </div>
      <Footer/>
    </div>
  );
}

export default Home;