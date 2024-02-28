import { useTranslation } from "react-i18next";
import './index.css'

import { Container, Row, Col, Tab } from "react-bootstrap";
import projImg1 from "../../assets/img/project-img1.jpg";
import projImg2 from "../../assets/img/project-img2.png";
import projImg3 from "../../assets/img/project-img3.jpg";
import TrackVisibility from 'react-on-screen';

import Navv from "../../Components/Nav/Navv"; // Update import statement
import { Footer } from "../../Components/Footer/Footer";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
function App() {
    const { t } = useTranslation();
    return (

        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>MAT Software - Projects</title>
            </Helmet>
            <Navv />

            <div className="top-70"></div>
            <div className="job-infor-main">
                <h1>
                    {t("Projects.proje")}
                </h1>
            </div>
            <section className="project" id="projects">
                <Container>
                    <Row>
                        <Col size={12}>
                            <TrackVisibility>
                                {({ isVisible }) =>
                                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                            <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                                <Tab.Pane eventKey="first">
                                                    <Row>
                                                        <Col size={12} sm={10} md={4}>
                                                            <Link to='/Wms' className="a">
                                                                <div className="proj-imgbx">
                                                                    <img src={projImg1} />
                                                                    <div className="proj-txtx">
                                                                        <h4>{t("wms.name")}</h4>
                                                                        <span>{t("wms.des")}</span>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </Col>
                                                        <Col size={12} sm={10} md={4}>
                                                            <Link to='/B2b' className="a">
                                                                <div className="proj-imgbx">
                                                                    <img src={projImg2} />
                                                                    <div className="proj-txtx">
                                                                        <h4>{t("b2b.name")}</h4>
                                                                        <span>{t("b2b.des")}</span>
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

                                            </Tab.Content>
                                        </Tab.Container>
                                    </div>}
                            </TrackVisibility>
                        </Col>
                    </Row>
                </Container>
                
            </section>

            <div className="top-125"></div>

            <Footer />
        </>
    );
}

export default App;
