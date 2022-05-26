import axios from "axios";
import React, { useState, useEffect } from "react";
import Booking from "../../components/Booking/Booking";
import "./BookingsPage.scss";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const BookingsPage = (props) => {
  const [bookings, setBookings] = useState([]);
  const condoId = props.match.params.condoId
  const residentId = props.match.params.residentId


  useEffect(() => {
    axios
        .get(`${SERVER_URL}/residents/${residentId}/bookings`)
        .then((result) => {
            setBookings(result.data.sort((b, a) => b.date - a.date))
        })
        .catch((err) => {
            console.log(err)
        })     
  }, [])

  return (
      <section className="bookings">
            <h2 className="bookings__header">Bookings</h2>
            <div className="bookings__list">
                {bookings.map(booking => {
                    return (
                        <Booking key={booking.id} id={booking.id} name={booking.name} date={booking.date} startTime={booking.start_time} endTime={booking.end_time} condoId={condoId} residentId={residentId}/>
                    )
                })}
            </div>
      </section>
  )
}