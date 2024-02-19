// ProductTable.js

import React, { useState } from "react";
import "./ProductTable.css";

const ProductTable = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", description: "Description 1" },
    { id: 2, name: "Product 2", description: "Description 2" },
    // Add more products as needed
  ]);

  const handleEdit = (productId) => {
    // Handle edit logic here
    console.log(`Edit product with ID ${productId}`);
  };

  const handleSubmit = () => {
    // Handle submit logic here
    console.log("Submit clicked");
  };

  const handleReset = () => {
    // Handle reset logic here
    console.log("Reset clicked");
  };

  return (
    <div>
      <h1 className="heading">Vendor Management Platform</h1>
      <h2 className="subheading">Product Listing</h2>

      <table className="product-table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Description</th>
            <th>Edit Option</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>
                <button onClick={() => handleEdit(product.id)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="button-container">
        <button className="submit-button" onClick={handleSubmit}>
          Submit
        </button>
        <button className="reset-button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default ProductTable;
