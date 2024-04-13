import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./css/Tour_detail.css";

function TourDetail() {
  const [tableData, setTableData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    try {
      const url = `http://127.0.0.1:3000/api/v1/tours/${id}`;
      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          "access-token": "V3cwsYnnMRPi_S2nKFVEhA",
          client: "mE-XbkK2ZoS-nHR60fht0g",
          uid: "usergguopuigadoni@example.com",
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setTableData(data.data);
      } else {
        console.error("Failed to fetch data.");
      }
    } catch (error) {
      console.error("An error occurred during the request:", error);
    }
  };

  return (
    <div className="main_body">
      {tableData && (
        <>
          <div className="item-1" style={{ background: "red" }}>
            <img src={tableData.image} alt="Tour image" />
            {/* <a href={`/Schedules/${tableData.id}`}>Book now</a> */}
          </div>
          <div className="item-2" style={{ background: "red" }}>
            <p className="Movie_title">{tableData.name}</p>
            <p>{tableData.description}</p>
            <p>Duration: {tableData.duration} days</p>
            {tableData.category && <p>Category: {tableData.category.name}</p>}
            <p>
              Price: {tableData.prices[0].amount} {tableData.prices[0].currency}
            </p>
            <p>Destinations:</p>
            <ul>
              {tableData.destinations.map((destination) => (
                <li key={destination.id}>{destination.name}</li>
              ))}
            </ul>
            <p>Activities:</p>
            <ul>
              {tableData.activities.map((activity) => (
                <li key={activity.id}>{activity.name}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default TourDetail;
