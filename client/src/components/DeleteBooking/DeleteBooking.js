import './DeleteBooking.scss'
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import {Component} from 'react';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

const calendarDateFormat = (dateInput) => {
    const [month, day, year] = new Date(dateInput)
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
}

export const DeleteBooking = (props) => {
    const condoId = props.match.params.condoId;
    const residentId = props.match.params.residentId;
    const bookingId = props.match.params.bookingId;
    const [amenities, setAmenities] = useState([]);
    const [condo_id, setCondoId] = useState(condoId);
    const [resident_id, setResidentId] = useState(residentId);
    const [amenity_id, setAmenityId] = useState(1);
    const [name, setName] = useState(1);
    const [date, setDate] = useState("");
    const [start_time, setStartTime] = useState("");
    const [end_time, setEndTime] = useState("");
  
    useEffect(() => {
      axios
          .get(`${SERVER_URL}/condos/${condoId}/amenities`)
          .then((result) => {
              setAmenities(result.data)
          })
          .catch((err) => {
              console.log(err)
          })     
    }, [])

    useEffect(() => {
        axios
            .get(`${SERVER_URL}/bookings/${bookingId}`)
            .then((result) => {
                setName(result.data.name)
                setAmenityId(result.data.amenity_id)
                setDate(calendarDateFormat(result.data.date))
                setStartTime(result.data.start_time)
                setEndTime(result.data.end_time)
                console.log(result.data)
            })
            .catch((err) => {
                console.log(err)
            })     
      }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
          .delete(`${SERVER_URL}/bookings/${bookingId}`)
          .then(() => {
              props.history.push(`/condo/${condoId}/resident/${residentId}/amenities`)
              alert('Booking was deleted')
          })
          .catch((err) => {
              console.log(err)
          })
        e.target.reset()
        }

        return (
            <section className='deleteBooking'>
                <h2 className='deleteBooking__header'>Delete Booking</h2>
                <form className='deleteBooking__form' onSubmit={handleSubmit}>
                    <select name="deleteBooking__list" id="deleteBooking__list" className="deleteBooking__List" disabled>
                            <option value={name} className='deleteBooking__options'>{name}</option>
                    </select>
                    <input 
                    type="date" 
                    id="date" 
                    name="date" 
                    min={getTodayString()} 
                    value={date}
                    onChange={(e) => setDate(e.target.value)} 
                    className='deleteBooking__date'
                    disabled
                    />
                    <input 
                    type="time" 
                    id="start_time" 
                    name="start_time" 
                    className='deleteBooking__time'
                    value={start_time}
                    onChange={(e) => setStartTime(e.target.value)} 
                    disabled
                    />
                    <input 
                    type="time" 
                    id="end_time" 
                    name="end_time" 
                    className='deleteBooking__time'
                    value={end_time}
                    onChange={(e) => setEndTime(e.target.value)} 
                    disabled
                    />
                    <button type='submit' className='button' onSubmit={handleSubmit}>Delete Booking</button>
                </form>
            </section>
        )
}