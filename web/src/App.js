import React from 'react';
import './App.css';
import './global.css';
import './content-style.css';
import Header from './Header';
import Footer from './Footer';
import  airPlaneImg  from './imgs/planet-airplane.png';

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
          <form>
            <div className="input-block">
              <label htmlFor="name">Name</label>
              <input name="name" 
              id="name"
              required
              >
              </input>
            </div>

            <div className="input-block">
              <label>Phone</label>
              <input name="phone" 
              id="phone"
              type="tel"
              required
              >
              </input>
            </div>

            <div className="input-block">
              <label>Origin</label>
              <input name="origin" 
              id="origin"
              required
              >
              </input>
            </div>

            <div className="input-block">
              <label>Destination</label>
              <input name="destination" 
              id="destination"
              required
              >
              </input>
            </div>

            <div className="last-block-info">

              <div className="input-block date-info">
                <label>Date From</label>
                <input name="dateFrom" 
                id="dateFrom"
                type="date"
                min="today"
                min={new Date()}
                required
                >
                </input>
              </div>
            
              <div className="input-block date-info">
                <label>Date To</label>
                <input name="dateTo" 
                id="dateTo"
                required
                type="date"
                >
                </input>
              </div>

              <div className="input-block number">
                <label>People</label>
                <input name="numberOfPeople" 
                id="numberOfPeople"
                required
                type="number"
                min="0"
                >
                </input>
              </div>
            </div>

          </form>
          <button type="submit">Submit</button>
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
