import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddRecipe = () => {
  const [inputFields, setInputFields] = useState([]);
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const handleAddField = () => {
    setInputFields([...inputFields, { id: inputFields.length }]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('click');
    console.log(data);
    navigate('/Home');
  };

  return (
    <div className='m-4'>
      <div className='container w-75 m-auto'>
        <hr />
        <div class="text-success"></div>
        <div><h2 class="text-success">Create new recipe</h2></div>
        <hr />
        <div class="text-success"></div>
        <form className='shadow-lg p-3 mb-5 bg-body-tertiary rounded' onSubmit={handleSubmit}>
          <label htmlFor='title' className=' m-1 fs-2 '>Recipe Title:</label>
          <input type='text' id='title' name='title' placeholder='Recipe Title' className='form-control' onChange={handleChange}></input>
          <label htmlFor='image' className=' m-1 fs-4 '>Recipe Image:</label>
          <input type='text' id='image' name='image' placeholder='URL' className='form-control' onChange={handleChange}></input>
          <label htmlFor='Description' className=' m-1 fs-4'>Description:</label>
          <textarea type='text' id='Description' name='Description' placeholder='Description' className='form-control' onChange={handleChange}></textarea>
          <label htmlFor='Ingredients' className=' m-1 fs-4 m-1'>Ingredients:</label>
          <input type='text' id='Ingredients' name='Ingredients' placeholder='Ingredients#0' className='form-control m-1' onChange={handleChange}></input>

          {inputFields.map((field, index) => (
            <input key={index} type="text" className='form-control m-1 ' placeholder={`Ingredients#${index + 1}`} />
          ))}<br></br>
           <span class="bi bi-plus-circle w-50 fs-3 p-2  text-success" onClick={handleAddField}></span>
          <div className='d-flex flex-row-reverse  m-4'>
            <button className='btn btn-success'>Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddRecipe;
