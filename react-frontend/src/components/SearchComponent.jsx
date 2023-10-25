import React, {useState} from 'react';

function SearchComponent({setSearchResults}) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value)
    setSearchResults(e.target.value);
  };

  return (
    <div>
      <input type="text" value={searchQuery} onChange={handleSearchInputChange} />
    </div>
  );
}

export default SearchComponent;