import React from 'react';
import {Link} from 'react-router-dom';

import FUE from '../../Images/FUE.jpg';
import FUT from '../../Images/FUT.jpg';

import BeardTrans from '../../Images/beardTrans.jpg';
import HairTransWo from '../../Images/HairTransWo.jpg';
import UnshavenFUE from '../../Images/unshavenFUE.jpg';
import HairTransRep from '../../Images/HairTransRep.jpg';
import EyebrowTrans from '../../Images/EyeBrowTrans.jpg';
import HairTransScar from '../../Images/HairScarTrans.jpg';

const Services = () => {
  return (
    <>
    
  <section className="page-title bg-1">
    <div className="overlay" />
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="block text-center">
            <span className="text-white">Our services</span>
            <h1 className="text-capitalize mb-5 text-lg">What We Do</h1>
            {/* <ul class="list-inline breadcumb-nav">
      <li class="list-inline-item"><a href="index.html" class="text-white">Home</a></li>
      <li class="list-inline-item"><span class="text-white">/</span></li>
      <li class="list-inline-item"><a href="#" class="text-white-50">Our services</a></li>
    </ul> */}
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section service-2">
    <div className="container">
      <div className="row">

        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="service-block mb-5">
            <img src={FUE} alt="FUE" className="img-fluid" />
            <div className="content">
              <h4 className="mt-4 mb-2 title-color">FUE</h4>
              <p className="mb-4">FUE hair transplants are where individual follicular units are extracted from ...</p>
              <Link to="/FUE" target="_blank" className="read-more">Learn more  <i className="icofont-simple-right ml-2"/></Link>

            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="service-block mb-5 mb-lg-0">
            <img src={FUT} alt="FUT" className="img-fluid" />
            <div className="content">
              <h4 className="mt-4 mb-2 title-color">FUT</h4>
              <p className="mb-4">Follicular Unit Transplantation (FUT Hair Transplants), or strip harvesting, is t...</p>
              <Link to="/FUT" target="_blank" className="read-more">Learn more  <i className="icofont-simple-right ml-2"/></Link>

            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="service-block mb-5">
            <img src={UnshavenFUE} alt="UnshavenFUE" className="img-fluid" />
            <div className="content">
              <h4 className="mt-4 mb-2  title-color">UN-Shaven Fue</h4>
              <p className="mb-4">Typically, hair loss restoration techniques require the head to be shaved in order to provide access to the maximum...</p>
              <Link to="/UnshaveFue" target="_blank" className="read-more">Learn more  <i className="icofont-simple-right ml-2"/></Link>

            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="service-block mb-5">
            <img src={EyebrowTrans} alt="EyebrowTrans" className="img-fluid" />
            <div className="content">
              <h4 className="mt-4 mb-2 title-color">Eyebrow Transplant</h4>
              <p className="mb-4">What happened to my eyebrows? Eyebrow loss can occur in both men and women ...</p>
              <Link to="/EyeBrowTransplant" target="_blank" className="read-more">Learn more  <i className="icofont-simple-right ml-2"/></Link>

            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="service-block mb-5 mb-lg-0">
            <img src={BeardTrans} alt="BeardTrans" className="img-fluid"/>
            <div className="content">
              <h4 className="mt-4 mb-2 title-color">Beard Transplant</h4>
              <p className="mb-4">Beards have been a huge trend in the last few years, and the trend ...</p>
              <Link to="/BeardTransplant" target="_blank" className="read-more">Learn more  <i className="icofont-simple-right ml-2"/></Link>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="service-block mb-5 mb-lg-0">
            <img src={HairTransScar} alt="HairTransScar" className="img-fluid" />
            <div className="content">
              <h4 className="mt-4 mb-2 title-color">Scar Revision Hair Transplant</h4>
              <p className="mb-4">The two most common solutions are advanced surgical scar revis ...</p>
              <Link to="/FUTScarRevision" target="_blank" className="read-more">Learn more  <i className="icofont-simple-right ml-2"/></Link>

            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="service-block mb-5 mb-lg-0">
            <img src={HairTransRep} alt="HairTransRep" className="img-fluid"  />
            <div className="content">
              <h4 className="mt-5 mb-2 title-color">Hair Transplant Repair</h4>
              <p className="mb-4">Many patients are reluctant to seek a second hair transplant especially...</p>
              <Link to="/HairTransplantRepair" target="_blank" className="read-more">Learn more  <i className="icofont-simple-right ml-2"/></Link>
            </div>
          </div>
        </div>

        
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="service-block mb-5 mb-lg-0">
            <img src={HairTransWo} alt="HairTransWo" className="img-fluid" />
            <div className="content">
              <h4 className="mt-4 mb-2 title-color">Hair Transplant In Women</h4>
              <p className="mb-4">If you are having hair fall, don’t delay a visit to a hair loss specialist ...</p>
              <Link to="/HairTransplantInWomen" target="_blank"className="read-more">Learn more  <i className="icofont-simple-right ml-2"/></Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
  <section className="section cta-page">
    <div className="container">
      <div className="row">
        <div className="col-lg-7">
          <div className="cta-content">
            <div className="divider mb-4" />
            <h2 className="mb-5 text-lg">We are pleased to offer you to have a <span className="title-color">chance of healthy hair life</span></h2>
            <Link to="/ContactUs" className="btn btn-main-2 btn-round-full">Get appoinment<i className="icofont-simple-right  ml-2" /></Link>
          </div>
        </div>
      </div>
    </div>
  </section>


    </>
  )
}

export default Services