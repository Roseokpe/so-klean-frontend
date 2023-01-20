import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/exports';
import { NavLink } from 'react-router-dom';
import { fetchcleaners } from '../redux/cleaners';
import CleanerDetails from './cleanerDetails';

const Home = () => {
  const dispatch = useDispatch();
  const cleaners = useSelector((state) => state.cleaners);
  console.log(cleaners);
  useEffect(() => {
    dispatch(fetchcleaners());
  }, [dispatch]);

  const onClickHandler = (e) => {
    const clean = cleaners.find((a) => a.id === e.target.id);
    localStorage.setItem('cleaner', JSON.stringify(clean));
  };

  const handleDragStart = (e) => e.preventDefault();
  return (
    <>
      {!cleaners.length && <h6 className="text-center mt-5">No cleaners at the moment</h6>}
      {cleaners.length > 0 && (
      <div className="d-flex flex-column gap-3 justify-content-center align-items-center home">
        <h2 className="mt-5 pt-5">Our cleaners</h2>
        <p className="top">Kindly select a cleaner for renting</p>
        <div>
          {cleaners.map((a) => (
            <div key="clean" className="d-flex flex-column justify-content-center align-items-center gap-3">
              <NavLink
                to={`/api/v1/cleaners/${a.id}`}
              >
                <div className="back">
                  <div
                    style={{ backgroundImage: `url(${a.image})` }}
                    id={a.id}
                    onClick={onClickHandler}
                    onDragStart={handleDragStart}
                    role="presentation"
                    className="image"
                  />
                  <img src={a.image} alt="image32" />
                </div>
              </NavLink>
              <span className="name pt-3">{a.name}</span>
              <p className="d-flex align-self-center ps-5">{a.country}</p>
              <p className="d-flex align-self-center ps-5">{a.charges}</p>
              
              <NavLink className="link" to="/CleanerDetails">
                <button type="submit">see more</button>
            </NavLink>
            </div>
          ))}
        </div>
      </div>
      )}
    </>
  );
};

export default Home;
