import './Amenity.scss';
import  { Link } from 'react-router-dom';

const Amenity = ({id, name, image, startTime, endTime, condoId, residentId}) => {
    return (
        <div className='amenity' key={id}>
            <h2 className='amenity__name'>{name}</h2>
            <img src={image} alt="Amenity Item" className='amenity__image'/>
            <div className='amenity_container'>
                <p className='amenity__time'>Open from:</p>
                <p className='amenity__time'>{startTime} - {endTime}</p>
                <Link to={`/condo/${condoId}/resident/${residentId}/addBooking`}>
                    <button className='amenity__button'>Book {name}</button>
                </Link>
            </div>
        </div>
    )
}

export default Amenity;