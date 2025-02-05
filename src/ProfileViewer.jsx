import { useState, useEffect } from 'react';
import axios from 'axios';

const ProfileViewer = ({ name = 'Elie' }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${name}`)
      .then((response) => setData(response.data.name));
  }, [name]);

  return <h3>{data ? data : 'Loading...'}</h3>;
};

export default ProfileViewer;
