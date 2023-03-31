import React from 'react'

const Footer = () => {
  return (
    <>
  <footer className="footer section gray-bg">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 mr-auto col-sm-6">
          <div className="widget mb-5 mb-lg-0">
            <div className="logo mb-4">
              <h2>Hair Revolution</h2>
              {/* <img src="images/logo.png" alt className="img-fluid" /> */}
            </div>
            <p>Hair Revolution is a well reputed hair transplant organization where you can find best Surgery clinic specializing in single follicular unit.</p>
            <ul className="list-inline footer-socials mt-4">
              <li className="list-inline-item"><a href="https://www.facebook.com/hairtransplantcompany?mibextid=ZbWKwL" target="_blank"><i className="icofont-facebook" /></a></li>
              <li className="list-inline-item"><a href="https://www.instagram.com/revolution.in.hairs/?igshid=ZDdkNTZiNTM%3D" target="_blank"><i className="icofont-instagram" /></a></li>
              <li className="list-inline-item" ><a href="https://www.youtube.com/@hairrevolutionlahore" target="_blank"><i className="icofont-youtube" /></a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-6">
          <div className="widget mb-5 mb-lg-0">
            <h4 className="text-capitalize mb-3">Department</h4>
            <div className="divider mb-4" />
            <ul className="list-unstyled footer-menu lh-35">
              <li><a href="#">Hair Transplant Surgical</a></li>
              <li><a href="#">Non-Surgical</a></li>
              <li><a href="#">PRP</a></li>
              <li><a href="#">Lasers Treatment</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-6">
          <div className="widget mb-5 mb-lg-0">
            <h4 className="text-capitalize mb-3">Support</h4>
            <div className="divider mb-4" />
            <ul className="list-unstyled footer-menu lh-35">
              <li><a href="#">Terms &amp; Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Company Support </a></li>
              <li><a href="#">FAQuestions</a></li>
              <li><a href="#">Company Licence</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="widget widget-contact mb-5 mb-lg-0">
            <h4 className="text-capitalize mb-3">Get in Touch</h4>
            <div className="divider mb-4" />
            <div className="footer-contact-block mb-4">
              <div className="icon d-flex align-items-center">
                <i className="icofont-email mr-3" />
                <span className="h6 mb-0">hairrevolutionlahore@gmail.com</span>
              </div>
              {/* <h4 className="mt-2"><a href=""> </a></h4> */}
            </div>
            <div className="footer-contact-block">
              <div className="icon d-flex align-items-center">
                <i className="icofont-support mr-3" />
                <span className="h6 mb-0">Mon to Sat : 09:00-12:00</span>
              </div>
              <h4 className="mt-2"><a href="tel:03209590343">0320-95903-43</a></h4>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-btm py-4 mt-5">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6">
            <div className="copyright">
              © Copyright Reserved to <span className="text-color">Hair Revolution</span> by <a href="https://alphanitesofts.com/" target="_blank">AlphaniteSofts pvt ltd</a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="subscribe-form text-lg-right mt-5 mt-lg-0">
              <form action="#" className="subscribe">
                <input type="text" className="form-control" placeholder="Your Email address" />
                <a href="#" className="btn btn-main-2 btn-round-full">Subscribe</a>
              </form>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <a className="backtop js-scroll-trigger" href="#top">
              <i className="icofont-long-arrow-up" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
    </>
  )
}

export default Footer