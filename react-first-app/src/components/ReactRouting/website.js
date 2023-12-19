import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
// import { Home } from "./home";
import { Contacts } from "./contacts";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Services from "./Services";
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Home from "./home";
import logo from "./photo/logo.jpg"
import ReactComp from "./reactComp";
import JsComp from "./jsComp";
import CssComp from "./cssComp";
import HtmlComp from "./htmlComp";


const Website = () => {
    return (
        <>
            <Router>
                {/* <ul type="none" style={{display:"flex",columnGap:"15px"}}>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/Services">Services</NavLink></li>
                </ul> */}

                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="/"><img
                            src={logo}
                            width={80}
                            height={50}
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                        </NavLink>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="/Services">Services</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact">Contact US</NavLink>
                                </li>
                            </ul>
                            <div className="d-flex">
                            <ul className="navbar-nav me-auto mb-1 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="/reactjs">ReactJs</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/javascript">JavaScript</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/css">CSS</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/html">HTML</NavLink>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </nav>

                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route exact path="/contact" element={<Contacts />}></Route>
                    <Route exact path="/Services" element={<Services />}></Route>
                    <Route exact path="/reactjs" element={<ReactComp/>}></Route>
                    <Route exact path="/javascript" element={<JsComp/>}></Route>
                    <Route exact path="/css" element={<CssComp/>}></Route>
                    <Route exact path="/html" element={<HtmlComp/>}></Route>
                </Routes>
            </Router>
        </>
    )
}

export default Website;