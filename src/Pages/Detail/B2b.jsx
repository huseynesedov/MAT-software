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
                <title>MAT Software - B2b</title>
            </Helmet>

            <Navv />
            <div className="top-70"></div>
            <div className="job-infor-main">
                <h1>
                    {t("B2b.name")}
                </h1>
            </div>
            <div className="job-center-main">
                <div className="textMain">

                    <div className="div2 foto"></div>

                    <div className="xet"></div>
                    
                    <h5 className='h5'>
                        {t("B2b.title")}
                    </h5>

                </div>
            </div>
            <Footer />
        </>
    );
}

export default Arm;
