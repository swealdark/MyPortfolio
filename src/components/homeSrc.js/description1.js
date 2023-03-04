
import '../../stylesheets/descx1.css';
import html from '../../sources/html.svg';
import css from '../../sources/css.svg';
import javascript from '../../sources/javascript.svg';
import figma from '../../sources/Icon.png';
import { AiFillCaretLeft } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
function Description1({ handleNext, handlePrev }){
    const location = useLocation();
    return(
        <div className='description1'>
            <h3>Who I am?</h3>
            <p>I’m frontend developer <br></br> Skills: </p>
            <div>
                <img src={html} alt='html'/>
                <img src={css} alt='css' />
                <img src={javascript} alt='javascript' />
                <img src={figma} alt='figma' />
            </div>
            <div className='button-container1'>
                <button className='button-style2' onClick={handlePrev}><AiFillCaretLeft className='icon-style' /></button>
                <Link to={'/about'} className={`link-no-underline ${location.pathname === '/about' ? 'active' : ''}`}><button className='button-style1'>view more</button></Link>
                <button className='button-style1' onClick={handleNext}>Continue</button>
            </div>
        </div>
    );
}

export default Description1;    