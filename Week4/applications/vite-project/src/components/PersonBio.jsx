import { useEffect, useState } from 'react';
import { fetchBio } from './api';

const PersonBio = () => {
  const [person, setPerson] = useState('Alice');
  const [bio, setBio] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setBio(null);
      const response = await fetchBio(person);
      setBio(response);
    }
    fetchData();
  }, [person]);

  return (
    <div>
      <select value={person} onChange={(e) => setPerson(e.target.value)}>
        <option value="Alice">Alice</option>
        <option value="Bob">Bob</option>
        <option value="Taylor">Taylor</option>
      </select>
      <hr />
      <p>
        <i>{bio ?? 'Loading...'}</i>
      </p>
    </div>
  );
};

export default PersonBio;
