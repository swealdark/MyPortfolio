


import { Link } from 'react-router-dom';
import '../stylesheets/nav.css';
import { useLocation } from 'react-router-dom';


function Nav(){
    const location = useLocation();
    return(    
        <nav className='nav'>
                <ul className='home'>
                    <li>
                        <Link to={'/'} className={`link-no-underline linkstyle1`}>Angel</Link>
                    </li>
                </ul>
                <ul className="navbar">
                    <li>
                        <Link to={'/about'} className={`link-no-underline ${location.pathname === '/about' ? 'active' : ''}`}>About me</Link>
                    </li>
                    <li>
                        <Link to={'/proyects'} className={`link-no-underline ${location.pathname === '/proyects' ? 'active' : ''}`}>Proyects</Link>
                    </li>
                    <li>
                        <Link to={'/contact'} className={`link-no-underline ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
                    </li>
                </ul>
        </nav>
    );
}

export default Nav;