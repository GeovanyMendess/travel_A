import React, { useState } from 'react';
import api from './services/api';
import masks from './utils/masks';
import DatePicker from './DatePicker';
import moment from 'moment';
import { useHistory } from 'react-router-dom';

export default function Form() {

  // Declaring states
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [people, setPeople] = useState('');
  const [today, setToday] = useState(moment().format('YYYY[-]MM[-]DD'));
  const [auth, setAuth] = useState(false);

  let history = useHistory();

  // Sending a request to server
  async function handleSubmit(e) {
    e.preventDefault(e);

    // Sending a request to database
    const response = await api.post('/travel', {
      name,
      phone,
      origin,
      destination,
      dateFrom,
      dateTo,
      people
    })
    // Calling the sucess page
    if(!!response){
      history.push('/Sucess');
    }  
  }   
  // Returning form component
  return(
    <form 
      onSubmit={handleSubmit}>
        <div className="input-block">
          <label htmlFor="name">Name</label>
          <input name="name" 
          id="name"
          required
          value={name}
          onChange = {e => setName(masks.maskName(e.target.value))}
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
        min="14"
        max="15"
        value={phone}
        onChange = {e=>setPhone(masks.maskPhone(e.target.value))}
        >
        </input>
      </div>

      <div className="input-block">
        <label>Origin</label>
        <input name="origin" 
        id="origin"
        required
        value={origin}
        onChange = {e=> setOrigin(masks.maskName(e.target.value))}
        />
      </div>

      <div className="input-block">
        <label>Destination</label>
        <input name="destination" 
        id="destination"
        required
        value={destination}
        onChange = {e=> setDestination(masks.maskName(e.target.value))}
        />
      </div>

      <div className="last-block-info">

        <div className="input-block date-info">
          <label>Date From</label>
          <DatePicker name="dateFrom" 
          id="dateFrom"
          type="date"
          required
          min={today}
          value={dateFrom}
          onChange = {e=> setDateFrom(e.target.value)}
          /> 
        </div>
      
        <div className="input-block date-info">
          <label>Date To</label>
          <DatePicker name="dateTo" 
          id="dateTo"
          required
          type="date"
          min={dateFrom}
          value={dateTo}
          onChange = {e => setDateTo(e.target.value)}
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
  );
  
}

