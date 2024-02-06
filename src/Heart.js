import React, { useState, useEffect } from "react";
import axios from "axios";
import Title from "./components/Title";
import WebLayout from "./components/WebLayout";
import BannerSection from "./components/BannerSection";
import Footer from "./components/Footer";
import { index as Packs } from "./components/Packs/index";
import ContactBtn from "./components/ContactBtn";
import {Logo} from "./components/Svg-compoent/Logo";
// import Logo from "./images/SVG/Assure Logo.svg";
import Call from "./images/call icon.png";
import Whatsapp from "./images/whatsapp-2.webp";
import feature_icon_01 from "./images/feature01.webp";
import feature_icon_02 from "./images/feature02.webp";
import feature_icon_03 from "./images/feature03.webp";
import feature_icon_04 from "./images/feature04.webp";
import bannerImage from "./images/THYROID_Campaign_M2.jpg";
import bannerImage_1 from "./images/Thyroid Campaign.jpg";
import packsData from "./data/Heart.json";
import accordionData from "./data/HeartAccordions.json";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import Slider from "react-slick";

export const Heart = () => {
  // Submit API code start
  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    lp_name: "Thyroid Check-up",
  });

  const [errors, setErrors] = useState({
    name: "",
    mobileNumber: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (formData.mobileNumber.trim() === "") {
      newErrors.mobileNumber = "Mobile number is required";
      isValid = false;
    } else if (!/^[0-9]{10}$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber =
        "Invalid mobile number format (should be 10 digits)";
      isValid = false;
    }

    if (showThankYou) {
      document.getElementById("dataLayer_submit_btn").click();
      // console.log("boooyaaaaa");
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // console.log("Form data:", formData);

      fetch("https://www.assurepathlabs.com/api/submit_form.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          setIsSubmitting(false);

          console.log("Server response:", data);
          if (data.success) {
            setShowThankYou(true);
          }
        })
        .catch((error) => {
          setIsSubmitting(false);

          console.error("Error:", error);
        });
    }
  };

  // Submit API code end

  // Floating Button Code Start
  const [showFloatingButton, setShowFloatingButton] = useState(false);

  const handleFloatingButtonClick = () => {
    const formSection = document.getElementById("homeCollectionForm");
    formSection.scrollIntoView({ behavior: "smooth" });
  };

  const handleScroll = () => {
    const landingBannerSection = document.getElementById("landing_banner");
    const landingBannerRect = landingBannerSection.getBoundingClientRect();
    const scrollY = window.scrollY || window.pageYOffset;

    const threshold = 50;

    setShowFloatingButton(scrollY > landingBannerRect.bottom - threshold);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // Floating Button Code End
  const settings = {
    dots: true,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 900,
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: true, // Enable pause on hover
    responsive: [
      {
        breakpoint: 1500, // Small devices
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800, // Extra small devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
    <>
      {showThankYou && (
        <div className="thank-you-overlay">
          <div className="thank-you-popup">
            <button
              className="close-button"
              onClick={() => setShowThankYou(false)}
            >
              &times;
            </button>
            <h3>Thank you for submitting the form!</h3>
            {/* Add any other content you want to show in the pop-up */}
          </div>
        </div>
      )}
      <ContactBtn />
      <header>
        <div className="header">
          <div className="containers">
            <div className="row">
              <div className="header_cnt">
                <div className="logo">
                  <a href="#">
                    {/* <img src={Logo} alt="Assure-path-lab-logo " /> */}
                    <Logo/>
                  </a>
                </div>
                <a href="tel:01814667555" onclick={handlePhoneNumberClick}>
                  <div className="header_cnt_cntct">
                    <span>HOME COLLECTION</span>
                    <span
                      role="button"
                      tabindex="0"
                      // onkeyup="if (event.key === 'Enter') { dataLayer.push({'event': 'phone-number-click'}); }"
                    >
                      0181-4667555
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <BannerSection _id="landing_banner" _class="landing_banner Heart_banner">
        <div className="landing_banner_bg">
          <div className="landing_banner_img" id="homeCollectionForm">
            <img src={bannerImage} alt="" className="banner_mobile" />
            <img src={bannerImage_1} alt="" className="banner_desktop" />
            {/* <div className="banner_img_cnt">
              <p className="text-white">
                Comprehensive <br /> <span className="text-red-300">Heart</span>{" "}
                Checkup
              </p>
              <p className="hidden">PACKAGES IN JALANDHAR</p>
              <p>
                2570/- <span className="cross"></span>
              </p>
              <p>1800</p>
            </div> */}
          </div>
          <div className="contact_mobile_form">
            <h4>BOOK HOME COLLECTION</h4>
            <form onSubmit={handleSubmit}>
              <ul>
                <li>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name*"
                    value={formData.name}
                    onChange={handleChange}
                    className={
                      errors.name
                        ? "error-input"
                        : formData.name
                        ? "input-filled"
                        : ""
                    }
                  />
                </li>
                <li>
                  <input
                    type="tel"
                    name="mobileNumber"
                    placeholder="Mobile*"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    className={
                      errors.mobileNumber
                        ? "error-input"
                        : formData.mobileNumber
                        ? "input-filled"
                        : ""
                    }
                  />
                </li>
              </ul>
              <button
                type="submit"
                className={`enq_btn btn ${isSubmitting ? "disabled" : ""}`}
                disabled={isSubmitting}
                onclick={handleFormSubmittedClick}
              >
                <div>
                  <span>{isSubmitting ? "Submitting..." : "Submit"}</span>
                </div>
              </button>
              <a
                className="display_none"
                id="dataLayer_submit_btn"
                onclick={handleWhatsAppButtonClick}
              >
                hiddnBtn
              </a>
            </form>
            <div className="landing_banner_connct">
              <div className="social_connct">
                <a
                  onclick={handleWhatsAppButtonClick}
                  href="https://wa.me/+919716664040?text=Hi I am looking for health packages at %20assurepathlabs.com could you help me with those details?"
                >
                  <img src={Whatsapp} alt="" />
                  <span>Whatsapp</span>
                </a>
              </div>
              <div className="social_connct">
                <a onclick={handlePhoneNumberClick} href="tel:01814667555">
                  <img src={Call} alt="" />
                  <span>Call</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </BannerSection>
      <WebLayout _id="package" _class="package ">
        <Title>OUR POPULAR PACKAGES </Title>
        <div className="package_Scn">
          <Slider {...settings}>
            {packsData.map((pack, index) => (
              <div key={index}>
                <div className="package_cnt">
                  <Packs
                    Icon={pack.Icon}
                    PackageName={pack.PackageName}
                    Off={pack.Off}
                    ActualPrice={pack.ActualPrice}
                    DiscountPrice={pack.DiscountPrice}
                    TestInfo={pack.TestInfo}
                    TestParmeter={pack.TestParmeter}
                    PreTestInfo={pack.PreTestInfo}
                    TestInfoDate={pack.TestInfoDate}
                    Book={pack.book}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </WebLayout>
      <WebLayout _id="pathlab_cnt" _class="pathlab_cnt Heart_pathlab_cnt">
        <Title>WHY CHOOSE ASSURE PATHLABS</Title>
        <div className="pathlab_cnt_data">
          <div className="pathlab_feature">
            <span>
              <img src={feature_icon_01} alt="" />
            </span>
            <span>
              Assured <br /> Safety
            </span>
          </div>
          <div className="pathlab_feature">
            <span>
              <img src={feature_icon_04} alt="" />
            </span>
            <span>
              Free Home <br /> Sample Collection*
            </span>
          </div>
          <div className="pathlab_feature">
            <span>
              <img src={feature_icon_02} alt="" />
            </span>
            <span>
              Same Day <br /> Report
            </span>
          </div>
          <div className="pathlab_feature">
            <span>
              <img src={feature_icon_03} alt="" />
            </span>
            <span>
              Free Doctor <br /> Consultation
            </span>
          </div>
        </div>
      </WebLayout>
      <WebLayout>
        <Title>FREQUENTLY ASKED QUESTIONS</Title>
        <div className="faq_cnt">
          <Accordion allowZeroExpanded={true}>
            {accordionData.map((item, index) => (
              <AccordionItem key={index}>
                <AccordionItemHeading className="accordion__heading active">
                  <AccordionItemButton>{item.title}</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="accordion__panel active">
                  <p>{item.content.title}</p>
                  {item.content.points.length > 0 && (
                    <ul>
                      {item.content.points.map((point, pointIndex) => (
                        <li key={pointIndex}>{point}</li>
                      ))}
                    </ul>
                  )}
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </WebLayout>
      <section id="footer_scn">
        <Footer />
      </section>
      {showFloatingButton && (
        <div
          className="floating-button banner_desktop"
          onClick={handleFloatingButtonClick}
        >
          BOOK HOME COLLECTION
        </div>
      )}
    </>
  );
};
