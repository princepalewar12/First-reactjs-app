import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
// import { Home } from "./home";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
// import Services from "./Services";
// import Container from 'react-bootstrap/Container';
import Nav from "react-bootstrap/Nav";
// import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from "react-bootstrap/NavDropdown";
import Home from "./home";
import logo from "./photo/logo.jpg";
import ReactComp from "./reactComp";
import JsComp from "./jsComp";
import ClassComp from "../compCommunication/ClassComp";
import FuncComp from "../compCommunication/FuncComp";
import StateInClassComp from "../stateInComp/StateInClassComp";
import UseStateHook from "../stateInComp/UseStateHook";
import ConditionalRendComp from "../condRenderingOfComp/ConditionalRendComp";
import StylingComp from "../condRenderingOfComp/StylingComp";
import EventHandling from "../condRenderingOfComp/EventHandling";
import { UserDataApi } from "./UserDataApi";
import ProductPage from "./ProductPage";
import MenuBar from "../MenuBar";
import UserCommentsUseEffect from "./UserCommentsUseEffect";
import CartProduct from "./CartProduct";

const Website = () => {
  let pName = "PRINCE";
  const employee = {
    name: "Prince",
    age: 26,
    address: "Nagpur",
  };
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
            <NavLink className="navbar-brand" to="/">
              <img
                src={logo}
                width={80}
                height={50}
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </NavLink>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/products"
                  >
                    Products Page
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/userdataapi">
                    User Data
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/compCommunication">
                    Comp Communication
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/functionComponent">
                    Function Communication
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/stateInClassComp">
                    StateInClassComp
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/stateInFunComp">
                    StateInFunComp
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/conditionalRendComp">
                    ConditionalRendComp
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/stylingComponent">
                    StylingComponent
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/eventHandling">
                    EventHandling
                  </NavLink>
                </li>
              </ul>
              <div className="d-flex">
                <ul className="navbar-nav me-auto mb-1 mb-lg-0">
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      aria-current="page"
                      to="/reactjs"
                    >
                      ReactJs
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/javascript">
                      JavaScript
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/usercomments">
                      Comments
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/cartproducts">
                      Cart Products
                    </NavLink>

                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <MenuBar />


        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/userdataapi" element={<UserDataApi />}></Route>
          <Route exact path="/products" element={<ProductPage />}></Route>
          <Route
            exact
            path="/compCommunication"
            element={
              <ClassComp
                myName={pName}
                company="ADOBE"
                employeeObj={employee}
              />
            }
          ></Route>
          <Route
            exact
            path="/functionComponent"
            element={
              <FuncComp myName={pName} company="ADOBE" employeeObj={employee} />
            }
          ></Route>
          <Route
            exact
            path="/stateInClassComp"
            element={
              <StateInClassComp
                myName={pName}
                company="ADOBE"
                employeeObj={employee}
              />
            }
          ></Route>
          <Route
            exact
            path="/stateInFunComp"
            element={<UseStateHook />} 
          ></Route>
          <Route
            exact
            path="/conditionalRendComp"
            element={<ConditionalRendComp />}
          ></Route>
          <Route
            exact
            path="/stylingComponent"
            element={<StylingComp />}
          ></Route>
          <Route
            exact
            path="/eventHandling"
            element={<EventHandling />}
          ></Route>

          <Route exact path="/reactjs" element={<ReactComp />}></Route>
          <Route exact path="/javascript" element={<JsComp />}></Route>
          <Route exact path="/usercomments" element={<UserCommentsUseEffect />}></Route>
          <Route exact path="/cartproducts" element={<CartProduct />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default Website;
