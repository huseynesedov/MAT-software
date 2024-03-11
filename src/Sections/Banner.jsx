
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { useTranslation } from "react-i18next";
import TrackVisibility from 'react-on-screen';
import { Link } from "react-router-dom";

export const Banner = () => {
  const { t } = useTranslation()


  return (

    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={10} md={6} xl={10}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">
                    <Link to="/About">
                  <button onClick={() => console.log('connect')}>{t("Home.we")} <ArrowRightCircle size={25} /></button>
                  </Link>
                  </span>
                  <h1>
                    {t("Home.tekno")}
                  </h1>
                  <p>
                    {/* {t("Home.mat")} */}
                  </p>
                  {/* <Link to="/About">
                    <button onClick={() => console.log('connect')}>{t("Home.we")} <ArrowRightCircle size={25} /></button>
                  </Link> */}
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

    </section>
  )
}
