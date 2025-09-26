import { useTranslation } from "react-i18next";
// import './index.css'

import { Container, Row, Col, Tab } from "react-bootstrap";

import activegroup from "../../assets/img/referance/activegroup.jpeg";
import Andros_logo from "../../assets/img/referance/Andros_logo.png";
import lukoil from "../../assets/img/referance/Lukoil_logo.png";
import megatek from "../../assets/img/referance/Megatek.jpg";
import CinarBoru from "../../assets/img/referance/cinarboru.png";
import GenelOto from "../../assets/img/referance/geneloto.png";
import İscoPart from "../../assets/img/referance/iscoparts_logo.jpeg";
import Uplass from "../../assets/img/referance/logouplass.png";
import Mercedes from "../../assets/img/referance/mercedess.png";
import Renault from "../../assets/img/referance/renault.png";
import Speedol from "../../assets/img/referance/speedol.png";
import TeknikDizel from "../../assets/img/referance/teknikdizel.png";
import Usakligil from "../../assets/img/referance/usakligil.png";


import TrackVisibility from 'react-on-screen';

import { Helmet } from "react-helmet";

function App() {
    const { t } = useTranslation();

    const projects = [
        {
            id: 1,
            img: activegroup,
            title: "Active Group",
        },
        {
            id: 2,
            img: Andros_logo,
            title: "Andros",
        },
        {
            id: 3,
            img: lukoil,
            title: "Lukoil",
        },
        {
            id: 4,
            img: megatek,
            title: "Megatek",
        },
        {
            id: 5,
            img: CinarBoru,
            title: "Cinar Boru",
        },
        {
            id: 6,
            img: GenelOto,
            title: "Genel Oto",
        },
        {
            id: 7,
            img: İscoPart,
            title: "İscoPart",
        },
        {
            id: 8,
            img: Uplass,
            title: "Uplass",
        },
        {
            id: 9,
            img: Mercedes,
            title: "Mercedess",
        },

        {
            id: 10,
            img: Renault,
            title: "Renault",
        },
        {
            id: 11,
            img: Speedol,
            title: "Speedol",
        },
        {
            id: 12,
            img: TeknikDizel,
            title: "TeknikDizel",
        },
        {
            id: 13,
            img: Usakligil,
            title: "Uşaklıgil",
        },
    ];

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>MAT Software - Our references</title>
            </Helmet>

            <div className="top-70"></div>
            <div className="job-infor-main">
                <h1>{t("referance.name")}</h1>
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
                                                                <div className="proj-imgbx">
                                                                    <img src={project.img} alt={project.title} style={{ objectFit: "contain" }} />
                                                                    <div className="proj-txtx">
                                                                        <h4>{project.title}</h4>
                                                                    </div>
                                                                </div>
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
