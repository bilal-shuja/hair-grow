import React from 'react';
import Signature from '../../Images/signature.png';

const AboutUs = () => {
  return (
    <>

  <section className="page-title bg-1">
    <div className="overlay" />
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="block text-center">
            <span className="text-white">About Us</span>
            <h1 className="text-capitalize mb-5 text-lg">About Us</h1>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section about-page">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <h2 className="title-color">Personal hair care for your healthy hair growth</h2>
        </div>
        <div className="col-lg-8">
          <p>Hair Revolution clinic is place where you trust. Here is the best hair transplant . we are servings our skills in hair transplant about 10 years . our results are 100% . our clients are our priority. our greatest assets is our customer! treat each customer as if they are only one. we are here to serve you better, and  your happiness is our top priority.
            we used new method of hair transplant, which is fue. here we serve the best treatment and give granted results <span style={{fontSize:"2em"}}><b>&#33;</b> </span>
        </p>
          <img src={Signature} alt="Signature" className="img-fluid" />
        </div>
      </div>
    </div>
  </section>

  {/* <section className="fetaure-page ">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="about-block-item mb-5 mb-lg-0">
            <img src="images/about/about-1.jpg" alt className="img-fluid w-100" />
            <h4 className="mt-3">Healthcare for Kids</h4>
            <p>Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium .</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="about-block-item mb-5 mb-lg-0">
            <img src="images/about/about-2.jpg" alt className="img-fluid w-100" />
            <h4 className="mt-3">Medical Counseling</h4>
            <p>Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium .</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="about-block-item mb-5 mb-lg-0">
            <img src="images/about/about-3.jpg" alt className="img-fluid w-100" />
            <h4 className="mt-3">Modern Equipments</h4>
            <p>Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium .</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="about-block-item">
            <img src="images/about/about-4.jpg" alt className="img-fluid w-100" />
            <h4 className="mt-3">Qualified Doctors</h4>
            <p>Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium .</p>
          </div>
        </div>
      </div>
    </div>
  </section> */}


  <section className="section awards">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-4">
          <h2 className="title-color">Our Achievements </h2>
          <div className="divider mt-4 mb-5 mb-lg-0" />
        </div>
        <div className="col-lg-8">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="award-img">
                <img src="images/about/3.png" alt className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="award-img">
                <img src="images/about/4.png" alt className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="award-img">
                <img src="images/about/1.png" alt className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="award-img">
                <img src="images/about/2.png" alt className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="award-img">
                <img src="images/about/5.png" alt className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="award-img">
                <img src="images/about/6.png" alt className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


  {/* <section className="section team">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="section-title text-center">
            <h2 className="mb-4">Meet Our Specialist</h2>
            <div className="divider mx-auto my-4" />
            <p>Today’s users expect effortless experiences. Don’t let essential people and processes stay stuck in the past. Speed it up, skip the hassles</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="team-block mb-5 mb-lg-0">
            <img src="images/team/1.jpg" alt className="img-fluid w-100" />
            <div className="content">
              <h4 className="mt-4 mb-0"><a href="doctor-single.html">John Marshal</a></h4>
              <p>Internist, Emergency Physician</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="team-block mb-5 mb-lg-0">
            <img src="images/team/2.jpg" alt className="img-fluid w-100" />
            <div className="content">
              <h4 className="mt-4 mb-0"><a href="doctor-single.html">Marshal Root</a></h4>
              <p>Surgeon, Сardiologist</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="team-block mb-5 mb-lg-0">
            <img src="images/team/3.jpg" alt className="img-fluid w-100" />
            <div className="content">
              <h4 className="mt-4 mb-0"><a href="doctor-single.html">Siamon john</a></h4>
              <p>Internist, General Practitioner</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="team-block">
            <img src="images/team/4.jpg" alt className="img-fluid w-100" />
            <div className="content">
              <h4 className="mt-4 mb-0"><a href="doctor-single.html">Rishat Ahmed</a></h4>
              <p>Orthopedic Surgeon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> */}



    </>
  )
}

export default AboutUs