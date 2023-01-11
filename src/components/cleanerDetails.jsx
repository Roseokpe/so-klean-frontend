import React from "react";
import './cleanerDetails.css';

function CleanerDetails() {
  return (
      <div className="content">
        <div className="cleaner-details">
          <div className="cleaner-img">
            <img src='/.image' alt='img-dec'/>
          </div>
          <div className="cleaner-description">
            <div className="descr-top">
              <h4>Christiana Jose</h4>
              <p>In publishing and graphic design, Lorem ipsum is a placeholder<br/>
                text commonly used to demonstrate the visual form of<br/>
                a document or a typeface without relying on meaningful content.<br/>
                Lorem ipsum may be used as a placeholder before final<br/>
              </p>
            </div>
            <div className="descr-btm">
              <p>
                Price :
              </p>
              <p>
                Date
              </p>
              <p>
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