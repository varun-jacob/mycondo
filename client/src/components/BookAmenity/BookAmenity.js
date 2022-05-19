import './BookAmenity.scss'
import { Link } from 'react-router-dom';

const BookAmenity = () => { 
    return (
        <section className='Amenity'>
            <h2>Amenity Form</h2>
            <form>
            <select name="amenity__list" id="amenity__list" className="AmenityList" required>
                    <option value="">Select an Amenity</option>
                    <option value="Swimming Pool">Swimming Pool</option>
                    <option value="Tennis">Tennis</option>
                    <option value="Basketball">Basketball</option>
                    <option value="Gym">Gym</option>
            </select>
            <input type="date" id="date" name="date" value="2022-05-25" className='amenity__date'/>
            <input type="time" id="amenity__time" name="amenity__time" min="09:00" max="18:00" className='amenity__time' required/>
            <select name="amenity__list" id="amenity__list" className="amenit__list" required>
                <option value="Swimming Pool">Swimming Pool</option>
                <option value="Tennis">Tennis</option>
                <option value="Basketball">Basketball</option>
                <option value="Gym">Gym</option>
            </select>

                
            </form>
        </section>
    )
}

export default BookAmenity;