import React from 'react';
import './indexAll.css'
import { Helmet } from "react-helmet";

import Navv from "../../Components/Nav/Navv"; // Update import statement
import { Footer } from "../../Components/Footer/Footer";

import div20 from "../../assets/img/b2bImg2.jpg"
import div21 from "../../assets/img/mat1.jpg"
import div22 from "../../assets/img/b2bImg4.jpg"

import { useTranslation } from 'react-i18next';

function Arm() {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>MAT Software - B2b</title>
            </Helmet>

            <div className="top-70"></div>
            <div className="job-infor-main">
                <h1 className='hh11'>
                    {t("B2b.name")}
                </h1>
            </div>
            <div className="job-center-main s">
                <div className="textMain">
                    <div className="topp20"></div>

                    <div className="foto-contents">
                        <div className='title-center'>
                            <h2 className="red">
                                {t("B2BTitle.B2BTitle1Name")}
                            </h2>
                            <div className='tit'>
                                <p className="title-bot">

                                    {t("B2BTitle.B2BTitle1One")}
                                </p>
                            </div>
                        </div>
                        <div className='fotoCenter JusEnd'>
                            {/* <div className="div20 foto"></div>
                             */}
                             <img className='fotoDiv' src={div20} alt="" />
                        </div>
                    </div>
                    <div className="foto-contents">
                        <div className='fotoCenter'>
                            {/* <div className="div21 foto"></div> */}
                            <img className='fotoDiv' src={div21} alt="" />

                        </div>
                        <div className='title-centers'>
                            <h2 className="red">
                                {t("B2BTitle.B2BTitle2Name")}
                            </h2>
                            <div className='tit tit2'>
                                <p className="title-bot">

                                    {t("B2BTitle.B2BTitle2OneHeader")}
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="foto-contents">
                        <div className='title-center'>
                            <h2 className="red">
                                {t("B2BTitle.B2BTitle3Name")}
                            </h2>
                            <div className='tit'>
                                <p className="title-bot">

                                    {t("B2BTitle.B2BTitle3OneHeader")}
                                </p>
                                
                                <h2 className="red">
                                    {t("B2BTitle.B2BTitle3One")}
                                </h2>
                                <h2 className="red">
                                    {t("B2BTitle.B2BTitle3Two")}
                                </h2>
                                <h2 className="red">
                                    {t("B2BTitle.B2BTitle3Three")}
                                </h2>
                            </div>
                        </div>
                        <div className='fotoCenter JusEnd'>
                            {/* <div className="div22 foto"></div> */}
                            <img className='fotoDiv' src={div22} alt="" />

                        </div>
                    </div>

            </div>
        </div >
        </>
    );
}

export default Arm;
