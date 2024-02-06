import React, { useState } from "react";
import axios from "axios";
import whatsapp from "../../images/whatsapp.png";
import facebook from "../../images/facebook.png";
import instagram from "../../images/instagram.png";
import tel from "../../images/call icon.png";
import message from "../../images/message.png";
import { IoLocationSharp } from "react-icons/io5";
import address from "../../images/location.png";
import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { LuMessageSquare } from "react-icons/lu";
const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    appointmentDate: "",
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Prepare the data for sending
    const dataToSend = {
      ...formData,
      // Include any additional fields required by the API
    };

    try {
      const response = await axios.post(
        "http://assure.triverseadvertising.com/api/submit_form.php",
        dataToSend
      );

      // Assuming the API returns a success status
      if (response.status === 200) {
        // Handle successful response
        console.log("Form submitted successfully");
        console.log(response);
        window.location.reload();
        // You might want to reset the form or show a success message
      } else {
        // Handle error response
        console.error("Error submitting form");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleWhatsAppButtonClick = () => {
    // Push the event to the data layer
    window.dataLayer.push({ event: "whatsapp-button-click" });

    // Your other logic for opening WhatsApp
  };

  const handlePhoneNumberClick = () => {
    window.dataLayer.push({ event: "phone-number-click" });
  };

  const handleFormSubmittedClick = () => {
    window.dataLayer.push({ event: "form-submitted-click" });
  };
  return (
    <div className="item footer">
      <div className="container">
        <div className="row">
          <div className="item__img-wrap dottedimg">
            <div
              className="item__img"
              style={{ transform: "translate3d(0px, -22.9747px, 0px)" }}
            ></div>
            <div className="enqufrm">
              <div className="web-container">
                <div className="footer">
                  <div className="ftr-btm">
                    <div className="contdtl">
                      <ul className="contact">
                        <li className="desktop-show">
                          <FiPhoneCall />
                          {/* <img src="imag  es/call.png" alt="Assure Call" /> */}
                          <a href="tel:01814667555" target="_blank">
                            0181-4667555
                          </a>
                        </li>
                        <li className="mobile-show">
                          {/* <img src={tel} alt="Assure Call" /> */}
                          <FiPhoneCall />
                          <label>
                            <a
                              href="tel:01814667555"
                              target="_blank"
                              onclick={handlePhoneNumberClick}
                            >
                              0181-4667555
                            </a>
                          </label>
                        </li>
                        <li>
                          {/* <img src={message} alt="Assure Message" /> */}
                          <LuMessageSquare />
                          <label>
                            <a
                              href="mailto:assurepathlabs@gmail.com"
                              target="_blank"
                            >
                              assurepathlabs@gmail.com
                            </a>
                          </label>
                        </li>
                        <li>
                          <IoLocationSharp />
                          {/* <img src={address} alt="Assure Location" /> */}
                          <label>
                            <a
                              href="https://goo.gl/maps/YXszaBedRk4jNfFbA"
                              target="_blank"
                            ></a>
                            3, Waryam Nagar, Vasant Vihar Road, Jalandhar
                          </label>
                        </li>
                        <li>
                          <a
                            href="https://www.facebook.com/assurepathlabsjalandhar/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaFacebookF />
                            {/* <img src={facebook} alt="Assure Facebook" /> */}
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/assurepathlabs/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {/* <img src={instagram} alt="Assure Instagram" /> */}
                            <AiOutlineInstagram />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://wa.me/+919716664040?text=Hii!%20assurepathlabs.com, I am looking for Health Packages."
                            target="_blank"
                            rel="noopener noreferrer"
                            onclick={handleWhatsAppButtonClick}
                          >
                            <AiOutlineWhatsApp />
                            {/* <img src={whatsapp} alt="Assure Whatsapp" /> */}
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="contdtl">
                      <ul className="enqfrm">
                        <form onSubmit={handleFormSubmit}>
                          <li>Book for home collection</li>
                          <li>
                            <input
                              type="text"
                              placeholder="Full Name"
                              className="input"
                              autoComplete="off"
                              name="name"
                              minLength="3"
                              required
                              pattern="[a-zA-Z\s]+"
                              value={formData.name}
                              onChange={handleInputChange}
                            />
                          </li>
                          <li>
                            <input
                              type="email"
                              placeholder="Enter Your Email"
                              className="input"
                              autoComplete="off"
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleInputChange}
                            />
                          </li>
                          <li>
                            <input
                              type="tel"
                              className="input"
                              placeholder="Enter Your Contact Number"
                              autoComplete="off"
                              name="mobile"
                              required
                              pattern="^[6-9]\d{9}$"
                              minLength="10"
                              maxLength="10"
                              value={formData.mobile}
                              onChange={handleInputChange}
                            />
                          </li>
                          <li>
                            <input
                              type="type"
                              name="appointmentDate"
                              placeholder="Enter Appointment Date"
                              id="filter-date2"
                              className="input "
                              autoComplete="off"
                              value={formData.appointmentDate}
                              onChange={handleInputChange}
                            />
                          </li>
                          <li>
                            <button
                              className="btn enq_btn"
                              id="sendenq"
                              onclick={handleFormSubmittedClick}
                            >
                              Submit
                            </button>
                          </li>
                        </form>
                      </ul>
                    </div>
                    <div className="contdtl">
                      <h6>View google map</h6>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d213.06122607184423!2d75.58613956092972!3d31.304308479039346!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1583417703109!5m2!1sen!2sin"
                        allowFullScreen
                        title="Google Map of Location"
                      ></iframe>
                    </div>
                  </div>
                </div>
                <div className="copyrgt">
                  <span>
                    *Home collection is free for bill amounts exceeding 1k and
                    within a 7km radius.
                  </span>
                  <p className="pull-left">
                    <a href="/">© 2023 | All Right Reserved |</a>
                    <a href="terms-conditions">Terms &amp; Conditions</a> |
                    <a href="privacy-policy">Privacy Policy</a> |
                    <a href="refund-cancellation">
                      Refund and Cancellation Policy
                    </a>
                  </p>
                  <p className="pull-right">
                    <a
                      href="https://www.triverseadvertising.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      designed &amp; developed by : triverse
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
