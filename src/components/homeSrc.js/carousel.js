
import { useState } from "react";

function Carousel({ items,currentPage }){
    // const[currentPage,setCurrentPage] = useState(0);

    // const handleNext =()=>{
    //     if(currentPage < items.length -1){
    //         setCurrentPage(currentPage+1);
    //     }
    // };
    // const handlePrev = ()=>{
    //     if(currentPage > 0){
    //         setCurrentPage(currentPage-1);
    //     }
    // };
    return(
        <div>
            <div>{items[currentPage]}</div>
            {/* <button onClick={handlePrev}>Anterior</button>
            <button onClick={handleNext}>Siguiente</button> */}
        </div>
    );
}

export default Carousel;