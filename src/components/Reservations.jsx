import React from 'react';
// import { useSelector } from 'react-redux';
// import DisplayMission from '../missions/DisplayMissions';
import 'bootstrap/dist/css/bootstrap.css';

const ReservationsDetails = () => {
//   const missions = useSelector((state) => state.mission);
  return (
    <div className="container-fluid px-5">
      <table className="table table-hover table-striped table-responsive">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Location</th>
            <th scope="col">Charges</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {/* /* {reservations.map((reservation) => (
            <DisplayMission
              name={reservation.name}
              key={reservation.id}
              id={reservation.id}
              location={reservation.location}
              reserved={mission.reserved}
            />
          ))} */ }
        </tbody>

      </table>
    </div>
  );
};

export default ReservationsDetails;