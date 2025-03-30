import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Steps from './components/Steps';
import Reviews from './components/Reviews';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import ServiceGrid from './components/ServiceGrid';
// import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ServiceGrid />
      <Steps />
      {/* <About /> */}
      <Portfolio />
      <Reviews />
      <Contacts />
      <Footer />
    </div>
  );
}
export default App;
