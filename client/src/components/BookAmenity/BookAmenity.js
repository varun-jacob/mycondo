import './BookAmenity.scss'
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

export const BookAmenity = (props) => {
    const condoId = props.match.params.condoId;
    const residentId = props.match.params.residentId;
    const [amenities, setAmenities] = useState([]);
    const [condo_id, setCondoId] = useState(condoId);
    const [resident_id, setResidentId] = useState(residentId);
    const [amenity_id, setAmenityId] = useState("");
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
    }, [amenities])

    const handleSubmit = (e) => {
        e.preventDefault();
        setCondoId(condoId)
        setResidentId(residentId)
        setAmenityId(1);
        setDate(e.target.date.value);
        setStartTime(e.target.start_time.value);
        setEndTime(e.target.end_time.value);
        console.log(`condo_id: ${condo_id}`)
        console.log(`resident_id: ${resident_id}`)
        console.log(`amenity_id: ${amenity_id}`)
        console.log(`date: ${date}`)
        console.log(`start_time: ${start_time}`)
        console.log(`end_time: ${end_time}`)

        axios
          .post(`${SERVER_URL}/bookings`,{
            condo_id: condo_id,
            resident_id: resident_id,
            amenity_id: amenity_id,
            date: date,
            start_time: start_time,
            end_time: end_time,
            }
          )
          .then(() => {
              props.history.push(`/condo/${condoId}/resident/${residentId}/amenities`)
              alert('Booking is complete')
          })
          .catch((err) => {
              console.log(err)
          })
        e.target.reset()
        }

        return (
            <section className='bookAmenity'>
                <h2 className='bookAmenity__header'>Book Amenity</h2>
                <form className='bookAmenity__form' onSubmit={handleSubmit}>
                    <select name="bookAmenity__list" id="bookAmenity__list" className="bookAmenity__List" onChange={(e) => setAmenityId(e.target.value)}  required>
                            <option value="" className='bookAmenity__options'>Select an Amenity</option>
                            {amenities.map(amenity => {
                                return (
                                    <option key={amenity.id} id={amenity.id} value={amenity.id} className='bookAmenity__options'>{amenity.name}</option>
                                )
                            })}
                    </select>
                    <input 
                    type="date" 
                    id="date" 
                    name="date" 
                    min={getTodayString()} 
                    value={date}
                    onChange={(e) => setDate(e.target.value)} 
                    className='bookAmenity__date'
                    required
                    />
                    <input 
                    type="time" 
                    id="start_time" 
                    name="start_time" 
                    className='bookAmenity__time' 
                    onChange={(e) => setStartTime(e.target.value)} 
                    required
                    />
                    <input 
                    type="time" 
                    id="end_time" 
                    name="end_time" 
                    className='bookAmenity__time' 
                    onChange={(e) => setEndTime(e.target.value)} 
                    required
                    />
                    <button type='submit' className='button' onSubmit={handleSubmit}>Book Amenity</button>
                </form>
            </section>
        )
}