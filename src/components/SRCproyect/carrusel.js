
import '../../stylesheets/carrusel.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {GrFormNext, GrFormPrevious} from 'react-icons/gr';
function SamplePrevArrow({onClick}) {

    return (
        <div className='arrow arrow-left' onClick={onClick}>
            <GrFormPrevious/>
        </div>
    
    
    );
}
function SampleNextArrow({onClick}) {
    return (
        <div className='arrow arrow-right' onClick={onClick}>
            <GrFormNext/>
        </div>
    );
}

function Carrusel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4 ,
        slidesToScroll: 1,
        responsive:[
            {
                breakpoint:450,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                }
            },
            {
                breakpoint:900,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                }
            }
        ],
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
    return(
        
        <div className='carrusel-contain'>
            <h3>Proyects</h3>
            <Slider {...settings} >
                <div><a href='#'><img src={require('../../sources/app1.png')} alt='image-1'/></a></div>
                <div><a href='#'><img src={require('../../sources/app2.png')} alt='image-2'/></a></div>
                <div><a href='#'><img src={require('../../sources/app3.png')} alt='image-3'/></a></div>
                <div><a href='#'><img src={require('../../src-carrusel/image-4.jpg')} alt='image-4'/></a></div>
                <div><a href='#'><img src={require('../../src-carrusel/image-5.jpg')} alt='image-5'/></a></div>
                
            </Slider>
        
        </div>
    );
}


export default Carrusel;