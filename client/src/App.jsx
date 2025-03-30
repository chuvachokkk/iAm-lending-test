import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Steps from './components/Steps/Steps';
import Reviews from './components/Reviews/Reviews';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import ServiceGrid from './components/ServiceGrid/ServiceGrid';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ServiceGrid />
      <Steps />
      <About />
      <Portfolio />
      <Reviews />
      <Contacts />
      <Footer />
    </div>
  );
}
export default App;
