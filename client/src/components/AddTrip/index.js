import React, { useState } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import { Navigate } from 'react-router-dom';
import Auth from '../../utils/auth'; 
import './AddTrip.css'; 
import AddMap from '../AddMap'


const AddTrip = ({ trip, onSubmit }) => {
  const [firstName, setFirstName] = useState(trip ? trip.firstName : '');
  const [lastName, setLastName] = useState(trip ? trip.lastName : '');
  const [fromDate, setFromDate] = useState(trip ? trip.fromDate : '');
  const [toDate, setToDate] = useState(trip ? trip.toDate : '');
  const [manager, setManager] = useState(trip ? trip.manager : '');
  const [approved, setApproved] = useState(trip ? trip.approved : false);

  // Check if user is authenticated
  if (!Auth.loggedIn()) {
    return <Navigate to="/" />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('handleSubmit', { firstName, lastName, fromDate, toDate, manager, approved }); // Added console log
    onSubmit({ firstName, lastName, fromDate, toDate, manager, approved });
  };

  return (
    <>
  
      <form onSubmit={handleSubmit} className="formStyle">
        <label htmlFor="firstName">First Name:</label>
        <input id="firstName" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

        <label htmlFor="lastName">Last Name:</label>
        <input id="lastName" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />

        <label htmlFor="fromDate">From Date:</label>
        <input id="fromDate" type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />

        <label htmlFor="toDate">To Date:</label>
        <input id="toDate" type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} />

        <label htmlFor="manager">Manager:</label>
        <input id="manager" type="text" value={manager} onChange={(e) => setManager(e.target.value)} />

        <label htmlFor="approved">Approved:</label>
        <input id="approved" type="checkbox" checked={approved} onChange={() => setApproved(!approved)} />

        <button type="submit" className="buttonStyle">Submit</button>
      </form>
      <div style={{ width: '100%', height: '400px' }}>
            {/* {<AddMap />} */}
      </div>
    </>
  );
};

export default AddTrip;
