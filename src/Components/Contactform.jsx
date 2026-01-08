import React, { useState } from 'react';
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'service_41sg0p7';
const EMAILJS_TEMPLATE_ID = 'template_urm06yv';
const EMAILJS_PUBLIC_KEY = 'c6yjlhrYVqaAq5W0w';

const ContactForm = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState({ type: null, message: '' });

    // Services offered
    const services = [
        "CRM Solutions",
        "Web Development",
        "App Development",
        "SEO Services",
        "Digital Marketing",
        "UI/UX Design",
        "E-Commerce Solutions",
        "Cloud Services",
        "AI Integration"
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        /* ---------- NAME VALIDATION ---------- */
        if (name === 'name') {
            const MAX_LENGTH = 100;
            const isOverLimit = value.length > MAX_LENGTH;
            const hasDigit = /\d/.test(value);
            const hasSpecialChar = /[^a-zA-Z\s]/.test(value);
            const textOnly = value.replace(/[^a-zA-Z\s]/g, '').slice(0, MAX_LENGTH);

            setFormData(prev => ({ ...prev, name: textOnly }));

            let errorMessage = '';
            if (textOnly.length === 0) {
                errorMessage = 'Full name is required.';
            } else if (isOverLimit) {
                errorMessage = `Name cannot exceed ${MAX_LENGTH} characters.`;
            } else if (hasDigit) {
                errorMessage = 'Digits are not allowed in name.';
            } else if (hasSpecialChar) {
                errorMessage = 'Special characters are not allowed in name.';
            } else if (textOnly.length < 2) {
                errorMessage = 'Name must be at least 2 characters.';
            }

            setFormErrors(prev => ({ ...prev, name: errorMessage }));
            return;
        }

        /* ---------- PHONE VALIDATION ---------- */
        if (name === 'phone') {
            const MAX_LENGTH = 10;
            const isOverLimit = value.replace(/\D/g, '').length > MAX_LENGTH;
            const numericValue = value.replace(/\D/g, '').slice(0, MAX_LENGTH);

            setFormData(prev => ({ ...prev, phone: numericValue }));

            let errorMessage = '';
            if (numericValue.length === 0) {
                errorMessage = 'Phone number is required.';
            } else if (isOverLimit) {
                errorMessage = `Phone number cannot exceed ${MAX_LENGTH} digits.`;
            } else if (numericValue.length !== 10) {
                errorMessage = 'Phone number must be exactly 10 digits.';
            }

            setFormErrors(prev => ({ ...prev, phone: errorMessage }));
            return;
        }

        /* ---------- EMAIL VALIDATION ---------- */
        if (name === 'email') {
            const MAX_LENGTH = 254;
            const isOverLimit = value.length > MAX_LENGTH;
            const cleanedValue = value.slice(0, MAX_LENGTH);

            setFormData(prev => ({ ...prev, email: cleanedValue }));

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            let errorMessage = '';

            if (cleanedValue.length === 0) {
                errorMessage = 'Email is required.';
            } else if (isOverLimit) {
                errorMessage = `Email cannot exceed ${MAX_LENGTH} characters.`;
            } else if (!emailRegex.test(cleanedValue)) {
                errorMessage = 'Enter a valid email address.';
            }

            setFormErrors(prev => ({ ...prev, email: errorMessage }));
            return;
        }

        /* ---------- MESSAGE VALIDATION ---------- */
        if (name === 'message') {
            const MAX_LENGTH = 1000;
            const isOverLimit = value.length > MAX_LENGTH;
            const cleanedValue = value.slice(0, MAX_LENGTH);

            setFormData(prev => ({ ...prev, message: cleanedValue }));

            let errorMessage = '';
            if (cleanedValue.length === 0) {
                errorMessage = 'Project description is required.';
            } else if (isOverLimit) {
                errorMessage = `Message cannot exceed ${MAX_LENGTH} characters.`;
            } else if (cleanedValue.length < 20) {
                errorMessage = 'Message must be at least 20 characters.';
            }

            setFormErrors(prev => ({ ...prev, message: errorMessage }));
            return;
        }

        /* ---------- SERVICE SELECTION ---------- */
        if (name === 'service') {
            setFormData(prev => ({ ...prev, service: value }));
            setFormErrors(prev => ({ ...prev, service: '' }));
            return;
        }

        /* ---------- DEFAULT ---------- */
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Final validation before submit
        const errors = {};
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.name.trim()) errors.name = 'Full name is required.';
        if (!formData.email.trim()) {
            errors.email = 'Email is required.';
        } else if (!emailPattern.test(formData.email)) {
            errors.email = 'Enter a valid email address.';
        }
        if (!formData.phone || formData.phone.length !== 10) {
            errors.phone = 'Valid 10-digit phone number required.';
        }
        if (!formData.message || formData.message.length < 20) {
            errors.message = 'Project description must be at least 20 characters.';
        }

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            setStatus({
                type: 'error',
                message: 'Please fix the errors in the form before submitting.'
            });
            return;
        }

        setFormErrors({});
        setIsSubmitting(true);
        setStatus({ type: null, message: '' });

        try {
            // Send email via EmailJS
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    web_name: 'aNquest Media',
                    message: `
                    Name: ${formData.name}
                    Email: ${formData.email}
                    Phone: ${formData.phone}
                    Service: ${formData.service || 'Not specified'}
                    Message: ${formData.message}
          `
                },
                EMAILJS_PUBLIC_KEY
            );

            setStatus({
                type: 'success',
                message: 'Thank you! We will contact you within one business day.'
            });

            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                service: '',
                message: ''
            });

            // Navigate to thank you page after 1 second
            setTimeout(() => {
                navigate('/thank-you');
            }, 1000);

        } catch (err) {
            console.error('EmailJS Error:', err);
            setStatus({
                type: 'error',
                message: 'Failed to send message. Please try again or contact us directly.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen theme-card p-4 sm:p-8 rounded-3xl">
            <div className="max-w-3xl mx-auto  rounded-3xl  p-6 sm:p-10">


                {/* Status Message */}
                {status.message && (
                    <div
                        className={`mb-6 rounded-2xl px-4 py-3 text-sm font-semibold ${status.type === 'success'
                            ? 'bg-green-100 text-green-700 border-2 border-green-300'
                            : 'bg-red-100 text-red-700 border-2 border-red-300'
                            }`}
                    >
                        {status.message}
                    </div>
                )}

                <div onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Name Field */}
                        <div>
                            <label className="block text-sm font-semibold theme-text-primary mb-2">
                                Full Name *
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 transition-all ${formErrors.name
                                    ? 'border-red-500 focus:ring-red-500'
                                    : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                                    }`}
                                placeholder="John Doe"
                            />
                            {formErrors.name && (
                                <p className="text-sm text-red-600 mt-1">{formErrors.name}</p>
                            )}

                        </div>

                        {/* Email Field */}
                        <div>
                            <label className="block text-sm font-semibold theme-text-primary mb-2">
                                Email Address *
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 transition-all ${formErrors.email
                                    ? 'border-red-500 focus:ring-red-500'
                                    : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                                    }`}
                                placeholder="john@example.com"
                            />
                            {formErrors.email && (
                                <p className="text-sm text-red-600 mt-1">{formErrors.email}</p>
                            )}

                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Phone Field */}
                        <div>
                            <label className="block text-sm font-semibold theme-text-primary mb-2">
                                Phone Number *
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 transition-all ${formErrors.phone
                                    ? 'border-red-500 focus:ring-red-500'
                                    : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                                    }`}
                                placeholder="1234567890"
                            />
                            {formErrors.phone && (
                                <p className="text-sm text-red-600 mt-1">{formErrors.phone}</p>
                            )}

                        </div>

                        {/* Service Field */}
                        <div>
                            <label className="block text-sm font-semibold theme-text-primary mb-2">
                                Service Type
                            </label>
                            <select
                                name="service"
                                value={formData.service}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border-2 theme-text-primary theme-card border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                            >
                                <option value="">Choose a service</option>
                                {services.map((service, index) => (
                                    <option key={index} value={service}>
                                        {service}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Message Field */}
                    <div>
                        <label className="block text-sm font-semibold theme-text-primary mb-2">
                            Project Description *
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={6}
                            className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 transition-all resize-none ${formErrors.message
                                ? 'border-red-500 focus:ring-red-500'
                                : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                                }`}
                            placeholder="Describe your project goals, timeline, budget, and any specific requirements..."
                        />
                        {formErrors.message && (
                            <p className="text-sm text-red-600 mt-1">{formErrors.message}</p>
                        )}

                    </div>

                    <button
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="w-full bg-blue-600 text-white font-bold py-4 px-8 rounded-xl hover:bg-blue-700 transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                    >
                        {isSubmitting ? (
                            <>
                                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                        fill="none"
                                    />
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    />
                                </svg>
                                Sending Message...
                            </>
                        ) : (
                            <>
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                    />
                                </svg>
                                Send Message
                            </>
                        )}
                    </button>
                </div>


            </div>
        </div>
    );
};

export default ContactForm;