import { FaCode, FaEnvelopeOpen, FaExternalLinkAlt, FaFileCode, FaLaptop, FaUserSecret } from "react-icons/fa";
import Navv from "../../Components/Nav/Navv"; // Update import statement
import { Footer } from "../../Components/Footer/Footer";

import './servis.css'
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
function Servis() {
    const { t } = useTranslation()
    return (
        <>
        <Helmet>
        <meta charSet="utf-8" />
        <title>MAT Software - Servis</title>
      </Helmet>
            <Navv />

            <div className="top-70"></div>
            <div className="job-infor-main">
                <h1>
                    {t("Skils.service")}
                </h1>
            </div>
            <div className="container-fluid services py-5 my-5">
                <div className="container py-5">
                    <div
                        className="text-center mx-auto pb-5 wow fadeIn"
                        data-wow-delay=".3s"
                        style={{ maxWidth: 600 }}
                    >
                        {/* <h5 className="orange">{t("Skils.service")}</h5> */}
                        <h1>{t("Skils.privet")}</h1>
                    </div>


                    <div className="row g-5 services-inner">
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
                            <div className="services-item">
                                <div className="p-4 text-center services-content">
                                    <div className="services-content-icon">
                                        <FaCode className="icon" />
                                        <h4 className="mb-3">{t("Skils.web")}</h4>
                                        <p className="mb-4">
                                            {t("Skils.info-web")}
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
                            <div className="services-item">
                                <div className="p-4 text-center services-content">
                                    <div className="services-content-icon">
                                        <FaFileCode className="icon" />
                                        <h4 className="mb-3">{t("Skils.web2")}</h4>
                                        <p className="mb-4">
                                            {t("Skils.info-web2")}
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
                            <div className="services-item">
                                <div className="p-4 text-center services-content">
                                    <div className="services-content-icon">
                                        <FaExternalLinkAlt className="icon" />
                                        <h4 className="mb-3">{t("Skils.design")}</h4>
                                        <p className="mb-4">
                                            {t("Skils.info-design")}
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
                            <div className="services-item">
                                <div className="p-4 text-center services-content">
                                    <div className="services-content-icon">
                                        <FaUserSecret className="icon" />
                                        <h4 className="mb-3">{t("Skils.security")}</h4>
                                        <p className="mb-4">
                                            {t("Skils.info-security")}
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
                            <div className="services-item">
                                <div className="p-4 text-center services-content">
                                    <div className="services-content-icon">
                                        <FaEnvelopeOpen className="icon" />
                                        <h4 className="mb-3">{t("Skils.mikro")}</h4>
                                        <p className="mb-4">
                                            {t("Skils.info-mikro")}
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
                            <div className="services-item">
                                <div className="p-4 text-center services-content">
                                    <div className="services-content-icon">
                                        <FaLaptop className="icon" />
                                        <h4 className="mb-3">{t("Skils.prog")}</h4>
                                        <p className="mb-4">
                                            {t("Skils.info-prog")}
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="top-125"></div>

            <Footer />
        </>
    );
}

export default Servis;
