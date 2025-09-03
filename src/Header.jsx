import { Link } from 'react-router-dom';
import FESTOLOGO from './assets/FESTOLOGO.png';

function Header() {
    return (
        <header>
            <div className="home-header">
                <div className="logo">
                    <img src={FESTOLOGO} alt="FESTOLOGO" />
                    <h1>FESTORICO</h1>
                </div>
                <div className="menus">
                    <Link to="/">HOME</Link>
                    <Link to="/about">ABOUT</Link>
                    <Link to="/gallery">GALLERY</Link>
                    <Link to="/contact">CONTACT</Link>
                </div>
                <div className="book-table">
                    <Link to="/book-table">
                        <button>Book a Table</button>
                    </Link>
                </div>
            </div>

            <div className="leisures">
                <div className="confort">
                    <Link to="/gallery">Lounge</Link>|
                    <Link to="/gallery">Fine Dining</Link>|
                    <Link to="/gallery">Entertainment</Link>
                </div>
                <div className="menu-reserv">
                    <Link to="/our-menu">
                        <button>OUR MENU</button>
                    </Link>
                    <Link to="/book-table">
                        <button>RESERVATION</button>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
