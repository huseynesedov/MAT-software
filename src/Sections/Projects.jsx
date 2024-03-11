import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

import projImg1 from "../assets/img/9.png";
import projImg2 from "../assets/img/b2bImg1-demo.jpg";
import projImg3 from "../assets/img/D2D.jpg";
import TrackVisibility from 'react-on-screen';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const Projects = () => {
  const { t } = useTranslation()
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>{t("Projects.proje")}</h2>
                  <p>{t("Projects.our")}</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">{t("nav.project")}</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">{t("Projects.we")}</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">{t("Projects.contact")}</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          <Col size={12} sm={10} md={4}>
                            <Link to='/Wms' className="a">
                              <div className="proj-imgbx">
                                <img src={projImg1} />
                                <div className="proj-txtx">
                                  <h4>{t("wms.name")}</h4>
                                  {/* <span>{t("wms.des")}</span> */}
                                </div>
                              </div>
                            </Link>
                          </Col>
                          <Col size={12} sm={10} md={4}>
                            <Link to='/B2b' className="a">
                              <div className="proj-imgbx">
                                <img src={projImg2} />
                                <div className="proj-txtx">
                                  <h4>{t("B2b.name")}</h4>
                                  <span>{t("B2b.des")}</span>
                                </div>
                              </div>
                            </Link>
                          </Col>
                          <Col size={12} sm={10} md={4}>
                            <Link to='/D2d' className="a">
                              <div className="proj-imgbx">
                                <img src={projImg3} />
                                <div className="proj-txtx">
                                  <h4>{t("d2d.name")}</h4>
                                  <span>{t("d2d.des")}</span>
                                </div>
                              </div>
                            </Link>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          {t("About.mat")}
                        </p>
                        <p className="mb-4">
                          {t("About.mat2")}
                        </p>
                        <p className="mb-4">
                          {t("About.mat3")}
                        </p>
                        <p className="mb-4">
                          {t("About.mat4")}
                        </p></Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
