import React, { useState, useEffect } from "react";
import "./form.css";

const CreateTable = () => {
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
          
          
          uid: "usergguopuigadoni@example.com"
          
        }
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
      <table className="custom-table">
        <thead>
          <tr>
            <th className="column-header">Name</th>
            <th className="column-header">Description</th>
            <th className="column-header">Image</th>
            <th className="column-header">Start Date</th>
            <th className="column-header">End Date</th>
            <th className="column-header">Duration</th>
            <th className="column-header">Category</th>
            <th className="column-header">Price</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.image}</td>
              <td>{item.tour_dates.startDate}</td>
              <td>{item.endDate}</td>
              <td>{item.duration}</td>
              <td>{item.category.name}</td>
              <td>{item.price && item.price.amount + " " + item.price.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CreateTable;