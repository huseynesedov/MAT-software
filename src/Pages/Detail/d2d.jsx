import React from 'react';
import './indexAll.css'
import { Helmet } from "react-helmet";

import Navv from "../../Components/Nav/Navv"; // Update import statement
import { Footer } from "../../Components/Footer/Footer";
import div23 from "../../assets/img/6.png"
import div24 from "../../assets/img/24.jpg"

import { useTranslation } from 'react-i18next';

function Arm() {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>MAT Software - D2D</title>
            </Helmet>

            <Navv />
            <div className="top-70"></div>
            <div className="job-infor-main">
                <h1>
                    {t("d2d.name")}
                </h1>
            </div>
            <div className="job-center-main s">
                <div className="textMain">
                    <div className="topp20"></div>

                    <div className="foto-contents">
                        <div className='title-center'>
                            <h2 className="red">
                                {t("D2DTitle.D2DTitle1Name")}
                            </h2>
                            <div className='tit'>
                                <p className="title-bot">

                                    {t("D2DTitle.D2DTitle1One")}
                                </p>
                            </div>
                        </div>
                        <div className='fotoCenter'>
                            {/* <div className="div23 foto"></div> */}
                            <img className='fotoDiv' src={div23} alt="" />
                        </div>
                    </div>
                    <div className="foto-contents">
                        <div className='fotoCenter'>
                            {/* <div className="div24 foto"></div> */}
                            <img className='fotoDiv' src={div24} alt="" />
                        </div>
                        <div className='title-centers'>
                            <h2 className="red">
                                {t("D2DTitle.D2DTitle2Name")}
                            </h2>
                            <div className='tit tit2'>
                                <p className="title-bot">

                                    {t("D2DTitle.D2DTitle2OneHeader")}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div >
            <Footer />
        </>
    );
}

export default Arm;
