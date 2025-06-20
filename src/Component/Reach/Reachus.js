import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import axios from 'axios';
import { FaSpinner } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Reachus.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        preference: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const preferences = [
        { 
            id: 'Mehandi',
            label: 'Mehandi', 
            value: 'Mehandi',
            description: 'Looking for new mehandi Designs'
        },
        { 
            id: 'AariWorks',
            label: 'AariWorks', 
            value: 'AariWorks',
        
            description: 'Looking for new Aari professionals'
        },
       
    ];

    const validateField = (name, value) => {
        switch (name) {
            case 'name':
                if (!value.trim()) {
                    toast.error('Name is required');
                    return false;
                }
                return true;
            case 'email':
                if (!value.trim()) {
                    toast.error('Email is required');
                    return false;
                }
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    toast.error('Invalid email format (example: xyz@gmail.com)');
                    return false;
                }
                return true;
            case 'mobile':
                if (!value.trim()) {
                    toast.error('Phone number is required');
                    return false;
                }
                if (!/^[0-9]{10}$/.test(value)) {
                    toast.error('Invalid phone number (10 digits required)');
                    return false;
                }
                return true;
            case 'preference':
                if (!value) {
                    toast.error('Please select an option');
                    return false;
                }
                return true;
            default:
                return true;
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handlePreferenceSelect = (value) => {
        setFormData(prev => ({ ...prev, preference: value }));
    };

    const validateForm = () => {
        let isValid = true;

        Object.keys(formData).forEach(key => {
            if (!validateField(key, formData[key])) {
                isValid = false;
            }
        });

        return isValid;
    };
const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
        const url = `${process.env.REACT_APP_BACKEND_HOST}/api/auth/register`;
        const response = await axios.post(url, formData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        toast.success('Thank you for contacting us! We will get back to you soon.');
        
        setFormData({
            name: '',
            email: '',
            mobile: '',
            preference: ''
        });
    } catch (error) {
        console.error('Submission error:', error);
        
        // Check if the error response contains the email exists message
        if (error.response && error.response.data && error.response.data.email === "Email already exists") {
            toast.error('This email is already registered. Please use a different email.');
        } else {
            toast.error('Something went wrong. Please try again later.');
        }
    } finally {
        setIsSubmitting(false);
    }
};

    return (
        <section className="contact-section">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            
            <div className="contact-header">
                <h1 className="contact-title">Reach Out to Us</h1>
                <p className="contact-subtitle">
                    We bring over three years of dedicated experience in Mehndi and Aari work, delivering high-quality, intricate designs with a professional touch tailored for weddings, festivals, and special occasions.
                </p>
            </div>

            <div className="form-container">
                <div className="form-intro">
                    Fill out the form below, and our team at <span className="brand-name">Kaviya Designs</span> will reach out to get you started!
                </div>

                <form onSubmit={handleSubmit} noValidate>
                    <div className="form-grid">
                        <div className="form-group">
                            <label htmlFor="name" className="form-label required">Full Name</label>
                            <InputText
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="form-input"
                                placeholder="Enter your full name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email" className="form-label required">Email</label>
                            <InputText
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="form-input"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="mobile" className="form-label required">Phone Number</label>
                            <InputText
    id="mobile"
    name="mobile"
    value={formData.mobile}
    onChange={handleChange}
    className="form-input"
    placeholder="Enter your 10-digit phone number"
    maxLength={10}  // This limits input to 10 characters
    keyfilter="num" // This only allows numeric input (from PrimeReact)
/>
                        </div>

                        <div className="form-group full-width">
                            <label className="form-label required">Your Preference</label>
                            <div className="preference-panel-container">
                                {preferences.map((option) => (
                                    <div 
                                        key={option.id}
                                        className={`preference-panel ${formData.preference === option.value ? 'selected' : ''}`}
                                        onClick={() => handlePreferenceSelect(option.value)}
                                    >
                                        <div className="preference-icon">{option.icon}</div>
                                        <div className="preference-content">
                                            <h4>{option.label}</h4>
                                            <p>{option.description}</p>
                                        </div>
                                        <div className="selection-indicator">
                                            {formData.preference === option.value && (
                                                <span className="checkmark">✓</span>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="form-actions full-width">
                            <button
                                type="submit"
                                className="submit-button"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <FaSpinner className="spinner" />
                                        <span>Submitting...</span>
                                    </>
                                ) : 'Submit'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;