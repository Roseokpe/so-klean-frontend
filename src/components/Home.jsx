import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/exports';
import { Link } from 'react-router-dom';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';
import { fetchcleaners } from '../redux/cleaners';
import './slide.css';

const Home = () => {
  const dispatch = useDispatch();
  const cleaners = useSelector((state) => state.cleaners);
  console.log(cleaners);
  useEffect(() => {
    dispatch(fetchcleaners());
  }, [dispatch]);

  const scrollRight = () => {
    const container = document.querySelector('.scroll_content');
    container.scrollLeft += container.offsetWidth / 2;
    if (container.scrollLeft >= container.scrollWidth - container.offsetWidth) {
      document.querySelector('.right').classList.add('disable');
    } else {
      document.querySelector('.right').classList.remove('disable');
    }
  };
  const scrollLeft = () => {
    const container = document.querySelector('.scroll_content');
    container.scrollLeft -= container.offsetWidth / 2;
    if (container.scrollLeft === 0) {
      document.querySelector('.left').classList.add('disable');
    } else {
      document.querySelector('.left').classList.remove('disable');
    }
  };

  return (
    <div className="cleaners_sect">
      <div>
        <p className="page_title">
          <span className="available_docs">AVAILABLE CLEANERS</span>
          <span className="select">Please select a cleaner</span>
        </p>
      </div>

      {cleaners.hasErrors && (
        <div className="error">
          Unable to display cleaners . Please check your server.
        </div>
      )}

      {!cleaners.loading && !cleaners.hasErrors && (
        <div className="content_div">
          <div className="arrow_div">
            <button type="button" className="arrow left" onClick={scrollLeft}>
              <BiLeftArrow className="left_arrow" />
            </button>
          </div>
          <div className="cover_div">
            <div className="scroll_content">
              {cleaners.map((cleaner) => (
                <div key={cleaner.id} className="cleaners_div">
                  <Link to={`/cleaners/${cleaner.id}`}>
                    <img
                      className="cleaners_img"
                      src={cleaner.image}
                      alt={cleaner.name}
                    />
                  </Link>
                  <h2 className="cleaners_name">{cleaner.name}</h2>
                  <p className="specialization">
                    chrges per hour :
                    {cleaner.charges}
                    dolars
                  </p>
                  <p className="specialization">
                    located at :
                    {cleaner.country}
                  </p>

                </div>
              ))}
            </div>
          </div>
          <div>
            <button type="button" className="arrow right" onClick={scrollRight}>
              <BiRightArrow />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
