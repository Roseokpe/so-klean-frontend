import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import { fetchAPPOINTMENT } from '../redux/appointments/appointments';

const ReservationsDetails = () => {
  const appointment = useSelector((state) => state.appointment);
  console.log(appointment);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAPPOINTMENT);
  }, []);
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
