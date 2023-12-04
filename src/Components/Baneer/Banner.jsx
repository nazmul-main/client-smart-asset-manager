// Banner.js

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="relative max-w-screen-xl mx-auto  ">
      <Slider {...settings} >
        {/* Slide 1 */}
        <div className='relative h-[80vh]'>
          <img src="https://img.freepik.com/free-photo/finance-money-debt-credit-balance-concept_53876-127372.jpg?w=900&t=st=1700835558~exp=1700836158~hmac=718f530a9e4ff443ad25c07e105f7c26d33b9beb0f78ae8ebac521cdcbc4fa03" alt="Image 2" className="w-full h-full" />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
            <Link to='/joinEmploye' className="bg-green-700 text-white px-8 py-3 rounded">
              Join As Employee
            </Link>
          </div>
        </div>

        {/* Slide 2 */}
        <div className='relative h-[80vh]'>
          <img src="https://img.freepik.com/free-photo/workplace-results-professional-report-accounting-during_1418-61.jpg?w=996&t=st=1700835456~exp=1700836056~hmac=55f8e1970fae63e39d3c2003dfa6cad7c606e0eb0ff1717199421387bccb258a" alt="Image 2" className="w-full h-full" />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
            <Link to='/joinAdminHR' className="bg-green-700 text-white px-8 py-3 rounded">
              Join as HR/Admin
            </Link>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
