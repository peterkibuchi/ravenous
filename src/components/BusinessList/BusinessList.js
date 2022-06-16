import React from "react";
import "./BusinessList.css";
import Business from "../Business/Business";


export default function BusinessList({ businesses }) {
  const renderBusinesses = () => {
    if (businesses.length === 0) return <p>Couldn't find any businesses :(.</p>;
    return businesses.map(business => {
      return <Business key={business.id} business={business} />;
    });
  }

  return (
    <div className="BusinessList">
      {renderBusinesses()}
    </div>
  );
}
