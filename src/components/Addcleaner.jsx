import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addcleaner } from '../redux/cleaners';
import './form.css';

const Addcleaner = () => {
  const dispatch = useDispatch();

  const addCleaner = (cleaneritem) => {
    dispatch(addcleaner(cleaneritem));
  };

  const [cleaner, setCleaner] = useState({
    name: '',
    charges: '',
    location: '',
    photo: '',
  });

  const handleChange = (e) => {
    e.preventDefault();
    const cleaneritem = {
      name: cleaner.name,
      charges: cleaner.charges,
      location: cleaner.location,
      photo: cleaner.photo,
    };
    addCleaner(cleaneritem);
    setCleaner({
      username: '',
      charges: '',
      location: '',
      photo: '',
    });
  };
  return (
    <form onSubmit={handleChange} className="add-form">
      <h2> add a new cleaner.</h2>
      <input
        type="text"
        placeholder="Name"
        value={cleaner.name}
        onChange={(e) => setCleaner({ ...cleaner, name: e.target.value })}
      />
      <input
        type="integer"
        placeholder="Charges not less than 1500"
        value={cleaner.charges}
        onChange={(e) => setCleaner({ ...cleaner, charges: e.target.value })}
      />
      <input
        type="text"
        placeholder="location"
        value={cleaner.location}
        onChange={(e) => setCleaner({ ...cleaner, location: e.target.value })}
      />
      <input
        type="text"
        placeholder="Photo"
        value={cleaner.photo}
        onChange={(e) => setCleaner({ ...cleaner, photo: e.target.value })}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default Addcleaner;
