import React, { useState, useEffect } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import Title from "./components/Title";
import WebLayout from "./components/WebLayout";
import BannerSection from "./components/BannerSection";
import Footer from "./components/Footer";
import { index as Packs } from "./components/Packs/index";
import ContactBtn from "./components/ContactBtn";
import { Logo } from "./components/Svg-compoent/Logo";
import Call from "./images/call icon.png";
import Whatsapp from "./images/whatsapp-2.webp";
import feature_icon_01 from "./images/feature01.webp";
import feature_icon_02 from "./images/feature02.webp";
import feature_icon_03 from "./images/feature03.webp";
import feature_icon_04 from "./images/feature04.webp";
import bannerImage from "./images/mobile_banner.SVG";
import bannerImage_1 from "./images/Assure Cancer Day Web banner_1080x700.jpg";
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

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  mobileNumber: Yup.string()
    .required("Mobile number is required")
    .matches(
      /^[0-9]{10}$/,
      "Invalid mobile number format (should be 10 digits)"
    ),
});

export const Heart = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      mobileNumber: "",
      lp_name: "cancer awareness",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        // Perform any pre-submission actions here, if needed

        // API endpoint for form submission
        const apiUrl = "https://www.assurepathlabs.com/api/submit_form.php";

        // Make the API request
        const response = await axios.post(apiUrl, values);

        // Handle the response from the server
        console.log("Server response:", response.data);

        // If submission is successful, show the thank you message
        if (response.data.success) {
          setShowThankYou(true);

          // Automatically hide the thank you message after 5 seconds
          setTimeout(() => {
            setShowThankYou(false);
          }, 5000);
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        // Reset the form state after submission
        setSubmitting(false);
      }
    },
  });

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    formik;

  const [showThankYou, setShowThankYou] = useState(false);

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
                    <Logo />
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
                Comprehensive <br /> <span className="text-red-300">Heart</span>
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
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.name && touched.name ? "error-input" : ""}
                  />
                  {errors.name && touched.name && (
                    <div className="error-message">{errors.name}</div>
                  )}
                </li>
                <li>
                  <input
                    type="tel"
                    name="mobileNumber"
                    placeholder="Contact Number*"
                    value={values.mobileNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.mobileNumber && touched.mobileNumber
                        ? "error-input"
                        : ""
                    }
                  />
                  {errors.mobileNumber && touched.mobileNumber && (
                    <div className="error-message">{errors.mobileNumber}</div>
                  )}
                </li>
              </ul>
              <button
                type="submit"
                className={`enq_btn btn ${
                  formik.isSubmitting ? "disabled" : ""
                }`}
                disabled={formik.isSubmitting}
              >
                <div>
                  <span>
                    {formik.isSubmitting ? "Submitting..." : "Submit"}
                  </span>
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
      <WebLayout _id="abt_cancer" _class="abt_cancer ">
        <Title>What is Cancer</Title>
        <div className="cancer_scn">
          <p>
            Cancer is the rapid spread of abnormal cells that grow beyond their
            usual boundaries, and can invade adjoining parts of the body or
            spread to other organs. Cancer can start almost anywhere in the
            human body when abnormal or damaged cells grow and multiply when
            they shouldn’t. These cells may form tumors, which are lumps of
            tissue. Tumors can be cancerous (malignant) or not cancerous
            (benign).
          </p>
          <p>
            Cancer can be detected by certain signs and symptoms or screening
            tests. Diagnosing cancer at its earliest stages often provides the
            best chance for a cure.
          </p>
        </div>
      </WebLayout>
      <WebLayout _id="type_cancer" _class="type_cancer ">
        <Title>TYPES OF CANCER</Title>
        <div className="cancer_typ_scn">
          <p>
            There are more than 100 types of cancer and these are usually named
            after the organ or tissue where it is formed. Lung, prostate,
            colorectal, stomach and liver cancer are the most common types of
            cancer in men, while breast, colorectal, lung, cervical and thyroid
            cancer are the most common among women.
          </p>
        </div>
      </WebLayout>
      <WebLayout _id="stmptons" _class="stmptons">
        <Title>SYMPTOMS</Title>
        <div className="stmptons_scn gap-5">
          <p className="stmptons_title">
            The signs and symptoms of cancer depend on which part of the body is
            affected. Some common signs and symptoms include:
          </p>
          <div className="symptoms">
            <div className="symptomsbox">
              <div className="symtionleft">
                <span>1</span>
              </div>
              <div className="symtionrgt">
                <p>
                  Lump or area of thickening that can be felt under the skin
                </p>
              </div>
            </div>
            <div className="symptomsbox">
              <div className="symtionleft">
                <span>2</span>
              </div>
              <div className="symtionrgt">
                <p>Weight changes including unexpected loss or gain</p>
              </div>
            </div>
            <div className="symptomsbox">
              <div className="symtionleft">
                <span>3</span>
              </div>
              <div className="symtionrgt">
                <p>Persistent cough or shortness of breath</p>
              </div>
            </div>
            <div className="symptomsbox">
              <div className="symtionleft">
                <span>4</span>
              </div>
              <div className="symtionrgt">
                <p>Persistent, unexplained fever or night sweats</p>
              </div>
            </div>
            <div className="symptomsbox">
              <div className="symtionleft">
                <span>5</span>
              </div>
              <div className="symtionrgt">
                <p>Unexplained bleeding or bruising</p>
              </div>
            </div>
            <div className="symptomsbox">
              <div className="symtionleft">
                <span>6</span>
              </div>
              <div className="symtionrgt">
                <p>
                  Skin changes, such as yellowing, darkening, or reddening of
                  the skin, sores that will not heal, or changes in existing
                  warts
                </p>
              </div>
            </div>
          </div>
        </div>
      </WebLayout>
      <WebLayout _id="riskfactor" _class="riskfactor">
        <Title>RISK FACTORS</Title>
        <div className="riskfact">
          <ul>
            <li>
              Chronic health conditions, such as ulcerative colitis, can
              markedly increase your risk of developing certain cancers
            </li>

            <li>
              Lifestyle factors such as heavy smoking and consumption of alcohol
              can also damage DNA and lead to cancer
            </li>
            <li>Environmental factors such as air and water pollution</li>
            <li>Inherited genetic defects</li>
          </ul>
        </div>
      </WebLayout>
      <WebLayout _id="package" _class="package ">
        <Title>GET EARLY SCREENING DONE WITH ASSURE</Title>
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
                  <p dangerouslySetInnerHTML={{ __html: item.content  .title }}></p>
                  {item.content.points.length > 0 && (
                    <ul>
                      {item.content.points.map((point, pointIndex) => (
                        <li key={pointIndex}>{point}</li>
                      ))}
                    </ul>
                  )}
                  {item.content1 && (
                    <>
                      <p dangerouslySetInnerHTML={{ __html: item.content1.title }}></p>
                      <ul>
                        {item.content1.points.map((point, pointIndex) => (
                          <li key={pointIndex}>{point}</li>
                        ))}
                      </ul>
                    </>
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
