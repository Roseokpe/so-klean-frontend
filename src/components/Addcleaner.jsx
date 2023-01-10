import React from 'react';
import './form.css';

function Addcleaner() {
  return (
    <div className="formcont">
      <div className="form">
        <div className="title">Add a cleaner</div>
        <div className="subtitle">Let add a cleaner to our system!</div>
        <div className="input-container ic1">
          <input id="full name" className="input" type="text" placeholder=" " />
          <div className="cut" />
          <label className="placeholder">
            Full name
          </label>
        </div>
        <div className="input-container ic2">
          <input id="lastname" className="input" type="text" placeholder=" " />
          <div className="cut" />
          <label htmlFor="location" className="placeholder">
            Location
          </label>
        </div>
        <div className="input-container ic2">
          <input id="email" className="input" type="text" placeholder=" " />
          <div className="cut cut-short" />
          <label htmlFor="charges" className="placeholder">
            charges
          </label>
        </div>
        <div className="input-container ic2">
          <input id="email" className="input" type="file" placeholder=" " />
          <div className="cut cut-short" />
          <label htmlFor="image" className="placeholder">
            charges
          </label>
        </div>
        <button type="button" className="submit">
          submit
        </button>
      </div>
    </div>
  );
}

export default Addcleaner;
