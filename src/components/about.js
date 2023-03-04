

import Nav from './nav';
import '../stylesheets/about.css';
import html from '../sources/html.svg';
import css from '../sources/css.svg';
import javascript from '../sources/javascript.svg';
import figma from '../sources/Icon.png';
import sass from '../sources/sass.svg';
import bootstrap from '../sources/bootstrap.svg';
import react from '../sources/react.svg';

function About(){
    return(
        <div>
            <Nav/>
            <div className='descriptionContainer'>
                <div className='about-description'>
                    <h3>Who I am?</h3>
                    <p>I’m frontend developer <br></br>Skills:</p>
                    <div className='logoContainer'>
                        <img src={html} alt='html'/>
                        <img src={css} alt='css'/>
                        <img src={javascript} alt='javascript'/>
                        <img src={figma} alt='figma' />
                    </div>
                </div>
                <div className='about-description'>
                    <p>Technologies in learning:</p>
                    <div className='logoContainer'>
                        <img src={sass} alt='sass' />
                        <img src={bootstrap} alt='bootstrap' />
                        <img src={react} alt='react' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;