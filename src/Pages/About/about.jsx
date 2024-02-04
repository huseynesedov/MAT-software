import Navv from "../../Components/Nav/Navv"; // Update import statement
import { Footer } from "../../Components/Footer/Footer";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

function About() {
    const { t } = useTranslation();

    return (
        <>
        <Helmet>
        <meta charSet="utf-8" />
        <title>MAT Software - About</title>
      </Helmet>
            <Navv />
            <div className="top-70"></div>
            <div className="job-infor-main">
                <h1>
                    {t("About.we")}
                </h1>
            </div>
            <div className="container-fluid py-5 my-5">
                <div className="container py-5">
                    <div className="row g-5">
                        <div
                            className="col-lg-5 col-md-6 col-sm-12 wow fadeIn"
                            data-wow-delay=".3s"
                        >
                            <div className="h-100 position-relative">
                                <img
                                    src="http://softwaremat.com/img/about-1.jpg"
                                    className="img-fluid w-75 rounded"
                                    alt=""
                                    style={{ marginBottom: "25%" }}
                                />
                                <div
                                    className="position-absolute w-75"
                                    style={{ top: "25%", left: "25%" }}
                                >
                                    <img
                                        src="http://softwaremat.com/img/about-2.jpg"
                                        className="img-fluid w-75 rounded"
                                        alt=""

                                        style={{ marginBottom: "25%" }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6 col-sm-12 wow fadeIn" data-wow-delay=".5s">
                            {/* <h5 className="orange">
                                {t("About.we")}
                            </h5> */}
                            <h1 className="mb-4">
                                {t("About.tekno")}
                            </h1>
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
                            </p>
                        </div>
                    </div>
                </div>
            </div >

            <Footer />
        </>
    );
}

export default About;

















