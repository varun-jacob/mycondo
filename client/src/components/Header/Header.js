import './Header.scss'
import { Link } from 'react-router-dom';

const Header = () => { 
    return (
        <header className='header'>
            <nav className="nav">
                <Link to ="/">
                    <h1>MyCondo</h1>
                </Link>
            </nav>

        </header>
    )
}

export default Header;