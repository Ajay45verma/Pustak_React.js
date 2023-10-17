import React from 'react'
import img_1 from '../all_image/img-1.jpg'
import img_2 from '../all_image/img-2.jpg'
import img_3 from '../all_image/img-3.jpg'
import img_4 from '../all_image/img-4.png'
import pn1 from '../all_image/pn1.jpg'
import pn2 from '../all_image/pn2.png'
import pn3 from '../all_image/pn3.jpg'
import pn4 from '../all_image/pn4.jpg'
import pn5 from '../all_image/pn5.png'
import pn6 from '../all_image/pn6.png'
import pn7 from '../all_image/pn7.png'
import service_title from '../all_image/service-icon.png'

import { MdFamilyRestroom } from "react-icons/md";
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';
export default function Home() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img style={{ height: "32rem" }}
            className="d-block w-100"
            src={img_3}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ height: "32rem" }}
            className="d-block w-100"
            src={img_1}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ height: "32rem" }}
            className="d-block w-100"
            src={img_2}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <section>
        <div className="container pb-0">
          <div className="row">
            <div className="col-md-7">
              <h3 className="text-gray-silver font-playfair mt-10 mt-sm-30 mb-0">About</h3>
              <h1 className="text-gray font-playfair mt-0">Our Family Clinic</h1>
              <p><em>A One Stop Centre in your neighbourhood for all your healthcare needs</em></p>
              <p className="mt-20" style={{ textAlign: "justify" }}>Our family clinic provides affordable and quality healthcare to rural and semi-urban areas in India.The organisation implements an innovative family and patient-centered healthcare model delivered through a chain of family clinics.</p>
              <Link to="about" className="btn btn-default btn-lg mt-15 mb-md-30">Read more</Link>
            </div>
            <div className="col-md-5" style={{ textAlign: "center" }}>
              <img src={img_4} alt="media" />
            </div>
          </div>
        </div>

      </section>

      <section className="text-center bg-lighter">
        <div className="container">
          <div className="section-title text-center">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <h2 className="text-uppercase justify-content-center mt-0">Services</h2>
                <div className="title-icon">
                  <img className="mb-10" src={service_title} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="section-content">
            <div className="row features-style1 mt-20">
              <div className="col-md-4 col-sm-6">
                <div className="icon-box icon-box-home media">
                  {/* <MdFamilyRestroom/> */}
                  <img src={pn1} style={{ height: "4rem" }} alt="icons" />
                  <div className="media-body">
                    <h5 className="media-heading heading">Family Doctor</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="icon-box icon-box-home media">
                  <img src={pn2} style={{ height: "4rem" }} alt="icons" />
                  <div className="media-body">
                    <h5 className="media-heading heading">Woman and Child Care</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="icon-box icon-box-home media">
                  <img src={pn2} style={{ height: "4rem" }} alt="icons" />
                  <div className="media-body">
                    <h5 className="media-heading heading">Senior Citizen Care</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="icon-box icon-box-home media">
                  <img src={pn4} style={{ height: "4rem" }} alt="icons" />
                  <div className="media-body">
                    <h5 className="media-heading heading">Home Healthcare</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="icon-box icon-box-home media">
                  <img src={pn3} style={{ height: "4rem" }} alt="icons" />
                  <div className="media-body">
                    <h5 className="media-heading heading">Specialist Doctor Consultaion.</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="icon-box icon-box-home media">
                  <img src={pn5} style={{ height: "4rem" }} alt="icons" />
                  <div className="media-body">
                    <h5 className="media-heading heading">Pharmacy Services</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="icon-box icon-box-home media">
                  <a href="#" className="icon-box-media"><img src={pn6} style={{ height: "4rem" }} alt="" /></a>
                  <div className="media-body">
                    <h5 className="media-heading heading">Diagnostic laboratory</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="icon-box icon-box-home media">
                  <a href="#" className="icon-box-media"><img src="images/icons/Surgical.png" alt="" /></a>
                  <div className="media-body">
                    <h5 className="media-heading heading">Minor Surgical Procedures</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div classNameName="icon-box icon-box-home media">
                  <a href="#" classNameName="icon-box-media"><img src={pn7} style={{ height: "4rem" }} alt="" /></a>
                  <div classNameName="media-body">
                    <h5 classNameName="media-heading heading">In Patient / Day Care Services</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <footer id="footer" className="footer pb-0 bg-black-111">
        <div className="container pb-20">
          <div className="row multi-row-clearfix">
            <div className="col-sm-6 col-md-3">
              <div className="widget dark">
                <img alt="" src="images/brand.png" />
                <ul className="social-icons icon-dark mt-20">
                  <li><a href="https://www.facebook.com/ourfamilyclinics/" target="_blank" data-bg-color="#3B5998" style={{background: "rgb(59, 89, 152) !important"}}><i className="fa fa-facebook"></i></a></li>
                  <li><a href="#twitter" data-bg-color="#02B0E8" style={{background: "rgb(2, 176, 232) !important"}}><i className="fa fa-twitter"></i></a></li>
                  <li><a href="#google-plus" data-bg-color="#A11312" style={{background: "rgb(161, 19, 18) !important"}}><i className="fa fa-google-plus"></i></a></li>
                  <li><a href="#youtube" data-bg-color="#C22E2A" style={{background: "rgb(194, 46, 42) !important"}}><i className="fa fa-youtube"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="widget dark">
                <h5 className="widget-title line-bottom">Other Services</h5>
                <ul className="list-border list theme-colored angle-double-right">
                  <li><a href="lap-test.php">Lab Test at Home</a></li>
                  <li><a href="home-health.php">Home health care</a></li>
                  <li><a href="corporate-wellness.php">Corporate wellness</a></li>
                  <li><a href="school-health.php">School health</a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="widget dark">
                <h5 className="widget-title line-bottom">Quick Links</h5>
                <ul className="list-border list theme-colored angle-double-right">
                  <li><a href="index.php">Home</a></li>
                  <li><a href="health-centers.php">Health centres</a></li>
                  <li><a href="contact.php">Contact Us</a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="widget dark">
                <h5 className="widget-title line-bottom">Quick Contact</h5>
                <ul className="list list-border">
                  <li><span style={{color: "#808080"}}>+ 91 484 220 5733</span></li>
                  <li><span style={{color: "#808080"}}>+ 91 95444 28889</span></li>
                  <li><span style={{color: "#808080"}}>ourfamilyclinic@hotmail.com</span></li>
                  <li><p style={{color: "#808080"}}className="lineheight-20">
                    2nd Floor, B-Block,Emmanuval Building,Emmanual Road, Kathrikadavu, Ernakulam 682017</p>

                    <p style={{color: "#808080",  marginTop: "13px"}} className="lineheight-20">
                      Mattummal Junction, Mattummal, Thevara, Ernakulam, Kerala 682013</p></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-nav bg-black-222 p-20">
          <div className="row text-center">
            <div className="col-md-12">
              <p className="text-white font-11 m-0">Copyright ©2019  All Rights Reserved.</p><p className="text-white font-11 m-0">Our Family Clinic powered by Antonal Technologies.</p>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  )
}
