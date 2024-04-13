import React, { useState, useEffect } from "react";
import "./form.css";

const CreateTable = () => {
  const [tableData, setTableData] = useState([]);
  const [editingItemId, setEditingItemId] = useState(null);
  const [editedItem, setEditedItem] = useState({
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
  const [showPopup, setShowPopup] = useState(false);

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
        setTableData(data);
      } else {
        console.error("Failed to fetch data.");
      }
    } catch (error) {
      console.error("An error occurred during the request:", error);
    }
  };

  const deleteData = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:3000/api/v1/tours/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "access-token": "V3cwsYnnMRPi_S2nKFVEhA",
          client: "mE-XbkK2ZoS-nHR60fht0g",
          uid: "usergguopuigadoni@example.com",
        },
      });

      if (response.ok) {
        // Delete was successful, update the table data accordingly
        const updatedData = tableData.filter((item) => item.id !== id);
        setTableData(updatedData);
      } else {
        console.error("Failed to delete data.");
      }
    } catch (error) {
      console.error("An error occurred during the request:", error);
    }
  };

  const handleEditClick = (item) => {
    setEditingItemId(item.id);
    setEditedItem(item);
    setShowPopup(true);
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditedItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const handleSaveClick = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:3000/api/v1/tours/${editingItemId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "access-token": "V3cwsYnnMRPi_S2nKFVEhA",
            client: "mE-XbkK2ZoS-nHR60fht0g",
            uid: "usergguopuigadoni@example.com",
          },
          body: JSON.stringify(editedItem),
        }
      );

      if (response.ok) {
        // Update was successful, fetch the updated data and reset the editing state
        fetchData();
        setEditingItemId(null);
        setEditedItem({
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
        setShowPopup(false);
      } else {
        console.error("Failed to update data.");
      }
    } catch (error) {
      console.error("An error occurred during the request:", error);
    }
  };

  const handlePriceChange = (e, fieldName) => {
    const { value } = e.target;
    setEditedItem((prevItem) => ({
      ...prevItem,
      price: prevItem.price
        ? { ...prevItem.price, [fieldName]: value }
        : { [fieldName]: value, currency: "USD" },
    }));
  };

  return (
    <>
      <table className="form__table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>
                <button onClick={() => handleEditClick(item)}>Edit</button>
                <button onClick={() => deleteData(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showPopup && (
        <div className="form__popup">
          <div className="form__popup-content">
            <span className="form__close" onClick={() => setShowPopup(false)}>
              &times;
            </span>
            <h2>Edit Item</h2>
            <form>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={editedItem.name}
                  onChange={handleEditInputChange}
                />
              </label>
              <label>
                Description:
                <input
                  type="text"
                  name="description"
                  value={editedItem.description}
                  onChange={handleEditInputChange}
                />
              </label>
              <label>
                Duration (in days):
                <input
                  type="number"
                  name="duration"
                  value={editedItem.duration}
                  onChange={handleEditInputChange}
                />
              </label>
              <label>
                Category:
                <input
                  type="text"
                  name="category.name"
                  value={editedItem.category.name}
                  onChange={handleEditInputChange}
                />
              </label>
              <label>
                Start Date:
                <input
                  type="date"
                  name="startDate"
                  value={editedItem.startDate}
                  onChange={handleEditInputChange}
                />
              </label>
              <label>
                End Date:
                <input
                  type="date"
                  name="endDate"
                  value={editedItem.endDate}
                  onChange={handleEditInputChange}
                />
              </label>
              <label>
                Price Amount:
                <input
                  type="number"
                  value={editedItem.price}
                  onChange={(e) => handlePriceChange(e, "price")}
                />
              </label>
              <label>
                Price Currency:
                <select
                  name="price"
                  value={editedItem.price}
                  onChange={(e) => handlePriceChange(e, "currency")}
                >
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                </select>
              </label>
              <button type="button" onClick={handleSaveClick}>
                Save
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateTable;
