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
                <title>MAT Software - WMS</title>
            </Helmet>

            <Navv />
            <div className="top-70"></div>
            <div className="job-infor-main">
                <h1 className='hh11'>
                    {t("wms.name")}
                </h1>
            </div>
            <div className="job-center-main s">
                <div className="textMain">
                <div className="topp20"></div>

                    <div className="foto-contents">
                        <div className='title-center'>
                            <h2 className="red">
                                {t("wmsTitle.title0")}
                            </h2>
                            <div className='tit'>
                                <p className="title-bot">

                                    {t("wmsTitle.title00")}
                                </p>
                                <h2 className="red">
                                    {t("wmsTitle.one")}
                                </h2>
                                <h2 className="red">
                                    {t("wmsTitle.two")}
                                </h2>
                                <h2 className="red">
                                    {t("wmsTitle.three")}
                                </h2>
                                <h2 className="red">
                                    {t("wmsTitle.four")}
                                </h2>
                                <h2 className="red">
                                    {t("wmsTitle.five")}
                                </h2>
                                <h2 className="red">
                                    {t("wmsTitle.six")}
                                </h2>
                            </div>
                        </div>
                        <div className='fotoCenter'>

                            <div className="div1 foto"></div>
                        </div>
                    </div>
                    <div className="foto-contents">
                        <div className='fotoCenter'>

                            <div className="div4 foto"></div>
                        </div>
                        <div className='title-centers'>
                            <h2 className="red">
                                {t("wmsTitle.tit")}
                            </h2>
                            <div className='tit tit2'>
                                <p className="title-bot">

                                    {t("wmsTitle.title000")}
                                </p>
                                <h2 className="red">
                                    {t("wmsTitle.one1")}
                                </h2>
                                <h2 className="red">
                                    {t("wmsTitle.two2")}
                                </h2>
                            </div>
                        </div>

                    </div>
                    <div className="foto-contents">
                        <div className='title-center'>
                            <h2 className="red">
                                {t("wmsTitle.wmsTitle10Name")}
                            </h2>
                            <div className='tit'>
                                <p className="title-bot">

                                    {t("wmsTitle.wmsTitle10One")}
                                </p>
                            </div>
                        </div>
                        <div className='fotoCenter'>
                            <div className="div15 foto"></div>
                        </div>
                    </div>
                    <div className="foto-contents">
                        <div className='fotoCenter'>

                            <div className="div14 foto"></div>
                        </div>
                        <div className='title-centers'>
                            <h2 className="red">
                                {t("wmsTitle.wmsTitle11Name")}
                            </h2>
                            <div className='tit tit2'>
                                <p className="title-bot">
                                    {t("wmsTitle.wmsTitle11One")}
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="foto-contents">
                        <div className='title-center'>
                            <h2 className="red">
                                {t("wmsTitle.wmsTitle1Name")}
                            </h2>
                            <div className='tit'>
                                <p className="title-bot">
                                    {t("wmsTitle.wmsTitle1One")}
                                </p>
                                <h2 className="red">
                                    {t("wmsTitle.wmsTitle1Two")}
                                </h2>
                            </div>
                        </div>
                        <div className='fotoCenter'>

                            <div className="div6 foto"></div>
                        </div>
                    </div>

                    <div className="foto-contents">
                        <div className='fotoCenter'>

                            <div className="div7 foto"></div>
                        </div>
                        <div className='title-centers'>
                            <h2 className="red">
                                {t("wmsTitle.wmsTitle2Name")}
                            </h2>
                            <div className='tit tit2'>
                                <h2 className="red">
                                        {t("wmsTitle.wmsTitle2OneHeader")}
                                </h2>
                                <p className="title-bot">
                                    {t("wmsTitle.wmsTitle2One")}
                                </p>
                                <h2 className="red">
                                        {t("wmsTitle.wmsTitle2TwoHeader")}
                                </h2>
                                <p className="title-bot">
                                    {t("wmsTitle.wmsTitle2Two")}
                                </p>
                                <h2 className="red">
                                        {t("wmsTitle.wmsTitle2ThreeHeader")}
                                </h2>
                                <p className="title-bot">
                                    {t("wmsTitle.wmsTitle2Three")}
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="foto-contents">
                        <div className='title-center'>
                            <h2 className="red">
                                {t("wmsTitle.wmsTitle3Name")}
                            </h2>
                            <div className='tit'>
                                <p className="title-bot">
                                    {t("wmsTitle.wmsTitle3One")}
                                </p>
                            </div>
                        </div>
                        <div className='fotoCenter'>

                            <div className="div8 foto"></div>
                        </div>
                    </div>

                    <div className="foto-contents">
                        <div className='fotoCenter'>

                            <div className="div9 foto"></div>
                        </div>
                        <div className='title-centers'>
                            <h2 className="red">
                                {t("wmsTitle.wmsTitle4Name")}
                            </h2>
                            <div className='tit tit2'>
                                <p className="title-bot">
                                    {t("wmsTitle.wmsTitle4One")}
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="foto-contents">
                        <div className='title-center'>
                            <h2 className="red">
                                {t("wmsTitle.wmsTitle5Name")}
                            </h2>
                            <div className='tit'>
                                <p className="title-bot">
                                    {t("wmsTitle.wmsTitle5One")}
                                </p>
                            </div>
                        </div>
                        <div className='fotoCenter'>

                            <div className="div10 foto"></div>
                        </div>
                    </div>

                    <div className="foto-contents">
                        <div className='fotoCenter'>

                            <div className="div11 foto"></div>
                        </div>
                        <div className='title-centers'>
                            <h2 className="red">
                                {t("wmsTitle.wmsTitle6Name")}
                            </h2>
                            <div className='tit tit2'>
                                <p className="title-bot">
                                    {t("wmsTitle.wmsTitle6One")}
                                </p>
                            </div>
                        </div>

                    </div>



                    <div className="foto-contents">
                        <div className='title-center'>
                            <h2 className="red">
                                {t("wmsTitle.wmsTitle7Name")}
                            </h2>
                            <div className='tit'>
                                <p className="title-bot">
                                    {t("wmsTitle.wmsTitle7One")}
                                </p>
                            </div>
                        </div>
                        <div className='fotoCenter'>

                            <div className="div12 foto"></div>
                        </div>
                    </div>

                    <div className="foto-contents">
                        <div className='fotoCenter'>

                            <div className="div17 foto"></div>
                        </div>
                        <div className='title-centers'>
                            <h2 className="red">
                                {t("wmsTitle.wmsTitle12Name")}
                            </h2>
                            <div className='tit tit2'>
                                <p className="title-bot">
                                    {t("wmsTitle.wmsTitle12One")}
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="foto-contents">
                        <div className='title-center'>
                            <h2 className="red">
                                {t("wmsTitle.wmsTitle13Name")}
                            </h2>
                            <div className='tit'>
                                <p className="title-bot">
                                    {t("wmsTitle.wmsTitle13One")}
                                </p>
                            </div>
                        </div>
                        <div className='fotoCenter'>

                            <div className="div18 foto"></div>
                        </div>
                    </div>
                    <div className="foto-contents">
                        <div className='fotoCenter'>

                            <div className="div13 foto"></div>
                        </div>
                        <div className='title-centers'>
                            <h2 className="red">
                                {t("wmsTitle.wmsTitle8Name")}
                            </h2>
                            <div className='tit tit2'>
                                <p className="title-bot">
                                    {t("wmsTitle.wmsTitle8One")}
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="foto-contents">
                        <div className='title-center'>
                            <h2 className="red">
                                {t("wmsTitle.wmsTitle9Name")}
                            </h2>
                            <div className='tit'>
                                <p className="title-bot">
                                    {t("wmsTitle.wmsTitle9One")}
                                </p>
                            </div>
                        </div>
                        <div className='fotoCenter'>

                            <div className="div19 foto"></div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
}

export default Arm;
