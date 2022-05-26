import './EditBooking.scss'
import React, { useState, useEffect } from "react";
import axios from 'axios';

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

export const EditBooking = (props) => {
    const condoId = props.match.params.condoId;
    const residentId = props.match.params.residentId;
    const bookingId = props.match.params.bookingId;
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
    }, [])

    useEffect(() => {
        axios
            .get(`${SERVER_URL}/bookings/${bookingId}`)
            .then((result) => {
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
          .put(`${SERVER_URL}/bookings/${bookingId}`,{
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
              alert('Booking was modified')
          })
          .catch((err) => {
              console.log(err)
          })
        e.target.reset()
        }

        return (
            <section className='editBooking'>
                <h2 className='editBooking__header'>Edit Booking</h2>
                <form className='editBooking__form' onSubmit={handleSubmit}>
                    <select name="editBooking__list" id="editBooking__list" className="editBooking__List" onChange={(e) => setAmenityId(e.target.value)}required>
                            <option value="" className='editBooking__options'>Select an Amenity</option>
                            {amenities.map(amenity => {
                                return (
                                    <option key={amenity.id} id={amenity.id} value={amenity.id} className='editBooking__options'>{amenity.name}</option>
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
                    className='editBooking__date'
                    required
                    />
                    <input 
                    type="time" 
                    id="start_time" 
                    name="start_time" 
                    className='editBooking__time'
                    value={start_time}
                    onChange={(e) => setStartTime(e.target.value)} 
                    required
                    />
                    <input 
                    type="time" 
                    id="end_time" 
                    name="end_time" 
                    className='editBooking__time'
                    value={end_time}
                    onChange={(e) => setEndTime(e.target.value)} 
                    required
                    />
                    <button type='submit' className='button' onSubmit={handleSubmit}>Edit Booking</button>
                </form>
            </section>
        )
}