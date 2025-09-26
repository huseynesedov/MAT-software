import React from "react";
import { Banner } from "../../Sections/Banner";
import { Projects } from "../../Sections/Projects";
import { Skills } from "../../Sections/Skills";
import './css.css'
import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>MAT Software - Home</title>
      </Helmet>
      {/* <Navv /> */}
      <Banner />
      <Skills />
      <Projects />
      {/* <Contact id="#connect" />
      <Footer /> */}
    </>
  );
}

export default Home;
