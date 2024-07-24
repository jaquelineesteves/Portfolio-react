import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/style.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!formData.name) {
      errors.name = 'Name is required';
    }
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Email is not valid';
    }
    if (!formData.message) {
      errors.message = 'Message is required';
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate();
    setErrors(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    emailjs.send(
      'service_rcs3jyw', // Replace with your service ID
      'template_q992tju',
      formData,
      'Px9A4-UlOb2OKGyDC' 
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setStatus('SUCCESS');
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }).catch((error) => {
      console.error('EmailJS error:', error);
      setStatus('FAILED');
    });
  };

  return (
    <div>
      <h3 className ="container-title d-flex  tree">Contact me:</h3>
    <div className="container">
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p className="text-danger">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="text-danger">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          {errors.message && <p className="text-danger">{errors.message}</p>}
        </div>
        <button type="submit" className="btn btn-primary">Send</button>
      </form>
      {status === 'SUCCESS' && <p className="text-success">Message sent successfully!</p>}
      {status === 'FAILED' && <p className="text-danger">Message failed to send.</p>}
    </div>
    </div>
  );
}
