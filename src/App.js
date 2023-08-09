import React, { useEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';

const disableArrowScroll = (event) => {
  if (event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    event.preventDefault();
  }
};


function App() {

  useEffect(() => {
    window.addEventListener('keydown', disableArrowScroll);

    return () => {
      window.removeEventListener('keydown', disableArrowScroll);
    };
  }, []);

  return (
    
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;