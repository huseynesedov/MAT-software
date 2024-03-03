import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaCode, FaEnvelopeOpen, FaExternalLinkAlt, FaFileCode, FaLaptop, FaUserSecret } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
 const { t } = useTranslation()

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>
                {t("Skils.service")}
                </h2>
              <p>
              {t("Skils.privet")}
              </p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <FaCode className="icon" />
                  <h5>{t("Skils.web")}</h5>
                </div>
                <div className="item">
                  <FaFileCode className="icon" />
                  <h5>{t("Skils.web2")}</h5>
                </div>
                <div className="item">
                  <FaExternalLinkAlt className="icon" />
                  <h5>{t("Skils.design")}</h5>
                </div>
                <div className="item">
                <FaUserSecret className="icon" />
                  <h5>{t("Skils.security")}</h5>
                </div>
                <div className="item">
                <FaEnvelopeOpen className="icon" />
                  <h5>{t("Skils.mikro")}</h5>
                </div>
                <div className="item">
                <FaLaptop className="icon" />
                  <h5>{t("Skils.prog")}</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
