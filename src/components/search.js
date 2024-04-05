import React, { useState } from "react";

function Navbar({ onSearchSubmit }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearchSubmit(searchQuery); // Pass the search query to the parent component
  };

  return (
    <div className="navbar">
      {/* Navbar content */}
      <form className="search-container" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search location..."
        />
        <button type="submit" style={{ padding: "2px" }}>
          Search
        </button>
      </form>
    </div>
  );
}

export default Navbar;
