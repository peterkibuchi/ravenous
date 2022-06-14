import React from "react";
import "./SearchBar.css";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count"
};

export default function SearchBar() {
  // dynamically creates the list items needed to display the sort options
  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map(sortByOption => {
      const sortByOptionValue = sortByOptions[sortByOption];
      return <li key={sortByOptionValue}>{sortByOption}</li>;
    });
  }

  return (
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>
          {renderSortByOptions()}
        </ul>
      </div>

      <div className="SearchBar-fields">
        <input placeholder="Search Businesses" />
        <input placeholder="Where?" />
      </div>

      <div className="SearchBar-submit">
        <a href="#">Let's Go</a>
      </div>
    </div>
  );
}
