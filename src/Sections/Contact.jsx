import { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import TrackVisibility from 'react-on-screen';
import { useTranslation } from "react-i18next";

import emailjs from '@emailjs/browser';
export const Contact = () => {

  const { t } = useTranslation()
  const formInitialDetails = {
    user_name: '',
    user_email: '',
    user_phone: '',
    user_message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_n7lj6yp', 'template_uqu2ahe', form.current, '5_aesVuHw7cm4d8gA', {
      from_name: "",
      to_name: "",
      user_email: "",
      user_phone: "",
      user_message: "",
    })
      .then((result) => {
        console.log(result.text);
        console.log("message sent!")
      }, (error) => {
        console.log(error.text);
        console.log("error sending message, try again!")
      });
  };
  return (
    <section className="contact" id="connect">
      <div className="con">
        <div className="center234">
          <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.3522786280173!2d49.8560489755259!3d40.378884357942624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d0692e1950f%3A0x3848d827780cb3f9!2s16e%20Keykab%20Khanim%20Safaraliyeva%20St%2C%20Baku!5e0!3m2!1str!2saz!4v1708971184132!5m2!1str!2saz" className="map-img" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="fit">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>{t("Projects.contact")}</h2>
                  <form ref={form} onSubmit={sendEmail}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.from_name} name="from_name" placeholder="FirstName" onChange={(e) => onFormUpdate('from_name', e.target.value)} required />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.to_name} name="to_name" placeholder="LastName" onChange={(e) => onFormUpdate('to_name', e.target.value)} required />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" value={formDetails.user_email} name='user_email' placeholder="Email Address" onChange={(e) => onFormUpdate('user_email', e.target.value)} required />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" value={formDetails.user_phone} name="user_phone" placeholder="Phone No." onChange={(e) => onFormUpdate('user_phone', e.target.value)} required />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" value={formDetails.user_message} name='user_message' placeholder="Message" onChange={(e) => onFormUpdate('user_message', e.target.value)} required></textarea>
                        <button type="submit"><span>{t("Projects.send")}</span></button>
                      </Col>
                      {
                        status.message &&
                        <Col>
                          <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                        </Col>
                      }
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </div>
        </div>
      </div>
    </section>
  )
}
