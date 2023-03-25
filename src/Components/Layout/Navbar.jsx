import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      {/* Top Header Section with navbar */}
  <header>
    <div className="header-top-bar fixed-top" style={{paddingBottom:"0.7em"}}>
      <div className="container">
        <div className="row align-items-center ">
          <div className="col-lg-6">
            <ul className="top-bar-info list-inline-item pl-0 mb-0">
              <li className="list-inline-item"><a href="mailto:support@gmail.com"><i className="icofont-support-faq mr-2" />support@novena.com</a></li>
              <li className="list-inline-item"><i className="icofont-location-pin mr-2" />Address Ta-134/A, New York, USA </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <div className="text-lg-right top-right-bar mt-2 mt-lg-0">
              <a href="tel:+23-345-67890">
                <span>Call Now : </span>
                <span className="h4">823-4565-13456</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

{/* Navbar Section */}
    <nav className="navbar navbar-expand-lg navigation" id="navbar" style={{marginTop:"5em"}}>
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src="images/logo.png" alt className="img-fluid" />
        </a>
        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarmain" aria-controls="navbarmain" aria-expanded="false" aria-label="Toggle navigation">
          <span className="icofont-navigation-menu" />
        </button>
        <div className="collapse navbar-collapse" id="navbarmain">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item"><Link className="nav-link" to="/AboutUs">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/Services">Services</Link></li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle"  id="dropdown02" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Procedures <i className="icofont-thin-down" /></a>
              <ul className="dropdown-menu" aria-labelledby="dropdown02">
                <li><Link className="dropdown-item text-sm" to="/HairTransDiagnose">Candidate of Hair Transplant Diagnosis</Link></li>
                <li><Link className="dropdown-item text-sm" to="/FUEFUT">FUE VS FUT</Link></li>
                <li><Link className="dropdown-item text-sm" to="/HTransProcedure">The Hair Transplant Procedure</Link></li>
                <li><Link className="dropdown-item text-sm" to="/BHairTranSurgery">Before Hair Transplant Surgery </Link></li>
                <li><Link className="dropdown-item text-sm" to="/AhairTranSurgery">After Hair Transplant Surgery</Link></li>
                <li><Link className="dropdown-item text-sm" to="/CostHTransplant">Cost of Hair Transplant in Pakistan</Link></li>
                <li><Link className="dropdown-item text-sm" to="/SMP">SMP</Link></li>


              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Packages <i className="icofont-thin-down" /></a>
              <ul className="dropdown-menu" aria-labelledby="dropdown03">
                <li><Link className="dropdown-item text-sm" to="/FUT">FUT</Link></li>
                <li><Link className="dropdown-item text-sm" to="/FUE">FUE</Link></li>
                <li><Link className="dropdown-item text-sm" to="/UnshaveFue">Unshaven FUE</Link></li>
                <li><Link className="dropdown-item text-sm" to="/CrownHairTransplant">Crown Hair Transplant</Link></li>
                <li><Link className="dropdown-item text-sm" to="/BeardTransplant">Beard Transplant</Link></li>
                <li><Link className="dropdown-item text-sm" to="/EyeBrowTranspkant">Eye-Brow Transplant</Link></li>
                <li><Link className="dropdown-item text-sm" to="/HairTransplantInWomen">Hair Transplant in Women</Link></li>
                <li><Link className="dropdown-item text-sm" to="/HairTransplantRepair">Hair Transplant Repair</Link></li>
                <li><Link className="dropdown-item text-sm" to="/FUTScarRevision">FUT Scar Revision</Link></li>
                <li><Link className="dropdown-item text-sm" to="/RoboticHairTransplant">Robotic Hair Transplant</Link></li>
                <li><Link className="dropdown-item text-sm" to="/HairClonningNewAdvancements">Hair Clonning New Advancements</Link></li>
                
              </ul>
            </li>
            {/* <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="blog-sidebar.html" id="dropdown05" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blog <i className="icofont-thin-down" /></a>
              <ul className="dropdown-menu" aria-labelledby="dropdown05">
                <li><a className="dropdown-item" href="blog-sidebar.html">Blog with Sidebar</a></li>
                <li><a className="dropdown-item" href="blog-single.html">Blog Single</a></li>
              </ul>
            </li> */}
            <li className="nav-item"><Link className="nav-link" to="/ContactUs">Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </nav>

{/* Navbar Section */}

  </header>
  {/* Top Header Section with navbar */}
    </>
  )
}

export default Navbar