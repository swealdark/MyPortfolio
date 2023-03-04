
import '../../stylesheets/description3.css';
import Github from '../../sources/github.svg';
import Linkedin from '../../sources/linkedin.svg';
import { AiFillCaretLeft } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
function Description3({ handlePrev }){
    const location = useLocation();
    return(
        <div className='description3'>
            <h3>Contact</h3>
            <p>Email: <br></br> <Link to={'/contact'} className={`link-no-underline ${location.pathname === '/contact' ? 'active' : ''}`}><a href='#'>cell9125@gmail.com </a></Link></p>
            <div className='img-container'>
                <a href='https://github.com/swealdark' target='_blank'><img src={Github} alt='github'></img></a>
                <a href='https://www.linkedin.com/in/angel-l-135634142/' target='_blank'><img src={Linkedin} alt='linkedin'></img></a>
            </div>
            <div className='button-container3'>
                <button className='button-style2' onClick={handlePrev}><AiFillCaretLeft className='icon-style' /></button>
            </div>
        </div>
    );
}


export default Description3;