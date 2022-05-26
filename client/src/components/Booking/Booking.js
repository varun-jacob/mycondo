import './Booking.scss';
import  { Link } from 'react-router-dom';

const dateFormat = (dateInput) => {
  const monthM = dateInput.getMonth()+1
  const monthMM = monthM.toString().padStart(2,'0');
  const dateD = dateInput.getDate();
  const dateDD = dateD.toString().padStart(2,'0');
  const yearYY = dateInput.getFullYear();
  return `${monthMM}/${dateDD}/${yearYY}`;
}

const Booking = ({id, name, date, startTime, endTime, condoId, residentId}) => {
    return (
        <div className='booking' key={id}>
            <h2 className='booking__date'>{dateFormat(new Date(date))}</h2>
            <div className='booking_container'>
                <h3 className='booking__name'>{name}</h3>
                <p className='booking__time'>Booking from:</p>
                <p className='booking__time'>{startTime} - {endTime}</p>
                <Link to={`/condo/${condoId}/resident/${residentId}/editBooking/${id}`}>
                    <button className='booking__button'>Edit Booking</button>
                </Link>
                <Link to={`/condo/${condoId}/resident/${residentId}/deleteBooking/${id}`}>
                    <button className='booking__button'>Delete Booking</button>
                </Link>
            </div>
        </div>
    )
}

export default Booking;