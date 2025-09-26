import { useTranslation } from "react-i18next";
import './index.css'

import { Container, Row, Col, Tab } from "react-bootstrap";
import projImg1 from "../../assets/img/mat3.jpg";
import projImg2 from "../../assets/img/mat5.jpg";
import projImg3 from "../../assets/img/mat4.jpg";
import TrackVisibility from 'react-on-screen';

import Navv from "../../Components/Nav/Navv"; 
import { Footer } from "../../Components/Footer/Footer";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function App() {
    const { t } = useTranslation();

    // 🔥 Projeler array
    const projects = [
        {
            id: 1,
            img: projImg1,
            link: "/Wms",
            title: t("wms.name"),
            desc: t("wms.des"),
        },
        {
            id: 2,
            img: projImg2,
            link: "/B2b",
            title: t("B2b.name"),
            desc: t("B2b.des"),
        },
        {
            id: 3,
            img: projImg3,
            link: "/D2d",
            title: t("d2d.name"),
            desc: t("d2d.des"),
        },
    ];

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>MAT Software - Projects</title>
            </Helmet>

            <div className="top-70"></div>
            <div className="job-infor-main">
                <h1>{t("Projects.proje")}</h1>
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
                                                        {projects.map((project) => (
                                                            <Col key={project.id} size={12} sm={10} md={4}>
                                                                <Link to={project.link} className="a">
                                                                    <div className="proj-imgbx">
                                                                        <img src={project.img} alt={project.title} />
                                                                        <div className="proj-txtx">
                                                                            <h4>{project.title}</h4>
                                                                            {project.desc && <span>{project.desc}</span>}
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </Col>
                                                        ))}
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
        </>
    );
}

export default App;
