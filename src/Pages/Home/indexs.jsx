import React from "react";
import { Banner } from "../../Sections/Banner";
import Navv from "../../Components/Nav/Navv"; // Update import statement
import { Footer } from "../../Components/Footer/Footer";
import { Contact } from "../../Sections/Contact";
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
      <Navv />
      <Banner />
      <Skills />
      <Projects />
      <Contact id="#connect" />
      <Footer />
    </>
  );
}

export default Home;
