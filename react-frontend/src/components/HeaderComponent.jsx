import React from 'react';
import SearchComponent from "./SearchComponent";

function HeaderComponent({setSearchResults}) {

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a href="http//:localhost:3000" className="navbar-brand ml-3">Todo List App</a>
          <SearchComponent setSearchResults={setSearchResults}/>
        </nav>
      </header>
    </div>
  );
}

export default HeaderComponent;