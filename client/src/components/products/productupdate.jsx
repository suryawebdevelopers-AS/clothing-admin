import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { TextField, DialogActions, Button, MenuItem, FormControl, Select } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';

import axios from "axios";
// import './tabs.css';

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
    image1:null,
    image2:null,
    image3:null,
    image4:null,
  });

  useEffect(() => {
    if (selectedProduct) {
      setEditFormData({
        category: selectedProduct.category || "",
        subCategory:selectedProduct.subCategory || '',
        productName: selectedProduct.productName || "",
        price: selectedProduct.price || "",
        color: selectedProduct.color || "",
        selectedSizes: selectedProduct.selectedSizes || "",
        fabric: selectedProduct.fabric || "",
        washCare: selectedProduct.washCare || "",
        fit: selectedProduct.fit || "",
        description: selectedProduct.description || "",
        image1: selectedProduct.image1 || null,
        image2: selectedProduct.image2 || null,
        image3: selectedProduct.image3 || null,
        image4: selectedProduct.image4 || null,
      });
    }
  }, [selectedProduct]);

  const handleChange = (event, fieldName) => {
    const { value } = event.target;
    setEditFormData({ ...editformData, [fieldName]: value });
  };

  const handleImageChange = async (e, fieldName) => {
    const file = e.target.files[0];
    if (file) {
      const base64Image = await convertToBase64(file);
      setEditFormData({ ...editformData, [fieldName]: base64Image });
    }
  };

  const convertToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result.split(",")[1]);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });

    const handleFieldUpdate = async (fieldName, value) => {
      try {
        const response = await axios.put(
          `https://clothing-be.onrender.com/products/${selectedProduct._id}`,
          {
            field : fieldName,
            value : value
          },
          {
            headers: { "Content-Type": "application/json" },
          }
        );
  
        if (response.status === 200) {
          alert(`${fieldName} updated successfully`);
        } else {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
      } catch (error) {
        console.error(`Error updating ${fieldName}:`, error);
        alert(`Error updating ${fieldName} in inventory`);
      }
    };
    
    const handleSubmit = async () => {
      try {
        const response = await axios.put(
          `https://jk-skills.onrender.com/inventory/${selectedProduct._id}`,
          {
            category: editformData.category,
            itemname: editformData.itemname,
            price: editformData.price,
            code: editformData.code,
            stitchingOptions: editformData.stitchingOptions,
            fabric: editformData.fabric,
            washCare: editformData.washCare,
            length: editformData.length,
            description: editformData.description,
            image1: editformData.image1,
            image2: editformData.image2,
            image3: editformData.image3,
            image4: editformData.image4,
            
          },
          {
            headers: { "Content-Type": "application/json" },
          }
        );
    
        if (response.status === 200) {
          alert("Item updated successfully");
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
      {/* <ul>
        {Object.entries(selectedProduct).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul> */}
      <div>
      {/* <FormControl variant="standard" sx={{ m: 0, minWidth: '85%' }}>
        <InputLabel id="category-label">Category</InputLabel>
        <Select
          labelId="category-label"
          id="category"
          required
          name='category'
          value={editformData.category}
          onChange={(e) => handleChange(e, 'category')}  
          label="Category"
          sx={{ background: 'transparent' }}
        >
          <MenuItem value="semiKanchiPattu">Semi kanchi pattu</MenuItem>
          <MenuItem value="lightWeightPattu">Lightweight pattu</MenuItem>
          <MenuItem value="softSilk">Soft silk</MenuItem>
          <MenuItem value="pureKanchiPattu">Pure kanchi pattu</MenuItem>
          <MenuItem value="pureKanjivaramSilk">Pure kanjivaram silk</MenuItem>
          <MenuItem value="exclusiveBridalWear">Exclusive Bridal wear</MenuItem>
          <MenuItem value="offerZone">Offer zone</MenuItem>
        </Select>
      </FormControl> */}
        {/* <Button
          onClick={() => handleFieldUpdate("category", editformData.category)}
        >
          Update Category
        </Button> */}
      </div>

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
       <Button
          onClick={() => handleFieldUpdate("productName", editformData.productName)}
        >
          Update name
        </Button>
      </div>
        {/* price */}
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
        <Button onClick={() => handleFieldUpdate("price")}>Update Price</Button>
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
        <Button onClick={() => handleFieldUpdate("color")}>Update color</Button>
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
        <Button onClick={() => handleFieldUpdate("selectedSizes")}>Update selectedSizes</Button>
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
        <Button onClick={() => handleFieldUpdate("fabric")}>Update Fabric</Button>
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
        <Button onClick={() => handleFieldUpdate("washCare")}>Update Wash Care</Button>
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
        <Button onClick={() => handleFieldUpdate("fit")}>Update fit</Button>
      </div>
   <p>{selectedProduct._id}</p>
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
        <Button onClick={() => handleFieldUpdate("description")}>Update Description</Button>
      </div>

      <div className="main-img-con">
        <div className="sub-img-con">
          <input type="file" accept="image/*" onChange={(e) => handleImageChange(e, "image1")} />
          {editformData.image1 && (
            <div>
              <img
                src={`data:image/png;base64, ${editformData.image1}`}
                alt={`Item ${editformData.productName}`}
              />
            </div>
          )}
          <Button onClick={() => handleFieldUpdate("image1")}>Update Image 1</Button>
        </div>

        <div className="sub-img-con">
          <input type="file" accept="image/*" onChange={(e) => handleImageChange(e, "image2")} />
          {editformData.image2 && (
            <div>
              <img
                src={`data:image/png;base64, ${editformData.image2}`}
                alt={`Item ${editformData.productName}`}
              />
            </div>
          )}
          <Button onClick={() => handleFieldUpdate("image2")}>Update Image 2</Button>
        </div>

        <div className="sub-img-con">
          <input type="file" accept="image/*" onChange={(e) => handleImageChange(e, "image3")} />
          {editformData.image3 && (
            <div>
              <img
                src={`data:image/png;base64, ${editformData.image3}`}
                alt={`Item ${editformData.productName}`}
              />
            </div>
          )}
          <Button onClick={() => handleFieldUpdate("image3")}>Update Image 3</Button>
        </div>

        <div className="sub-img-con">
          <input type="file" accept="image/*" onChange={(e) => handleImageChange(e, "image4")} />
          {editformData.image4 && (
            <div>
              <img
                src={`data:image/png;base64, ${editformData.image4}`}
                alt={`Item ${editformData.itemname}`}
              />
            </div>
          )}
          <Button onClick={() => handleFieldUpdate("image4")}>Update Image 4</Button>
        </div>
      </div>

      <DialogActions className="formbuttons">
        <Button onClick={() => navigate(-1)}>Close</Button>
        <Button onClick={handleSubmit}>Update Item</Button>
      </DialogActions>
    </div>
  );
};

export default ProductUpdate;
