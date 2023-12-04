import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormValidationExample = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formValid = true;
    const newErrors = {
      name: '',
      email: '',
    };

    if (formData.name.trim() === '') {
      newErrors.name = 'Name is required';
      formValid = false;
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      formValid = false;
    }

    setErrors(newErrors);
    return formValid;
  };

  const navigateToNextPage = () => {
    // Perform any actions needed before navigating

    // Navigate to the next page
    navigate('/Homepage');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formIsValid = validateForm();

    if (formIsValid) {
      console.log('Form is valid:', formData);
      navigateToNextPage();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormValidationExample;
