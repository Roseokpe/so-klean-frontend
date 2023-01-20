import React, { useEffect, useState } from 'react';
import './cleanerDetails.css';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchcleaners } from '../redux/cleaners';;
import Home from './Home';

const CleanerDetails = () => {
  const cleaners = useSelector((state) => state.cleaners);
 
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchcleaners());
  }, [dispatch]);

  const { cleanerId } = useParams();

  const cleaner = cleaners.filter((c) => c.id === Number(cleanerId));

   return (
      <div className="cleaner-details">
        <div className="cleaner-img">
            <img src={cleaner[0].image} alt={cleaner.photo} />
          </div>
          <div className="clearner-description">
            <p>Cleaner Information</p>
            <div className="descr-top">
              <h4>{cleaner[0].location}</h4>
              <p>{cleaner[0].date}</p>
            </div>
          </div>
        </div>
  );
}

export default CleanerDetails;
