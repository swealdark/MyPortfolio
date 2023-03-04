
import '../../stylesheets/description2.css';
import { AiFillCaretLeft } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
function Description2 ({ handleNext, handlePrev }){
    const location = useLocation();
    return(
        <div className='description2'>
            <h3>Proyects</h3>
            <div className='href-container'>
                <a href='#'><div className='App1'></div></a>
                <a href='#'><div className='App2'></div></a>
            </div>
            <div className='button-container'>
                <button className='button-style2' onClick={handlePrev}><AiFillCaretLeft className='icon-style'/></button>
                <Link to={'/proyects'} className={`link-no-underline ${location.pathname === '/proyects' ? 'active' : ''}`}><button className='button-style1'>view more</button></Link>
                <button className='button-style1' onClick={handleNext}>Continue</button>
            </div>
        </div>
    );
}

export default Description2;