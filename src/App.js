import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Hero from './components/Hero/Hero';
import PopularModels from './components/PopularModels/PopularModels';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <>
      <NavBar />
      <main>
        <Jumbotron />
        <hr />
        <Hero />
        <hr />
        <PopularModels />
      </main>
      <Footer />
    </>
  );
}
export default App;
