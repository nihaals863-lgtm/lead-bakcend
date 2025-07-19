import React from "react";
import { Link } from "react-router-dom";
const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1fb64dd7-e97f-4718-a4ca-8fa3347cadae");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
    <div>
        <nav className=" navbar-expand-lg bg-body-tertiary " >
        <div className="container-fluid ">
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav" style={{gap:8}}>
            <li className="nav-item">
            <Link to="/"  className="nav-link active" aria-current="page"    style={{ fontSize:"15", color:"blue" }}>Home/</Link>
            </li>
         
            <li className="nav-item">
               <Link to="/contact"  className="nav-link active" aria-current="page"  style={{ fontSize:15 }}>contact</Link>
            </li>
          </ul>
        </div>
      </div>
         </nav>
        </div>
      <section className="container mt-3 mb-5">
        <div className="row">
          <div className="col-sm-12 mb-4 col-md-5">
            {/*Form with header*/}
            <div className="card border-black rounded-0">
              <div className="card-header p-0">
                <div className="bg-black text-white text-center py-2">
                  <h3>
                    <i className="fa fa-envelope" /> Write to us:
                  </h3>
                  <p className="m-0">
                    We’ll write rarely, but only the best content.
                  </p>
                </div>
              </div>
              <div className="card-body p-3">
              <form onSubmit={onSubmit}>
                <div className="form-group mb-4">
                  <label className="mb-2"> Your name </label>
                  <div className="input-group">
                    <input defaultValue="" type="text" name="name" required
                      className="form-control"
                      placeholder="Your name" />
                  </div>
                </div>
                <div className="form-group mb-4">
                  <label className="mb-2">Your email</label>
                  <div className="input-group mb-2 mb-sm-0">
                    <input type="email" defaultValue="" className="form-control" placeholder="Email"   name="Email" required/>
                  </div>
                </div>
                <div className="form-group mb-4">
                  <label className="mb-2">Mobile No.</label>
                  <div className="input-group mb-2 mb-sm-0">
                    <input type="number" className="form-control"
                      name="Mobile No." required placeholder="Mobile No" />
                  </div>
                </div>
                <div className="form-group mb-4">
                  <label className="mb-2">Message</label>
                  <div className="input-group mb-2 mb-sm-0">
                    <input type="text" className="form-control" name="mesg"  required/>
                  </div>
                </div>
                <div className="text-center">
                  <input  type="submit" name="submit" defaultValue="submit"
                    className="btn  btn-block rounded-0 py-2" style={{ backgroundColor: "black", color: "white" }}
                  />
                </div>
                </form>
              </div>
            </div>
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-sm-12 col-md-7">
            {/*Google map*/}
            <div className="mb-4">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.3322314896037!2d75.86473407528746!3d22.7114427793818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcbf0e556aa9%3A0x4a649de7ff2c1e4d!2sKiaan%20Technology!5e0!3m2!1sen!2sin!4v1733306031092!5m2!1sen!2sin"
            width="100%" height={450} frameBorder={0} style={{ border: 0 }} allowFullScreen="" aria-hidden="false"  tabIndex={0}/>
            </div>

            {/*Buttons*/}
            <div className="row text-center">
              <div className="col-md-4">
                <a className="bg-black px-3 py-2 rounded text-white mb-2 d-inline-block">
                  <i className="fa fa-map-marker" />
                </a>
                <p> Address: City: Guwahati Dist: Kamrup State: Assam Landmark: Kamakhya temple Pin: 781010 </p>
              </div>
              <div className="col-md-4">
                <a href="tel:+91-86389094798" className="bg-black px-3 py-2 rounded text-white mb-2 d-inline-block">
                  <i className="fa fa-phone" />
                </a>
                  <a href="tel:+91-86389094798"><p>+91-86389094798</p></a> 
              </div>
              <div className="col-md-4">
                <a className="bg-black px-3 py-2 rounded text-white mb-2 d-inline-block">
                  <i className="fa fa-envelope" />
                </a>
                <p>sunnykalita18@gmail.com</p>
              </div>
            </div>
          </div>
          {/*Grid column*/}
        </div>
      </section>

    </>
  );
};

export default Contact;
