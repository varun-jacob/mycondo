import './BookAmenity.scss'
import { Link } from 'react-router-dom';
import axios from 'axios';
import React from 'react';

const BookAmenity = () => { 
    return (
        <section className='bookAmenity'>
            <h2 className='bookAmenity__header'>Book Amenity</h2>
            <form className='bookAmenity__form'>
                <select name="bookAmenity__list" id="bookAmenity__list" className="bookAmenity__List" required>
                        <option value="" className='bookAmenity__options'>Select an Amenity</option>
                        <option value="Swimming Pool" className='bookAmenity__options'>Swimming Pool</option>
                        <option value="Tennis" className='bookAmenity__options'>Tennis</option>
                        <option value="Basketball" className='bookAmenity__options'>Basketball</option>
                        <option value="Gym" className='bookAmenity__options'>Gym</option>
                </select>
                <input type="date" id="date" name="date" className='bookAmenity__date'/>
                <input type="time" id="amenity__time" name="bookAmenity__time" className='amenity__time' required/>
                <button type='submit' className='button'>Book Amenity</button>
            </form>
        </section>
    )
}

export default BookAmenity;