import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import 'react-bootstrap'
import { useTranslation } from "react-i18next";
import '../../Pages/Home/css.css'
import { GrLanguage } from "react-icons/gr";

import './index.css'
import logo from '../../assets/img/MAT_Logo_Gold.png';
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";


const dillerTablo = [
  { name: "Azerbaycan", code: "az" },
  { name: "Русский", code: "ru" },
  { name: "English", code: "en" },
  { name: "Türkçe", code: "tr" },
];

function Navv() {

  const [scrolled, setScrolled] = useState(false);
  const [dropDown, setDropDown] = useState("");

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const { t, i18n } = useTranslation();


  const dilChange = (dil) => {
    setDropDown("tr");
    i18n.changeLanguage(dil.code);
    toast.success(dil.name)
    localStorage.setItem('language', dilChange.code);
  };

  return (

    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navbarss">

            <Link to="/">
              <p>
                {t("nav.home")}
              </p>
            </Link>
            <Link to="/About">
              <p>
              {t("nav.we")}
              </p>
            </Link>
            <Link to="/Projects">
              <p>
              {t("nav.project")}
              </p>
            </Link>
            <Link to="/Servis">
              <p>
              {t("nav.service")}
              </p>
            </Link>
            <a href="/#connect">
              <p>
              {t("nav.contact")}
              </p>
            </a>
          </Nav>

          <span className="navbar-text">
            <a href="https://wa.me/+994706003264" target="_blank">
              <FaWhatsapp className="what" />
            </a>

          </span>
          <div className="icons">

            <div className="flex-row">
              <div className="d-flex col gap-2">
                <div className="flex justify-content-center">
                  <div className="dropdown">
                    <GrLanguage
                      style={{ fontSize: "30px" }}
                      className="cursor-pointer dropdown-toggle dunya-logo "
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      onClick={() => setDropDown("show")}
                      onMouseMove={() => setDropDown("show")}
                    />
                    <div
                      className={`dropdown-menu ${dropDown}`}
                      aria-labelledby="dropdownMenuButton"
                      aria-expanded="true"
                      onMouseLeave={() => setDropDown("")}
                    >
                      {dillerTablo.map((dil, index) => (
                        <span
                          key={index}
                          className="dropdown-item cursor-pointer"
                          onClick={() => dilChange(dil)}
                        >
                          {dil.name}
                        </span>
                      ))}

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </Navbar.Collapse>
      </Container>
    </Navbar >

  )
}


export default Navv;