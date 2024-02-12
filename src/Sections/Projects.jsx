import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
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
                                  <h4>WMS</h4>
                                  <span>Goods Receipt, Shipment, Counting, Movement, Production, Product Finding, Reporting</span>
                                </div>
                              </div>
                            </Link>
                          </Col>
                          <Col size={12} sm={10} md={4}>
                            <Link to='/B2b' className="a">
                              <div className="proj-imgbx">
                                <img src={projImg2} />
                                <div className="proj-txtx">
                                  <h4>B2B projesi</h4>
                                  <span>Business to Business</span>
                                </div>
                              </div>
                            </Link>
                          </Col>
                          <Col size={12} sm={10} md={4}>
                            <Link to='/D2d' className="a">
                              <div className="proj-imgbx">
                                <img src={projImg3} />
                                <div className="proj-txtx">
                                  <h4>D2D</h4>
                                  <span>D2D is a project that shows the current and sales prices of customers who distribute orders.</span>
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
      <img className="background-image-right" src={colorSharp2} />
    </section>
  )
}
