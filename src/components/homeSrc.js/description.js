
import "../../stylesheets/description.css";
import { useState } from "react";
function Description({ handleNext }){
    
    return(
        <div className='description'>
            <h2>Hi! I’m <br></br>Angel Luján</h2>
            <button onClick={handleNext}>Continue</button>
        </div>
    );
}


export default Description;