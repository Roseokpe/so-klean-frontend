import React from 'react';
import './cleanerDetails.css';

function CleanerDetails() {
  return (
    <div className="content">
      <div className="cleaner-details">
        <div className="cleaner-img">
          <img src="/.image" alt="img-dec" />
        </div>
        <div className="cleaner-description">
          <div className="descr-top">
            <h4>cleaner name</h4>
            <p>Sample Rich</p>
          </div>
          <div className="descr-btm">
            <p>
              <h4>charges</h4>
            </p>
            <p className="Date">
              Date
            </p>
            <p className="Location">
              Lagos
            </p>
          </div>
        </div>
      </div>
      <div className="bottom">
        <button
          className="reserve"
          type="button"
          onClick
        >
          Reserve

        </button>
      </div>
    </div>
  );
}

export default CleanerDetails;
