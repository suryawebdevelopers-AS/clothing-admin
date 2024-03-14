import React, { useState, useEffect } from 'react';
import './products.css';
// import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
// import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useNavigate } from 'react-router-dom';

const Product = () => {
  const navigate = useNavigate()
  const [inventoryData, setInventoryData] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://clothing-be.onrender.com/getallproduct';

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        // Filter items with category "freshVegetables"
        // const freshVegetables = data.items.filter(item => item.category === 'lightWeightPattu');
        setInventoryData(data);
        console.log(data)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
// handle delete
  const handleItemDelete = async (itemId) => {
    try {
      const deleteUrl = `https://clothing-be.onrender.com/products/${itemId}`;

      const response = await fetch(deleteUrl, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`Failed to delete item. Status: ${response.status}`);
      }
     
      // Remove the deleted item from the local state
      setInventoryData(prevData => prevData.filter(item => item._id !== itemId));
      alert('item deleted')
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  
// handle update
   const [selectedProduct,setSelectedProduct]=useState('');

    const handleProductUpdate = (item) => {
      setSelectedProduct(item);
      navigate('/productupdate', { state: { selectedProduct: item } });
      console.log(item,'data')
    };
  

  return (
    <>
      {/* <h1>Inventory Data</h1>
         <pre>{JSON.stringify(inventoryData, null, 2)}</pre> */}
        
      <div className='main-product-con'>
      {inventoryData.map(item => (
          <div key={item._id} className='product-sub-con'>
            <div className='product-image'>
              <img src={`data:image/png;base64, ${item.image1}`} alt={`Item ${item.productName}`} />
            </div>
            <div className='product-content'>
              <p>{item.productName}</p>
              <p>{item.price}</p>
            </div>
            <div className='edit-delete-buttons'>
              <div onClick={() => handleProductUpdate(item)} >
                Edit
              </div>
              <div onClick={() => handleItemDelete(item._id)}>
                Delete
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
   
  );
};

export default Product;
