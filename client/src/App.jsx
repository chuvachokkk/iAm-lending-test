import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Steps from './components/Steps';
import Reviews from './components/Reviews';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import ServiceGrid from './components/Services';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <ServiceGrid />
      {/* <Services /> */}
      <Portfolio />
      <Steps />
      <Reviews />
      <Contacts />
      <Footer />
    </div>
  );
}
export default App;
