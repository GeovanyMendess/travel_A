// Sucess page component
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './global.css';
import './sucess.css';

function Sucess() {
  return (
    <>
      <Header/>
      <div className="content">
        <p>
          Thank you for contact us!
        </p>
        <p>
          Soon we'll call you for more details.
        </p>
      </div>
      <Footer/>  
   </>
  ) 
}

export default Sucess;