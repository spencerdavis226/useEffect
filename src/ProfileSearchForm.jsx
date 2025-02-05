import { useState } from 'react';

const ProfileSearchForm = ({ search }) => {
  const [term, setTerm] = useState('');

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    search(term);
    setTerm('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={term} onChange={handleChange} />
      <button>Search!</button>
    </form>
  );
};

export default ProfileSearchForm;
