

import Nav from './nav';
import Main from './homeSrc.js/main';
import '../stylesheets/home.css';
function Home(){
    return(
        <div>
            <Nav/>
            <div className='Hero'>
                <Main/>
                <div className='heroImg'>
                    <img src={require('../sources/hero.jpg')}/>
                </div>
            </div>
        </div>
    );
}

export default Home;