import React, { useState } from 'react';
import './App.css';
import './global.css';
import './content-style.css';
import Header from './Header';
import Footer from './Footer';
import  airPlaneImg  from './imgs/planet-airplane.png';
import api from './services/api';

function App() {

  // Getting the current date to validate date
  const today = new Date();

  // Setting a minimum date to date from and date to
  const minDate = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`;

  // Declaring Variables
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [people, setPeople] = useState('');

  // Sending a request to the backend
  async function regTravel(e) {
    e.preventDefault(e);

    const response = await api.post('/travel', {
      name,
      phone,
      origin,
      destination,
      dateFrom,
      dateTo,
      people,
    })
    
    console.log(response.data);
  }

  return (
    <div id="app">
      {/* Header - Begin */}
      <Header/>
      {/* Header - End */}

      {/* Forms and text  - Begin*/}
      <div className="intern-content">
        <div className="form-block">
          <h3>Register your travel</h3>
          <form onSubmit={regTravel}>
            <div className="input-block">
              <label htmlFor="name">Name</label>
              <input name="name" 
              id="name"
              required
              value={name}
              onChange = {e=> setName(e.target.value)}
              >
              </input>
            </div>

            <div className="input-block">
              <label>Phone</label>
              <input name="phone" 
              id="phone"
              type="tel"
              required
              placeholder="99 9999-9999"
              value={phone}
              onChange = {e=> setPhone(e.target.value)}
              >
              </input>
            </div>

            <div className="input-block">
              <label>Origin</label>
              <input name="origin" 
              id="origin"
              required
              value={origin}
              onChange = {e=> setOrigin(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label>Destination</label>
              <input name="destination" 
              id="destination"
              required
              value={destination}
              onChange = {e=> setDestination(e.target.value)}
              />
            </div>

            <div className="last-block-info">

              <div className="input-block date-info">
                <label>Date From</label>
                <input name="dateFrom" 
                id="dateFrom"
                type="date"
                min="today"
                min={minDate}
                required
                pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                value={dateFrom}
                onChange = {e=> setDateFrom(e.target.value)}
                />
              </div>
            
              <div className="input-block date-info">
                <label>Date To</label>
                <input name="dateTo" 
                id="dateTo"
                required
                type="date"
                min={minDate}
                pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                value={dateTo}
                onChange = {e=> setDateTo(e.target.value)}
                />
              </div>

              <div className="input-block number">
                <label>People</label>
                <input name="numberOfPeople" 
                id="numberOfPeople"
                required
                type="number"
                min="0"
                value={people}
                onChange = {e=> setPeople(e.target.value)}
                />
              </div>
            </div>

            <button type="submit">Submit</button>

          </form>

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
