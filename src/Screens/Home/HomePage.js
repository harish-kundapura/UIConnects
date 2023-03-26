import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import style from "./HomePage.module.css";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import { Formik } from "formik";
import * as Yup from "yup";
import CustomInput from "../../Components/forms/CustomInput";
import SuccessModal from "../../Components/SuccessModal";
import { LoadingBar } from "../../Components/Loader";

const HomePage = () => {
  const [modalShow, setModalShow] = useState(false);
  const [filledValues, setFilledValues] = useState([]);
  const[loading,setLoading]=useState(false)
  const initialValues = {
    interest: "",
    name: "",
    mobile: "",
    email: "",
    message: "",
  };

  const interestData = [
    {
      label: "UI/UX design",
      value: "UI/UX design",
    },
    {
      label: "Web design",
      value: "Web design",
    },
    {
      label: "Graphic design",
      value: "Graphic design",
    },
    {
      label: "Design system",
      value: "Design system",
    },
    {
      label: "App  design",
      value: "App  design",
    },
    {
      label: "Other",
      value: "Other",
    },
  ];

  const socialMediaLinks = [
    {
      icon: faEnvelope,
      title: "hello@uiconnect.in",
    },
    {
      icon: faPhone,
      title: "+ 123456789",
    },
    {
      icon: faLocationDot,
      title: "123 Street 456 House",
    },
  ];

  const inputs = [
    {
      name: "name",
      type: "text",
      placeholder: "Your name!",
    },
    {
      name: "email",
      type: "text",
      placeholder: "Your email",
    },
    {
      name: "mobile",
      type: "tel",
      placeholder: "Mobile number",
      maxLength: 10,
    },
    {
      name: "message",
      type: "text",
      placeholder: "Your message",
    },
  ];

  const schema = Yup.object().shape({
    name: Yup.string()
      .trim()
      .matches(/^[a-z A-Z]+$/, "Please Enter a Valid Name")
      .max(20, "Name cannot be more than 20 characters")
      .required("Name is Required"),
    email: Yup.string()
      .trim()
      .email()
      .matches(
        /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        "Enter a valid Email Id"
      )
      .required("Email is Required"),
    message: Yup.string()
      .trim()
      .max(300, "Message cannot be more than 300 characters")
      .required("Message is Required"),
    mobile: Yup.string()
      .trim()
      .matches(/^[0-9]+$/, "Please Enter a Valid MobileNumber")
      .min(10, "Enter valid Mobile no")
      .max(10, "Mobile Number cannot be more than 10 digits")
      .required("Mobile Number is Required"),
    // daysOfWeek: Yup.array()
    //   .of(
    //     Yup.object().shape({
    //       dayOfWeek: Yup.string(),
    //       checked: Yup.boolean(),
    //     })
    //   )
    //   .compact((v) => !v.checked)
    //   .required("required-field"),
    interest: Yup.string().required("Interested is Required"),
  });

  const submitForm = (values, actions) => {
    setFilledValues(values);
    setLoading(true)
    setModalShow(true);
    
    // setTimeout(() => {
     
    //   // alert(JSON.stringify(values, null, 2));
    //   actions.setSubmitting(false);
    // }, 1000);
    actions.resetForm();
  };

  const inputValidator = (acceptOnly, setFieldValue, e) => {
    const { value, name } = e.target;

    if (acceptOnly === "alphabet") {
      if (/^[a-zA-Z]$/.test(value)) {
        setFieldValue(name, value);
      }
    } else {
      if (/^[0-9]$/.test(value)) {
        setFieldValue(name, value);
      }
    }
  };

  console.log("modalShow", modalShow);
  return (
    <Container>
      <Row className="mt-5">
        <Col lg={5} md={5}>
          <Row>
            <Col>
              <p className={`${style.textHeader}`}>
                Let’s discuss on something{" "}
                <span className={`${style.coolText}`}>cool</span> together
              </p>
            </Col>
          </Row>

          {socialMediaLinks.map(({ title, icon }, ind) => (
            <Row className="mt-4 ">
              <Col className={` text-left  `} lg={8} md={12} xs={12}>
                <div className={`${style.emailText}`}>
                  <span>
                    <FontAwesomeIcon icon={icon} style={{ color: "#A91079" }} />
                  </span>

                  <span className={`${style.innerText} ml-4 `}>{title}</span>
                </div>
              </Col>
            </Row>
          ))}

          <Row className={`${style.iconMain} text-left `}>
            <Col lg={2} md={3} sm={2} xs={3}>
              <FontAwesomeIcon
                icon={faFacebookF}
                style={{ color: "#fff" }}
                className={`${style.socialIcons}`}
              />
            </Col>
            <Col lg={2} md={3} sm={2} xs={3}>
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ color: "#fff" }}
                className={`${style.socialIcons}`}
              />
            </Col>
            <Col lg={2} md={3} sm={2} xs={2}>
              <FontAwesomeIcon
                icon={faTwitter}
                style={{ color: "#fff" }}
                className={`${style.socialIcons}`}
              />
            </Col>
          </Row>
        </Col>
        <Col lg={7} md={7}>
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={submitForm}
          >
            {({
              values,
              errors,
              touched,
              handleSubmit,
              handleChange,
              handleBlur,
              setFieldValue,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <div className={`${style.studentForm}`}>
                  <Container>
                    <Row className="mt-2">
                      <Col>
                        <p className={`${style.interestText}`}>
                          I’m interested in...
                        </p>
                      </Col>
                    </Row>

                    <Row className="mt-2">
                      {interestData?.map((interest) => (
                        <Col lg={4} md={4} sm={4} xs={4} className="mt-3">
                          <button
                            name="interest"
                            type="button"
                            onBlur={handleBlur}
                            onClick={() => {
                              setFieldValue("interest", interest.value);
                            }}
                            className={`${
                              values?.interest === interest?.value
                                ? style.activeRadioButton
                                : style.categoryButton
                            }`}
                          >
                            {interest.label}
                          </button>
                        </Col>
                      ))}
                    </Row>

                    {errors.interest && touched.interest && (
                      <div id="feedback" className={`${style.errorMessage} mt-2`}>
                        {errors.interest}
                      </div>
                    )}
                    {inputs.map((val, ind) => (
                      <Row className="mt-3">
                        <Col lg={12}>
                          <CustomInput
                            {...val}
                            className={`${style.inputBox} mb-2 `}
                          />
                        </Col>
                      </Row>
                    ))}

                    <Row className="mt-3">
                      <Col>
                        <button
                          className={`${style.button} mb-2 `}
                          type="submit"
                          disabled={isSubmitting}
                        >
                          {loading ? (

                            <LoadingBar/>
                          ) : (
                            <div className={`${style.buttonInside} `}>
                              <FontAwesomeIcon
                                icon={faLocationArrow}
                                className={`${style.sendIcon} `}
                              />
                              <span className={`${style.sendMessageText} `}>
                                Send Message
                              </span>
                            </div>
                          )}
                          
                        </button>
                        
                      </Col>
                    </Row>
                  </Container>
                </div>
              </form>
            )}
          </Formik>
        </Col>
      </Row>
      {modalShow && (
        <SuccessModal
          modalShow={modalShow}
          setModalShow={setModalShow}
          filledValues={filledValues}
          setLoading={setLoading}
        />
      )}
    </Container>
  );
};

export default HomePage;
