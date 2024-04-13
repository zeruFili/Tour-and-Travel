import React, { useState, useEffect } from "react";
import "./form.css";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [tourData, setTourData] = useState({
    name: "",
    description: "",
    duration: "",
    category_id: "",
    image: "",
    startDate: "",
    endDate: "",
    price: { amount: "", currency: "USD" },
    category: { name: "" },
    destinations: [{ name: "", description: "" }],
    activities: [{ name: "" }],
  });
  const navigate = useNavigate();

  const handleInputChange = (e, field, index) => {
    const { name, value } = e.target;
    if (field === "destinations" || field === "activities") {
      const newData = [...tourData[field]];
      newData[index][name] = value;
      setTourData({ ...tourData, [field]: newData });
    } else if (field === "category") {
      setTourData({
        ...tourData,
        category: { ...tourData.category, name: value },
      });
    } else {
      setTourData({ ...tourData, [name]: value });
    }
  };

  const handlecategoryChange = (e, fieldName) => {
    const { value } = e.target;
    setTourData({ ...tourData, [fieldName]: value });
  };

  const handlenameChange = (e, fieldName) => {
    const { value } = e.target;
    setTourData({ ...tourData, [fieldName]: value });
  };
  const handledescriptionChange = (e, fieldName) => {
    const { value } = e.target;
    setTourData({ ...tourData, [fieldName]: value });
  };
  const handleimageChange = (e, fieldName) => {
    const { value } = e.target;
    setTourData({ ...tourData, [fieldName]: value });
  };
  const handlepriceChange = (e, fieldName) => {
    const { value } = e.target;
    setTourData({ ...tourData, [fieldName]: value });
  };
  const handledurationChange = (e, fieldName) => {
    const { value } = e.target;
    setTourData({ ...tourData, [fieldName]: value });
  };
  const handledcatagoryChange = (e, fieldName) => {
    const { value } = e.target;
    setTourData({ ...tourData, [fieldName]: value });
  };
  const handleCategoryNameChange = (e) => {
    const { value } = e.target;
    setTourData((prevTourData) => ({
      ...prevTourData,
      category: {
        name: value,
      },
    }));
  };
  const handleDateChange = (e, type) => {
    const date = e.target.value;
    setTourData({
      ...tourData,
      [type === "start" ? "startDate" : "endDate"]: date,
    });
  };
  //   const handlenameChange = (e,change) => {
  //     setTourData((prevTourData) => ({
  //       ...prevTourData,
  //       name: change,
  //     }));
  //   };

  const addField = (field) => {
    setTourData({
      ...tourData,
      [field]: [...tourData[field], { name: "", description: "" }],
    });
  };

  const removeField = (field, index) => {
    const newData = [...tourData[field]];
    newData.splice(index, 1);
    setTourData({ ...tourData, [field]: newData });
  };

  const header_data = {
    "Content-Type": "application/json",
    "access-token": "V3cwsYnnMRPi_S2nKFVEhA",
    client: "mE-XbkK2ZoS-nHR60fht0g",
    uid: "usergguopuigadoni@example.com",
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://127.0.0.1:3000/api/v1/tours", {
        method: "POST",
        headers: header_data,
        body: JSON.stringify({ api_v1_tour: tourData }),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("Tour created successfully:", responseData);
        navigate("/dashboard");
        // Optionally, you can reset the form fields here
      } else {
        throw new Error("Failed to create tour");
      }
    } catch (error) {
      console.error("Error creating tour:", error);
    }
  };
  return (
    <>
      <div className="form-container" style={{ marginTop: "-10px" }}>
        <div className="form-box">
          <div style={{ marginLeft: "20px" }}>
            <div className="form-header">
              <p>Create Tour</p>
            </div>
            <div className="form-input-box">
              <div>
                <label htmlFor="name">Name</label>

                <input
                  type="text"
                  className="auth-input-field"
                  id="name"
                  required
                  value={tourData.name}
                  onChange={(e) => handlenameChange(e, "name")}
                  style={{ marginRight: "10px", marginLeft: "10px" }}
                />
              </div>

              <div>
                <label htmlFor="image">Image</label>
                <input
                  type="text"
                  className="auth-input-field"
                  id="image"
                  required
                  value={tourData.image}
                  onChange={(e) => handleimageChange(e, "image")}
                  style={{ marginRight: "10px", marginLeft: "10px" }}
                />
              </div>
            </div>

            <div className="form-input-box">
              <div>
                <label htmlFor="start-date">Start Date</label>
                <input
                  type="date"
                  className="auth-input-field"
                  id="start-date"
                  required
                  value={tourData.startDate}
                  onChange={(e) => handleDateChange(e, "start")}
                />
              </div>

              <div>
                <label htmlFor="end-date">End Date</label>
                <input
                  type="date"
                  className="auth-input-field"
                  id="end-date"
                  required
                  value={tourData.endDate}
                  onChange={(e) => handleDateChange(e, "end")}
                />
              </div>
            </div>

            <div className="form-input-box">
              <div style={{ display: "flex" }}>
                <div>
                  <label htmlFor="price">Price</label>
                  <br />
                  <input
                    type="text"
                    className="auth-input-field"
                    id="price"
                    required
                    value={tourData.price.amount}
                    onChange={(e) => handlepriceChange(e, "price")}
                    style={{ marginRight: "10px", marginLeft: "10px" }}
                  />
                </div>

                <div>
                  <label htmlFor="duration">Duration</label>
                  <br />
                  <input
                    type="text"
                    className="auth-input-field"
                    id="duration"
                    required
                    value={tourData.duration}
                    onChange={(e) => handledurationChange(e, "duration")}
                    style={{ marginRight: "10px", marginLeft: "10px" }}
                  />
                </div>
              </div>
            </div>

            <div className="form-input-box" style={{ flexDirection: "column" }}>
              <div>
                <label htmlFor="currency">Currency</label>
                <br />
                <select
                  id="currency"
                  value={tourData.price.currency}
                  onChange={(e) => handleInputChange(e, "price")}
                >
                  <option value="USD">USD</option>
                  <option value="Birr">Birr</option>
                </select>
              </div>

              <div>
                <label htmlFor="duration">Category_id</label>
                <br />
                <input
                  type="text"
                  className="auth-input-field"
                  id="category_id"
                  required
                  value={tourData.category_id}
                  onChange={(e) => handledcatagoryChange(e, "category_id")}
                  style={{ marginRight: "10px", marginLeft: "10px" }}
                />
              </div>
              <br />
              <div className="form-input-box">
                <div>
                  <label htmlFor="destinations">Destinations</label>
                  {tourData.destinations.map((destination, index) => (
                    <div key={index} className="destination-input">
                      <div className="destination-input-fields">
                        <input
                          type="text"
                          className="auth-input-field"
                          name="name"
                          placeholder="Name"
                          value={destination.name}
                          onChange={(e) =>
                            handleInputChange(e, "destinations", index)
                          }
                        />
                        <input
                          type="text"
                          className="auth-input-field"
                          name="description"
                          placeholder="Description"
                          value={destination.description}
                          onChange={(e) =>
                            handleInputChange(e, "destinations", index)
                          }
                        />
                      </div>
                      {index > 0 && (
                        <button
                          className="remove-destination-button"
                          onClick={() => removeField("destinations", index)}
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="form-input-box"
                style={{ flexDirection: "column" }}
              >
                <div>
                  <button
                    className="add-destination-button"
                    onClick={() => addField("destinations")}
                  >
                    Add Destination
                  </button>
                </div>
              </div>
            </div>

            <div className="form-input-box">
              <div>
                <label htmlFor="activities">Activities</label>
                {tourData.activities.map((activity, index) => (
                  <div key={index} className="activity-input">
                    <div className="activity-input-fields">
                      <input
                        type="text"
                        className="auth-input-field"
                        name="name"
                        placeholder="Name"
                        value={activity.name}
                        onChange={(e) =>
                          handleInputChange(e, "activities", index)
                        }
                      />
                    </div>
                    <div className="activity-remove-button">
                      {index > 0 && (
                        <button
                          className="remove-activity-button"
                          onClick={() => removeField("activities", index)}
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="form-input-box">
              <button
                className="add-activity-button"
                onClick={() => addField("activities")}
              >
                Add Activity
              </button>
            </div>

            <div className="form-input-box" style={{ flexDirection: "column" }}>
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="auth-input-field"
                id="description"
                required
                value={tourData.description}
                style={{ paddingTop: "5px", width: "95%", height: "120px" }}
                onChange={(e) => handledescriptionChange(e, "description")}
              />
            </div>

            <div className="form-input-box">
              <input
                type="submit"
                className="form-input-submit"
                value="Create Post"
                style={{ width: "96%", fontSize: "18px", height: "60px" }}
                onClick={handleSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
