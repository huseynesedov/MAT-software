import React from 'react';
import './indexAll.css'
import { Helmet } from "react-helmet";

import Navv from "../../Components/Nav/Navv"; // Update import statement
import { Footer } from "../../Components/Footer/Footer";

import { useTranslation } from 'react-i18next';

function Arm() {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>MAT Software - D2d</title>
            </Helmet>

            <Navv />
            <div className="top-70"></div>
            <div className="job-infor-main">
                <h1>
                    {t("d2d.name")}
                </h1>
            </div>
            <div className="job-center-main">
                <div className="textMain">

                    <div className="div3 foto"></div>

                    <div className="xet"></div>
                    
                    <h5 className='h5'>

                        {t("d2d.title")}
                        <br />
                        <br />
                        {t("d2d.title2")}
                        <br />
                        <br />
                        {t("d2d.title3")}
                        <br />
                        <br />
                        {t("d2d.title4")}
                        <br />
                        <br />
                        {t("d2d.title5")}
                        <br />
                        <br />
                        {t("d2d.title6")}
                        <br />
                        <br />
                        {t("d2d.title7")}
                        <br />
                        <br />
                        {t("d2d.title8")}
                    </h5>

                </div>
            </div>
            <Footer />
        </>
    );
}

export default Arm;
