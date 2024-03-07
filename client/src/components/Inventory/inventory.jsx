import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import './inventory.css';

const Inventory = () => {
  const [formData, setFormData] = useState({
    category: '',
    subCategory: '',
    selectedSizes: [],
    productName: '',
    price: '',
    color: '',
    fabric: '',
    fit: '',
    washCare: '',
    description: '',
    image1: null,
    image2: null,
    image3: null,
    image4: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      selectedSizes: checked
        ? [...prevData.selectedSizes, name]
        : prevData.selectedSizes.filter((size) => size !== name),
    }));
  };

  const handleImageChange = (event, imageName) => {
    const file = event.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      [imageName]: file,
    }));
  };

  // handle submit

  const handleSubmit = async () => {
    console.log('submit button clicked')
    try {
      const response = await fetch('https://clothing-be.onrender.com/addproduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        console.log('Form data submitted successfully!');
        alert('form data submitted succesfully')
        // You can redirect or perform any other actions upon successful submission
      } else {
        console.error('Failed to submit form data.');
        alert('error submitting form data')
      }
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };
  

  return (
    <>
      <h2 className="text-3xl text-center">Add Your products here</h2>
      <div className="inventory-form">
  
     
        <div className='inventory-form-1'>
          {/* category */}
          <div className="category">
            <Box sx={{ maxWidth: 500, minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="category"
                  value={formData.category}
                  label="Category"
                  onChange={handleChange}
                >
                   <MenuItem value={'Shirts'}>Shirts</MenuItem>
                    <MenuItem value={'TShirts'}>T Shirts</MenuItem>
                    <MenuItem value={'Bottom Wear'}>Bottom Wear</MenuItem>
                    <MenuItem value={'Jeans'}>Jeans</MenuItem>
                    <MenuItem value={'Sweaters'}>Sweaters</MenuItem>
                    <MenuItem value={'Jackets'}>Jackets</MenuItem>
                    <MenuItem value={'Cargo Pants'}>Cargo Pants</MenuItem>
                    <MenuItem value={'Hoodie'}>Hoodie</MenuItem>
                    <MenuItem value={'Joggers'}>Joggers</MenuItem>
                    <MenuItem value={'Formal Trousers'}>Formal Trousers</MenuItem>
                    <MenuItem value={'Pants'}>Pants</MenuItem>
                    <MenuItem value={'Track Pants'}>Track Pants</MenuItem>
                    <MenuItem value={'Leggings'}>Leggings</MenuItem>
                    <MenuItem value={'Skirts'}>Skirts</MenuItem>
                    <MenuItem value={'Shorts'}>Shorts</MenuItem>
                    <MenuItem value={'Palazzos'}>Palazzos</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          
          {/* sub category */}
          <div className="sub-category">
            {formData.category === 'Shirts' && (
              <Box sx={{ maxWidth: 500, minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-sub-label">Sub category</InputLabel>
                  <Select
                    labelId="demo-simple-select-sub-label"
                    id="demo-simple-select-sub"
                    name='subCategory'
                    value={formData.subCategory}
                    label="Sub category"
                    onChange={handleChange}
                  >
                    <MenuItem value={'Lenin'}>Lenin</MenuItem>
                    <MenuItem value={'Plain'}>Plain</MenuItem>
                    <MenuItem value={'Checks'}>Checks</MenuItem>
                    <MenuItem value={'Stripes'}>Stripes</MenuItem>
                    <MenuItem value={'Printed'}>Printed</MenuItem>
                    <MenuItem value={'Overshirt'}>Overshirt</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            )}
            {formData.category === 'TShirts' && (
              <Box sx={{ maxWidth: 500, minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-sub-label">Sub category</InputLabel>
                  <Select
                    labelId="demo-simple-select-sub-label"
                    id="demo-simple-select-sub"
                    name='subCategory'
                    value={formData.subCategory}
                    label="Sub category"
                    onChange={handleChange}
                  >
                    <MenuItem value={'Polyester'}>Polyester</MenuItem>
                    <MenuItem value={'Cotton'}>Cotton</MenuItem>
                    <MenuItem value={'Organic Cotton'}>Organic Cotton</MenuItem>
                    <MenuItem value={'Cotton Polyester Blend'}>Cotton Polyester Blend</MenuItem>
                    <MenuItem value={'Cotton Gingham'}>Cotton Gingham</MenuItem>
                    <MenuItem value={'Linen'}>Linen</MenuItem>
                    <MenuItem value={'Lycra'}>Lycra</MenuItem>
                    <MenuItem value={'Plain'}>Plain</MenuItem>
                    <MenuItem value={'Printed'}>Printed</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            )}
            {!(formData.category === 'Shirts' || formData.category === 'TShirts') && (
              <Box sx={{ maxWidth: 500, minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-sub-label">Sub category</InputLabel>
                  <Select
                    labelId="demo-simple-select-sub-label"
                    id="demo-simple-select-sub"
                    name='subCategory'
                    value={formData.subCategory}
                    label="Sub category"
                    onChange={handleChange}
                  >
                    <MenuItem value={'Denim'}>Denim</MenuItem>
                    <MenuItem value={'Stretch Denim'}>Stretch Denim</MenuItem>
                    <MenuItem value={'Lycra Fabric'}>Lycra Fabric</MenuItem>
                    <MenuItem value={'Indigo Denim'}>Indigo Denim</MenuItem>
                    <MenuItem value={'Lightweight Denim'}>Lightweight Denim</MenuItem>
                    <MenuItem value={'Poly Denim'}>Poly Denim</MenuItem>
                    <MenuItem value={'Dobby Fabric'}>Dobby Fabric</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            )}
          </div>

          {/* Item Name */}
          <div>
            <label htmlFor="productName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
            <input
              type="text"
              id="productName"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Netplay"
              required
            />
          </div>
          {/* price */}
          <div>
            <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
            <input
              type="text"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="$ 749"
              required
            />
          </div>
          {/* color */}
          <div>
            <label htmlFor="color" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Color</label>
            <input
              type="text"
              id="color"
              name="color"
              value={formData.color}
              onChange={handleChange}
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Black"
              required
            />
          </div>
          {/* fabric */}
          <div>
            <label htmlFor="fabric" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fabric</label>
            <input
              type="text"
              id="fabric"
              name="fabric"
              value={formData.fabric}
              onChange={handleChange}
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="cotton"
              required
            />
          </div>
          {/* sizes */}
          <div>
            <label>
              <input
                type="checkbox"
                name="S"
                checked={formData.selectedSizes.includes('S')}
                onChange={handleCheckboxChange}
              />
              S
            </label>

            <label>
              <input
                type="checkbox"
                name="M"
                checked={formData.selectedSizes.includes('M')}
                onChange={handleCheckboxChange}
              />
              M
            </label>

            <label>
              <input
                type="checkbox"
                name="L"
                checked={formData.selectedSizes.includes('L')}
                onChange={handleCheckboxChange}
              />
              L
            </label>

            <label>
              <input
                type="checkbox"
                name="XL"
                checked={formData.selectedSizes.includes('XL')}
                onChange={handleCheckboxChange}
              />
              XL
            </label>

            <label>
              <input
                type="checkbox"
                name="XXL"
                checked={formData.selectedSizes.includes('XXL')}
                onChange={handleCheckboxChange}
              />
              XXL
            </label>
          </div>
        </div>
        <div className='inventory-form-2'>
          {/* Fit */}
        
          {/* Fit */}
            <div>
              <label htmlFor="fit" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fit</label>
              <input
                type="text"
                id="fit"
                name="fit"
                value={formData.fit}
                onChange={handleChange}
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="slim fit"
                required
              />
            </div>

            {/* Wash Care */}
            <div>
              <label htmlFor="washcare" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Wash Care</label>
              <input
                type="text"
                id="washcare"
                name="washCare"
                value={formData.washCare}
                onChange={handleChange}
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Dry washable"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
              <textarea
                id="description"
                rows="4"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your description here..."
              ></textarea>
            </div>

            {/* Image 1 */}
            <label htmlFor="image1" className="sr-only">Choose Image 1</label>
            <input
              type="file"
              name="image1"
              id="image1"
              onChange={(event) => handleImageChange(event, 'image1')}
              className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 file:bg-gray-50 file:border-0 file:me-4 file:py-2 file:px-4 dark:file:bg-gray-700 dark:file:text-gray-400"
            />

            {/* Image 2 */}
            <label htmlFor="image2" className="sr-only">Choose Image 2</label>
            <input
              type="file"
              name="image2"
              id="image2"
              onChange={(event) => handleImageChange(event, 'image2')}
              className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 file:bg-gray-50 file:border-0 file:me-4 file:py-2 file:px-4 dark:file:bg-gray-700 dark:file:text-gray-400"
            />

            {/* Image 3 */}
            <label htmlFor="image3" className="sr-only">Choose Image 3</label>
            <input
              type="file"
              name="image3"
              id="image3"
              onChange={(event) => handleImageChange(event, 'image3')}
              className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 file:bg-gray-50 file:border-0 file:me-4 file:py-2 file:px-4 dark:file:bg-gray-700 dark:file:text-gray-400"
            />

            {/* Image 4 */}
            <label htmlFor="image4" className="sr-only">Choose Image 4</label>
            <input
              type="file"
              name="image4"
              id="image4"
              onChange={(event) => handleImageChange(event, 'image4')}
              className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 file:bg-gray-50 file:border-0 file:me-4 file:py-2 file:px-4 dark:file:bg-gray-700 dark:file:text-gray-400"
            />
          </div>
      </div>

      <div className='submit-button'>
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
};

export default Inventory;
