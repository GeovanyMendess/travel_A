// Main page component
import React from 'react';
import './App.css';
import './global.css';
import './content-style.css';
import Header from './Header';
import Footer from './Footer';
import  airPlaneImg  from './imgs/planet-airplane.png';
import Form from './Form';

function App() {
  return (
    <div id="app">
      {/* Header - Begin */}
      <Header/>
      {/* Header - End */}

      {/* Forms and text  - Begin*/}
      <div className="intern-content">
        <div className="form-block">
          <h3>Register your travel</h3>
          <Form/>
        </div>
        {/* Forms and text  - End*/}

        {/* About content - Begin */}
        <div className="about-us">
          <div className="text">
            <h1>About Travel A</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <img src= { airPlaneImg } alt="Earth planet and a airplane"></img>
        </div>
        {/* About content - End */}
      </div>
      {/* Footer - Begin */}
      <Footer/>
      {/* Footer - End */}
    </div>
  );
}

export default App;
