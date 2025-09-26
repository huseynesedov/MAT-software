import React from 'react';
import './indexAll.css'
import { Helmet } from "react-helmet";

import Navv from "../../Components/Nav/Navv"; // Update import statement
import { Footer } from "../../Components/Footer/Footer";

import div1 from "../../assets/img/8.png";
import div4 from "../../assets/img/Resim1.jpg";
import div14 from "../../assets/img/Resim3.png";
import div15 from "../../assets/img/clock.jpg";
import div6 from "../../assets/img/Resim4.jpg";
import div7 from "../../assets/img/Resim13.jpg";
import div8 from "../../assets/img/Resim14.jpg";
import div13 from "../../assets/img/1000.jpg";
import div9 from "../../assets/img/Resim7.jpg";
import div10 from "../../assets/img/resim15.jpg";
import div11 from "../../assets/img/Resim9.png";
import div12 from "../../assets/img/Resim10.png";
import div17 from "../../assets/img/s1234.jpg";
import div18 from "../../assets/img/data.jpg";
import div19 from "../../assets/img/sifaris.jpg";

import { useTranslation } from 'react-i18next';

function Arm() {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>MAT Software - WMS</title>
            </Helmet>

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
                        <div className='fotoCenter JusEnd'>

                            {/* <div className="div1 foto"></div> */}
                            <img className='fotoDiv' src={div1} alt="" />
                        </div>
                    </div>
                    <div className="foto-contents">
                        <div className='fotoCenter '>

                            {/* <div className="div4 foto"></div> */}
                            <img className='fotoDiv' src={div4} alt="" />
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
                        <div className='fotoCenter JusEnd'>
                            {/* <div className="div15 foto"></div> */}
                            <img className='fotoDiv' src={div15} alt="" />
                        </div>
                    </div>
                    <div className="foto-contents">
                        <div className='fotoCenter'>

                            {/* <div className="div14 foto"></div> */}
                            <img className='fotoDiv' src={div14} alt="" />
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
                        <div className='fotoCenter JusEnd'>
                        <img className='fotoDiv' src={div6} alt="" />
                            {/* <div className="div6 foto"></div> */}
                        </div>
                    </div>
                    <div className="foto-contents">
                        <div className='fotoCenter'>

                            {/* <div className="div7 foto"></div> */}
                            <img className='fotoDiv' src={div7} alt="" />
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
                        <div className='fotoCenter JusEnd'>
                        <img className='fotoDiv' src={div8} alt="" />
                        </div>
                    </div>
                    <div className="foto-contents">
                        <div className='fotoCenter'>

                        <img className='fotoDiv' src={div9} alt="" />
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
                        <div className='fotoCenter JusEnd'>
                        <img className='fotoDiv' src={div10} alt="" />
                            {/* <div className="div10 foto"></div> */}
                        </div>
                    </div>
                    <div className="foto-contents">
                        <div className='fotoCenter'>
                        <img className='fotoDiv' src={div11} alt="" />
                            {/* <div className="div11 foto"></div> */}
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
                        <div className='fotoCenter JusEnd'>
                        <img className='fotoDiv' src={div12} alt="" />
                        </div>
                    </div>
                    <div className="foto-contents">
                        <div className='fotoCenter'>
                        <img className='fotoDiv' src={div17} alt="" />
                            {/* <div className="div17 foto"></div> */}
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
                        <div className='fotoCenter JusEnd'>
                        <img className='fotoDiv' src={div18} alt="" />
                            {/* <div className="div18 foto"></div> */}
                        </div>
                    </div>
                    <div className="foto-contents">
                        <div className='fotoCenter'>
                        <img className='fotoDiv' src={div13} alt="" />
                            {/* <div className="div13 foto"></div> */}
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
                        <div className='fotoCenter JusEnd'>
                        <img className='fotoDiv' src={div19} alt="" />
                            {/* <div className="div19 foto"></div> */}
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Arm;
