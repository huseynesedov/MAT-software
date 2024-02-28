import { Container, Row, Col } from "react-bootstrap";

import './footer.css'

import logo from "../../assets/img/MAT_Logo_Gold.png";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";

import { useTranslation } from "react-i18next";

import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">

          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <div className="contents">
              <div className="icon-div">

                <p className="icon">
                  <FaPhoneAlt className="icons" />
                  +994 70 600 32 64
                  <br />
                  +994 77 600 32 64
                </p>
              </div>
              <div className="icon-div">
                <p className="icon">
                  <IoMdMailOpen className="icons" />
                  <a href="malito:info@Softwaremat.com"></a>
                  info@softwaremat.com
                </p>
              </div>
              <p className="center">
                <IoLocationOutline /> 16e Keykab Khanim Safaraliyeva St, Baku
              </p>
            </div>

          </Col>
        </Row>
      </Container>
    </footer>
  )
}
