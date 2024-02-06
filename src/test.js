import React, { useState } from 'react';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    mobileNumber: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: '',
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (formData.name.trim() === '') {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (formData.mobileNumber.trim() === '') {
      newErrors.mobileNumber = 'Mobile number is required';
      isValid = false;
    } else if (!/^[0-9]{10}$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = 'Invalid mobile number format (should be 10 digits)';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await fetch('/api/submit_form.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        const data = await response.json();
        console.log(data); // You can handle the response here (e.g., show success or error message)
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <input
          type="tel"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleChange}
        />
        {errors.mobileNumber && <span>{errors.mobileNumber}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
