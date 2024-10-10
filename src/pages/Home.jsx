import React from 'react'
import Hero from "../components/Hero";
import Impact from "../components/Impact";
import Programs from "../components/Programs";
import Stories from "../components/Stories";
import SupportCause from "../components/SupportCause";
import Partners from "../components/Partners";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import Intro from "../components/Intro";
import Navbar from '../components/Navbar';
import Recognition from '../components/Recognition';

function Home() {
  return (
    <div>
      <Hero />
      <Intro />
      <Impact />
      <Programs />
      <Recognition/>
      {/* <Stories /> */}
      <Partners />
      <SupportCause />
      <Footer />
    </div>
  );
}

export default Home