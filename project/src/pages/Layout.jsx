import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
    return(
        <div style={{backgroundColor:"#211527"}}>
        <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3">
                <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-decoration-none">
                    <span className="fs-3">TSD</span><span className="fs-6">events</span>
                </a>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><Link to="/" className="nav-link px-2">Home</Link></li>
                    <li><Link to="/About" className="nav-link px-2">About</Link></li>
                    <li><Link to="/Services" className="nav-link px-2">Services</Link></li>
                    <li><Link to="/Events" className="nav-link px-2">Events</Link></li>
                </ul>

                <div className="col-md-3 text-end">
                    <button type="button"><Link to="/Book" style={{textDecoration:"none",color:"#FAF9F9"}}>BOOK AN EVENT</Link></button>
                </div>
            </header>
        </div>
        <Outlet/>
        </div>
    );
}

export default Layout