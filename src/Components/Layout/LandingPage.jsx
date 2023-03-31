import HairTransImgThree from '../../Images/HairTransImgThree.jpg';
import HairTransImgOne from '../../Images/HairTransImgOne.jpg';
import HairTransImgTwo from '../../Images/HTransImgTwo.jpg';

import HairCareThree from '../../Images/HairCareThree.jpg';
import HairCareOne from '../../Images/HairCareOne.jpg';
import HairCareTwo from '../../Images/HairCareTwo.jpg';

import GetAppointHair from '../../Images/getAppoitment.jpg';

import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import React, { useRef } from 'react';
import {Link} from 'react-router-dom';
import emailjs from '@emailjs/browser';


toast.configure()
const LandingPage = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qlkqezp', 'template_e4lqsmb', form.current, '0A3nXIPyiFcywAOrF')
      .then((result) => {
        toast.info("Message Submit Successfully!");
          setInterval(() => {
            window.location.reload(true)
          }, 2500);
      }, (error) => {
        toast.warn("Something went wrong");
      });
  };

  return (
    <>
  
  {/* Hero Section */}
  <section className="banner">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-12 col-xl-7">
          <div className="block">
            <div className="divider mb-3" />
            <span className="text-uppercase text-sm letter-spacing ">Total Hair care solution</span>
            <h1 className="mb-3 mt-3">Your most trusted hair care partner</h1>
            <p className="mb-4 pr-5">Hair Revolution is a well reputed hair transplant organization where you can find best Surgery clinic specializing in single follicular unit.</p>
            <div className="btn-container ">
              <Link to="/ContactUs" target="_blank" className="btn btn-main-2 btn-icon btn-round-full">Make appoinment <i className="icofont-simple-right ml-2  " /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


  <section className="features">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="feature-block d-lg-flex">
            <div className="feature-item mb-5 mb-lg-0">
              <div className="feature-icon mb-4">
                <i className="icofont-surgeon-alt" />
              </div>
              <span>24 Hours Service</span>
              <h4 className="mb-3">Online Appoinment</h4>
              <p className="mb-4">Get All time support for emergency.We have introduced the principle of family medicine.</p>
              <Link to="/ContactUs"  className="btn btn-main btn-round-full">Make a appoinment</Link>
            </div>
            <div className="feature-item mb-5 mb-lg-0">
              <div className="feature-icon mb-4">
                <i className="icofont-ui-clock" />
              </div>
              <span>Timing schedule</span>
              <h4 className="mb-3">Working Hours</h4>
              <ul className="w-hours list-unstyled">
                <li className="d-flex justify-content-between">Mon - Sat : <span>9:00am - 12:00pm</span></li>
                <li className="d-flex justify-content-between">Sunday: <span>Off</span></li>
               
              </ul>
            </div>
            <div className="feature-item mb-5 mb-lg-0">
              <div className="feature-icon mb-4">
                <i className="icofont-support" />
              </div>
              <span>Emegency Cases</span>
              <h4 className="mb-3">0320-95903-43</h4>
              <p>Get All time support for emergency.We have introduced the principle of family medicine.Get Conneted with us for any urgency .</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Hero Section */}



  <section className="section about">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-4 col-sm-6">
          <div className="about-img">
            <img src={HairCareThree} alt className="img-fluid" />
            <img src={HairCareTwo} alt className="img-fluid mt-4" />
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="about-img mt-4 mt-lg-0">
            <img src={HairCareOne} alt className="img-fluid" />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="about-content pl-4 mt-4 mt-lg-0">
            <h2 className="title-color">Hair care <br />&amp; healthy living</h2>
            <p className="mt-4 mb-5">We provide best leading medical hair treatment service.</p>
            <Link to="/Services" className="btn btn-main-2 btn-round-full btn-icon">Services<i className="icofont-simple-right ml-3" /></Link>
          </div>
        </div>
      </div>
    </div>
  </section>


  <section className="section service gray-bg">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-7 text-center">
          <div className="section-title">
            <h2>Hair Care Treatments</h2>
            <div className="divider mx-auto my-4" />
            {/* <p>Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt molestias nostrum laudantium. Maiores porro cumque quaerat.</p> */}
          </div>
        </div>
      </div>
      <div className="row gy-2">
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="service-item">
            <img className="img-fluid d-block mx-auto" src={HairTransImgOne} alt="" />
            <div className="content text-center">
              <h4>Hair Transplant</h4>
              <p>Surgical</p>
              <p>Hybrid FUE</p>

            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="service-item">
          <img className="img-fluid d-block mx-auto" src={HairTransImgTwo} alt="" width={200} />
            <div className="content text-center">
              <h4>Hair Replacement</h4>
              <p>Non-Surgical</p>
              <p>Hair Systems</p>
            </div>
          </div>
        </div>
        
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="service-item">
          <img className="img-fluid d-block mx-auto" src={HairTransImgThree} alt="" width={200} />
            <div className="content text-center">
              <h4>PRP & Lasers</h4>
              <p>Medical Hair Loss Treatment</p>
              <p>Laser Hair Loss Treatment</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>


  <section className="section appoinment">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 ">
          <div className="appoinment-content">
            <img src={GetAppointHair} alt="" className="img-fluid " style={{borderRadius:"20px"}}/>
            {/* <div className="emergency">
              <h2 className="text-lg"><i className="icofont-phone-circle text-lg" />0320-95903-43</h2>
            </div> */}
          </div>
        </div>
        <div className="col-lg-6 col-md-10 ">
          <div className="appoinment-wrap mt-5 mt-lg-0">
            <h2 className="mb-2 title-color text-center">Book appoinment</h2>
            <p className="mb-2 text-center">Book an appoinment any time.</p>
            <form id="#" className="appoinment-form"ref={form} onSubmit={sendEmail}>
              <div className="row">
             
                <div className="col-lg-6">
                  <div className="form-group">
                  <input name="name" id="name" type="text" className="form-control" placeholder="Your Full Name" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                  <input name="email" id="email" type="email" className="form-control" placeholder="Your Email Address" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                  <input name="subject" id="subject" type="text" className="form-control" placeholder="Your Query Topic" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input name="phone" id="phone" type="Number" className="form-control" placeholder="Phone Number" />
                  </div>
                </div>
      
              </div>
              <div className="form-group-2 mb-4">
                <textarea name="message" id="message" className="form-control" rows={6} placeholder="Your Message" defaultValue={""} />
              </div>
              <button className="btn btn-main btn-round-full" >Submit Appoinment <i className="icofont-simple-right ml-2  " /></button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="section testimonial-2 gray-bg">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-7">
          <div className="section-title text-center">
            <h2>We served over 5000+ Patients</h2>
            <div className="divider mx-auto my-4" />
            <p>Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt molestias nostrum laudantium. Maiores porro cumque quaerat.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-12 testimonial-wrap-2">
          <div className="testimonial-block style-2  gray-bg">
            <i className="icofont-quote-right" />
            <div className="testimonial-thumb">
              <img src="images/team/test-thumb1.jpg" alt className="img-fluid" />
            </div>
            <div className="client-info ">
              <h4>Amazing service!</h4>
              <span>John Partho</span>
              <p>
                They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.
              </p>
            </div>
          </div>
          <div className="testimonial-block style-2  gray-bg">
            <div className="testimonial-thumb">
              <img src="images/team/test-thumb2.jpg" alt className="img-fluid" />
            </div>
            <div className="client-info">
              <h4>Expert doctors!</h4>
              <span>Mullar Sarth</span>
              <p>
                They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.
              </p>
            </div>
            <i className="icofont-quote-right" />
          </div>
          <div className="testimonial-block style-2  gray-bg">
            <div className="testimonial-thumb">
              <img src="images/team/test-thumb3.jpg" alt className="img-fluid" />
            </div>
            <div className="client-info">
              <h4>Good Support!</h4>
              <span>Kolis Mullar</span>
              <p>
                They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.
              </p>
            </div>
            <i className="icofont-quote-right" />
          </div>
          <div className="testimonial-block style-2  gray-bg">
            <div className="testimonial-thumb">
              <img src="images/team/test-thumb4.jpg" alt className="img-fluid" />
            </div>
            <div className="client-info">
              <h4>Nice Environment!</h4>
              <span>Partho Sarothi</span>
              <p className="mt-4">
                They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.
              </p>
            </div>
            <i className="icofont-quote-right" />
          </div>
          <div className="testimonial-block style-2  gray-bg">
            <div className="testimonial-thumb">
              <img src="images/team/test-thumb1.jpg" alt className="img-fluid" />
            </div>
            <div className="client-info">
              <h4>Modern Service!</h4>
              <span>Kolis Mullar</span>
              <p>
                They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.
              </p>
            </div>
            <i className="icofont-quote-right" />
          </div>
        </div>
      </div>
    </div>
  </section>


{/* Our partners section */}
  {/* <section className="section clients">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-7">
          <div className="section-title text-center">
            <h2>Partners who support us</h2>
            <div className="divider mx-auto my-4" />
            <p>Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt molestias nostrum laudantium. Maiores porro cumque quaerat.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row clients-logo">
        <div className="col-lg-2">
          <div className="client-thumb">
            <img src="images/about/1.png" alt className="img-fluid" />
          </div>
        </div>
        <div className="col-lg-2">
          <div className="client-thumb">
            <img src="images/about/2.png" alt className="img-fluid" />
          </div>
        </div>
        <div className="col-lg-2">
          <div className="client-thumb">
            <img src="images/about/3.png" alt className="img-fluid" />
          </div>
        </div>
        <div className="col-lg-2">
          <div className="client-thumb">
            <img src="images/about/4.png" alt className="img-fluid" />
          </div>
        </div>
        <div className="col-lg-2">
          <div className="client-thumb">
            <img src="images/about/5.png" alt className="img-fluid" />
          </div>
        </div>
        <div className="col-lg-2">
          <div className="client-thumb">
            <img src="images/about/6.png" alt className="img-fluid" />
          </div>
        </div>
        <div className="col-lg-2">
          <div className="client-thumb">
            <img src="images/about/3.png" alt className="img-fluid" />
          </div>
        </div>
        <div className="col-lg-2">
          <div className="client-thumb">
            <img src="images/about/4.png" alt className="img-fluid" />
          </div>
        </div>
        <div className="col-lg-2">
          <div className="client-thumb">
            <img src="images/about/5.png" alt className="img-fluid" />
          </div>
        </div>
        <div className="col-lg-2">
          <div className="client-thumb">
            <img src="images/about/6.png" alt className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </section> */}
{/* Our partners section */}






   
    </>
  )
}

export default LandingPage