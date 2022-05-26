import './Header.scss'
import { NavLink, Link } from 'react-router-dom';

const Header = ({ isActive }) => { 
    return (
        <header className='header'>
            <Link to ="/condo/1/resident/1/amenities" className='header__link'>
                <h1 className='header__title'>MyCondo</h1>
            </Link>
            <nav className="nav">
                <NavLink to ="/condo/1/resident/1/amenities" className='nav__link'>
                    <h2 className='nav__title'>Amenities</h2>
                </NavLink>
                <NavLink to ="/condo/1/resident/1/bookings" className='nav__link'>
                    <h2 className='nav__title'>Bookings</h2>
                </NavLink>
            </nav>

        </header>
    )
}

export default Header;