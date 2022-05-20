import './AddAmenity.scss'
import { Link } from 'react-router-dom';

const AddAmenity = () => { 
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
                <input type="date" id="date" name="date" className='amenity__date'/>
                <input type="time" id="amenity__time" name="amenity__time" min="09:00" max="18:00" step="7200" className='amenity__time' required/>
            </form>
        </section>
    )
}

export default AddAmenity;