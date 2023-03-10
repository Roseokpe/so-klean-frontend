import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from 'react-multi-carousel';
import { fetchcleaners } from '../redux/cleaners';
import meter1 from '../images/bmw.jpeg';
import 'react-multi-carousel/lib/styles.css';
import './slide.css';

const ImageSlide = () => {
  const { id } = useParams();
  console.log(id);
  const cleaners = useSelector((state) => state.cleaners);
  console.log(cleaners);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchcleaners());
  }, [dispatch]);
  const infinite = 'True';
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>what we do</h2>
              <p>The following is a brief of the services offered at MTC</p>
              <Carousel
                responsive={responsive}
                infinite={infinite}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="background" />
                  <h5>PREPARING TAX DOCUMENTS</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="background" />
                  <h5>FILING OF TAX RETURNS</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="background" />
                  <h5>TAX CONSULTANCY</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="background" />
                  <h5>PAYROLL</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="background" />
                  <h5>KEEP TRACK OF FINANCIAL STATEMENTS</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={meter1} alt="background" />
    </section>
  );
};

export default ImageSlide;
