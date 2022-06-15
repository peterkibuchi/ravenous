import React, { useState } from "react";
import "./SearchBar.css";


export default function SearchBar({ searchYelp }) {
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("best_match");

  const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count"
  };

  const getSortByClass = (sortByOption) => {
    if (sortBy === sortByOption) return "active";
    else return "";
  }

  // dynamically creates the list items needed to display the sort options
  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map(sortByOption => {
      const sortByOptionValue = sortByOptions[sortByOption];
      return (
        <li key={sortByOptionValue} className={getSortByClass(sortByOptionValue)}
            onClick={handleSortByChange.bind(this, sortByOptionValue)}>{sortByOption}</li>
      );
    });
  }

  const handleSortByChange = (sortByOption) => {
    setSortBy(sortByOption);
  }

  const handleTermChange = (event) => {
    setTerm(event.target.value);
  }

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  }

  const handleSearch = (event) => {
    searchYelp(term, location, sortBy);
    event.preventDefault();
  }

  return (
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>
          {renderSortByOptions()}
        </ul>
      </div>

      <div className="SearchBar-fields">
        <input onChange={handleTermChange} placeholder="Search Businesses" />
        <input onChange={handleLocationChange} placeholder="Where?" />
      </div>

      <div className="SearchBar-submit">
        <a onClick={handleSearch}>Let's Go</a>
      </div>
    </div>
  );
}
