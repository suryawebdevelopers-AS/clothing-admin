import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { TextField, DialogActions, Button } from "@mui/material";
import axios from "axios";

const ProductUpdate = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedProduct = location.state?.selectedProduct || null;

  const [editformData, setEditFormData] = useState({
    category: "",
    subCategory: "",
    selectedSizes: [],
    productName: "",
    price: "",
    color: "",
    fabric: "",
    fit: "",
    washCare: "",
    description: "",
  });

  useEffect(() => {
    if (selectedProduct) {
      setEditFormData({ ...selectedProduct });
    }
  }, [selectedProduct]);

  const handleChange = (event, fieldName) => {
    const { value } = event.target;
    setEditFormData({ ...editformData, [fieldName]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.put(
        `https://clothing-be.onrender.com/updateproduct/${selectedProduct._id}`,
        editformData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.status === 200) {
        alert("Item updated successfully");
        navigate(-1); // Go back after successful update
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error updating item:", error);
      alert("Error updating item in inventory");
    }
  };

  return (
    <div className="updated-form-con">
      <div>
        <TextField
          autoFocus
          margin="dense"
          id="productName"
          name="productName"
          type="text"
          fullWidth
          variant="standard"
          value={editformData.productName}
          onChange={(e) => handleChange(e, "productName")}
        />
      </div>

      <div>
        <TextField
          autoFocus
          margin="dense"
          id="price"
          name="price"
          type="text"
          fullWidth
          variant="standard"
          value={editformData.price}
          onChange={(e) => handleChange(e, "price")}
        />
      </div>

      <div>
        <TextField
          autoFocus
          margin="dense"
          id="color"
          name="color"
          type="text"
          fullWidth
          variant="standard"
          value={editformData.color}
          onChange={(e) => handleChange(e, "color")}
        />
      </div>

      <div>
        <TextField
          autoFocus
          margin="dense"
          id="selectedSizes"
          name="selectedSizes"
          type="text"
          fullWidth
          variant="standard"
          value={editformData.selectedSizes}
          onChange={(e) => handleChange(e, "selectedSizes")}
        />
      </div>

      <div>
        <TextField
          autoFocus
          margin="dense"
          id="fabric"
          name="fabric"
          type="text"
          fullWidth
          variant="standard"
          value={editformData.fabric}
          onChange={(e) => handleChange(e, "fabric")}
        />
      </div>

      <div>
        <TextField
          autoFocus
          margin="dense"
          id="washCare"
          name="washCare"
          type="text"
          fullWidth
          variant="standard"
          value={editformData.washCare}
          onChange={(e) => handleChange(e, "washCare")}
        />
      </div>

      <div>
        <TextField
          autoFocus
          margin="dense"
          id="fit"
          name="fit"
          type="text"
          fullWidth
          variant="standard"
          value={editformData.fit}
          onChange={(e) => handleChange(e, "fit")}
        />
      </div>

      <div>
        <TextField
          autoFocus
          margin="dense"
          id="description"
          name="description"
          type="text"
          fullWidth
          variant="standard"
          value={editformData.description}
          onChange={(e) => handleChange(e, "description")}
        />
      </div>

      <DialogActions className="formbuttons">
        <Button onClick={() => navigate(-1)}>Close</Button>
        <Button onClick={handleSubmit}>Update Item</Button>
      </DialogActions>
    </div>
  );
};

export default ProductUpdate;
