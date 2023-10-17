import React from 'react'
import './App.css';
import { Link } from 'react-router-dom'
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillGooglePlusCircle, AiFillLinkedin } from 'react-icons/ai';
import brand from './all_image/brand_logo.png';
export default function Navbar() {
    return (
        <div className='container-fluid'>
            <div className="row top_nav" >
                <div className='col-4 ' >
                    <AiFillTwitterCircle className='mx-3 my-3 comm-icon' />
                    <BsFacebook className='mx-3 my-3 comm-icon' />
                    <AiFillGooglePlusCircle className='mx-3 my-3 comm-icon' />
                    <AiFillLinkedin className='mx-3 my-3 comm-icon' />

                </div>
                <div className='col-8 top-right'>
                    <ul class="list-inline pull-right flip sm-pull-none sm-text-center mt-5">

                        <li className="text-white m-0 pl-10 pr-10"> <i className="fa fa-phone text-white"></i> <span >Covid Helpline (9061977888)</span> / 9544428889</li>
                        <li className="text-white m-0 pl-10 pr-10"> <i className="fa fa-clock-o text-white"></i> Mon-Sat 9:00 to 5:00 </li>
                        <li className="text-white m-0 pl-10 pr-10"> <i className="fa fa-envelope-o text-white"></i> ourfamilyclinic@hotmail.com</li>
                    </ul>
                </div>
            </div>
            <div className='row py-2 bg-light'>
                <div className='col-4 bg-blue'>
                   
                   <Link class="menuzord-brand pull-left flip" to="home"><img src={brand} style={{width:"11rem"}} alt="brand image"/></Link>
                </div>
                <div className='col-8 '>
                    <nav className="navbar navbar-expand-lg ">
                        <div className="container-fluid">
                            {/* <a className="navbar-brand" href="#">Navbar</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button> */}
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item mx-2">
                                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                    </li>
                                    
                                    <li className="nav-item mx-2">
                                        <Link className="nav-link" to="service">Service</Link>
                                    </li>
                                    {/* <li className="nav-item dropdown mx-2">
                                        <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Other
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" to="#">Action</Link></li>
                                            <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                            <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                                        </ul>
                                    </li> */}
                                    <li className="nav-item mx-2">
                                        <Link className="nav-link" to="branch">Branchs</Link>
                                    </li>
                                   
                                    <li className="nav-item mx-2">
                                        <Link className="nav-link" to="consult">Consult</Link>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <Link className="nav-link" to="signup_login">Sign_up/Login</Link>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <Link className="nav-link" to="about">About</Link>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <Link className="nav-link" to="contact">ContactUs</Link>
                                    </li>
                                    
                                </ul>

                            </div>
                        </div>
                    </nav>
                </div>
            </div>


            {
                /* <Link to="/"> home page</Link>
                      <Link to="about"> about page</Link>
                      <Link to="contact"> contact page</Link>
                      <Link to="service"> service page</Link>
                      <Link to="branch"> branch page</Link> */
            }


        </div>
    )
}