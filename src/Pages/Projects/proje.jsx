import { useTranslation } from "react-i18next";
import './index.css'

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "../../Sections/ProjectCard";
import projImg1 from "../../assets/img/project-img1.png";
import projImg2 from "../../assets/img/project-img2.png";
import projImg3 from "../../assets/img/project-img3.png";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';

import Navv from "../../Components/Nav/Navv"; // Update import statement
import { Footer } from "../../Components/Footer/Footer";
import { Helmet } from "react-helmet";
function App() {
    const { t } = useTranslation();
    const projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
    ];

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
                                        {/* <h2>{t("Projects.proje")}</h2> */}
                                        <p>{t("Projects.our")}</p>
                                        <Tab.Container id="projects-tabs" defaultActiveKey="first">

                                            <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                                <Tab.Pane eventKey="first">
                                                    <Row>
                                                        {
                                                            projects.map((project, index) => {
                                                                return (
                                                                    <ProjectCard
                                                                        key={index}
                                                                        {...project}
                                                                    />
                                                                )
                                                            })
                                                        }
                                                    </Row>
                                                </Tab.Pane>
                                               
                                            </Tab.Content>
                                        </Tab.Container>
                                    </div>}
                            </TrackVisibility>
                        </Col>
                    </Row>
                </Container>
                <img className="background-image-right" src={colorSharp2} />
            </section>

            <div className="top-125"></div>

            <Footer />
        </>
    );
}

export default App;
