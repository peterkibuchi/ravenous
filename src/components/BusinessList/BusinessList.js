import React from "react";
import "./BusinessList.css";
import Business from "../Business/Business";

export default function BusinessList({ businesses }) {
  const renderBusinesses = () => {
    return businesses.map(business => {
      return <Business business={business} />;
    });
  }

  return (
    <div className="BusinessList">
      {renderBusinesses()}
    </div>
  );
}
