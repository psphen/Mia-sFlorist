import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'phone' && value.length > 10) return;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
            newErrors.email = 'Valid email is required';
        if (!formData.phone.trim())
            newErrors.phone = 'Phone number is required';
        else if (formData.phone.length !== 10)
            newErrors.phone = 'Phone number must be 10 digits';
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setErrors({});
            console.log('Form submitted:', formData);

            // Mostrar SweetAlert
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Your message has been sent successfully!',
                confirmButtonText: 'OK',
            });

            // Opcional: Limpiar el formulario después de enviar
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: '',
            });
        }
    };
    return (
        <>
            <div className="container mb-4">
                <div className="row">
                    <div className="col-md-6">
                        <div className="contact-card">
                            <h1 className="top-title ms-4 text-pink fw-800">
                                <span className="contact-container-1">Contact</span>{' '}
                                <span className="contact-container-2">us</span>
                            </h1>
                            <p className="fw-800" style={{ color: '#8f8f8f' }}>Mia's Florist is here to craft your story with favorite flowers and talloret details for you special occasion in Connecticut. Let us lend a hand in creating the perfect touch just for you.
                            </p>
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-12">
                                        <span className="fw-800 ms-4 my-2" style={{ color: '#484848' }}>
                                            Name
                                        </span>
                                        <input type="text" name="name" className="form-control form-control-contact" value={formData.name} onChange={handleChange}/>
                                        {errors.name && (
                                            <small className="text-danger">{errors.name}</small>
                                        )}
                                    </div>
                                    <div className="col-md-6">
                                        <span className="fw-800 ms-4 my-2" style={{ color: '#484848' }}>
                                            Email
                                        </span>
                                        <input type="text" name="email" className="form-control form-control-contact" value={formData.email} onChange={handleChange}/>
                                        {errors.email && (
                                            <small className="text-danger">{errors.email}</small>
                                        )}
                                    </div>
                                    <div className="col-md-6">
                                        <span className="fw-800 ms-4 my-2" style={{ color: '#484848' }}>
                                            Phone
                                        </span>
                                        <input type="number" name="phone" className="form-control form-control-contact" value={formData.phone} onChange={handleChange}/>
                                        {errors.phone && (
                                            <small className="text-danger">{errors.phone}</small>
                                        )}
                                    </div>
                                    <div className="col-md-12">
                                        <span className="fw-800 ms-4 my-2" style={{ color: '#484848' }}>
                                            Message
                                        </span>
                                        <textarea name="message" className="form-control form-control-contact" rows="5" value={formData.message} onChange={handleChange}></textarea>
                                        {errors.message && (
                                            <small className="text-danger">{errors.message}</small>
                                        )}
                                    </div>
                                </div>
                                <p className="fw-800 my-4" style={{ color: '#8f8f8f' }}>
                                    By clicking 'Send', you agree to our Terms and Conditions and Privacy Policy.
                                </p>
                                <div className="text-center">
                                    <button type="submit" className="btn text-white px-4 py-2 rounded-pill btn-shop" style={{ width: '70%' }}>
                                        Contact us
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src="/image/Grupo-contact.png" alt="home-page" className="img-fluid position-relative"/>
                    </div>
                </div>
            </div>
            <div className="details-section my-7 d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 pt-4 text-center">
                            <h4 className="fw-800 text-pink">Mia's Florist</h4>
                            <p><span className="fw-800">Over 10 Years of Expertise,</span> Turning Special Moments into Extraordinary Occasions</p>
                        </div>
                        <div className="col-md-4 pt-4 text-center">
                            <h4 className="fw-800 text-pink">Our Team</h4>
                            <p>Experience florist guarantee that each creation will bring beauty and joy to your moments, creating floral wonders that  tell your unique story.</p>
                        </div>
                        <div className="col-md-4 pt-4 text-center">
                            <h4 className="fw-800 text-pink">Contact us</h4>
                            <p className="mb-0 text-pink fw-800">860 796 9144</p>
                            <p className="mb-0 fw-800">manager@miasflorist.com</p>
                            <p className="mb-0 fw-800">363 park ave East Hartford ct 06108</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact-container position-relative">
                <div className="background-box-contact"></div>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-md-6 px-5">
                            <img src="/image/floreria-cultivo.png" alt="home-page" className="img-fluid position-relative"/>
                        </div>
                        <div className="col-md-6 px-5 z-index-3">
                            <h1 className="top-title ms-5 text-pink fw-800">
                                <span className="last-container-1">Mia's</span> <span className="last-container-2">Florist</span>
                            </h1>
                            <p className="fw-800 mt-3">Your Best Choice for Delivery in Connecticut</p>
                            <p className="mt-3">We are your premier destination for enchanting floral experiences and fast flower deliveries in East Hartford, Hartford, Manchester, Glastonbury, Bolton, Willimantic, West Hartford, East Windsor, North Windsor and surrounding areas. Our floral expertise seamlessly blends art with comfort, as we craft meticulously hand-selected arrangements to transform every occasion into a truly memorable one. With Mia's Florist, you can expect fast, hassle-free delivery of fresh flowers straight to youy door</p>
                            <p className="mt-3">As your florist of choice, Mia's Florist goes above and beyond. consistently exceeding expectations by creating exquisite floral arrangements that add atouch of magic to your life. Whether you're celebrating important moments or conveying heartfelt emotions, our enchanting flower-shopping experience is designed to make every moment special. Each delivery from Mia's Florist is a carefully crafted</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;