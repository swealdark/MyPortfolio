
import Description from './description';
import Description1 from './description1';
import Description2 from './description2';
import Description3 from './description3';
import Carousel from './carousel';
import { useState } from 'react';
function Main(){
    const[currentPage,setCurrentPage] = useState(0);

    const handleNext =()=>{
        if(currentPage < items.length -1){
            setCurrentPage(currentPage+1);
        }
    };
    const handlePrev = ()=>{
        if(currentPage > 0){
            setCurrentPage(currentPage-1);
        }
    };
    const items = [
        <Description handleNext={handleNext}/>,
        <Description1 handleNext={handleNext} handlePrev={handlePrev}/>,
        <Description2 handleNext={handleNext} handlePrev={handlePrev}/>,
        <Description3  handlePrev={handlePrev}/>
    ]
    return(
        <Carousel items={items} currentPage={currentPage}/>
    );
}


export default Main;