import React, { useState, useEffect } from "react";
import "./form.css";

const Imaged = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:3000/api/v1/tours", {
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
        setTableData(data);
      } else {
        console.error("Failed to fetch data.");
      }
    } catch (error) {
      console.error("An error occurred during the request:", error);
    }
  };

  return (
    <>
      <div className="main">
        <div className="body">
          {tableData &&
            tableData.map((tour) => (
              <div key={tour.id} className="cards">
                <img src={tour.image} alt={tour.name}></img>
                {/* <a href={/Movie_Detail/${tour.id}} className="button">View</a> */}
                <p>{tour.category.name}</p>
                <p>{tour.price}</p>
              </div>
            ))}
        </div>
      </div>
      
    </>
  );
};

export default Imaged;
