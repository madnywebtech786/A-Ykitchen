'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [imageFiles, setImageFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      const newFiles = [...imageFiles, ...files];
      setImageFiles(newFiles);

      // Create previews for new files
      files.forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreviews((prev) => [...prev, reader.result]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeImage = (index) => {
    setImageFiles((prev) => prev.filter((_, i) => i !== index));
    setImagePreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage('');

    try {
      // Create FormData object
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('message', formData.message);

      // Append all image files
      imageFiles.forEach((file) => {
        formDataToSend.append('images', file);
      });

      // Send to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setSubmitMessage(result.message);

        // Show success message for 5 seconds, then reset form
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
          });
          setImageFiles([]);
          setImagePreviews([]);
          setSubmitStatus(null);
          setSubmitMessage('');
        }, 5000);
      } else {
        setSubmitStatus('error');
        setSubmitMessage(result.message);

        // Hide error message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
          setSubmitMessage('');
        }, 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setSubmitMessage('Failed to send message. Please try again.');

      // Hide error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
        setSubmitMessage('');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Phone',
      value: '403-890-9222 / 403 966 9190',
      link: 'tel:+14038909222',
    },
    {
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      value: 'aykitchencabinets@gmail.com',
      link: 'mailto:aykitchencabinets@gmail.com',
    },
    {
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Location',
      value: 'Unit 4122 3961 52nd Ave NE, Calgary AB, T3J 0J8',
      link: 'https://maps.google.com/?q=Unit+4122+3961+52nd+Ave+NE+Calgary+AB+T3J+0J8',
    },
    {
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Hours',
      value: 'Mon-Fri: 9:00 AM - 5:30 PM',
      link: '#',
    },
  ];

  return (
    <section id="contact" className="py-32 bg-white relative overflow-hidden">
      {/* Futuristic Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Small Gradient Orbs */}
        <div className="absolute top-1/4 right-1/4 w-52 h-52 bg-gradient-to-br from-primary/8 to-transparent rounded-full blur-2xl animate-float"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-tr from-primary/7 to-transparent rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-2/3 right-1/3 w-44 h-44 bg-gradient-to-tl from-primary/6 to-transparent rounded-full blur-xl animate-float" style={{ animationDelay: '1.5s' }}></div>

        {/* Floating Geometric Elements */}
        <div className="absolute top-1/4 left-1/4 w-40 h-40 border-2 border-primary/7 rounded-[3rem] rotate-[20deg] animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-36 h-36 border border-primary/8 rounded-full animate-pulse"></div>
        <div className="absolute top-2/3 left-1/3 w-32 h-32 bg-primary/4 rounded-3xl rotate-45 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-28 h-28 border-2 border-primary/6 rounded-2xl rotate-12 animate-float" style={{ animationDelay: '4s' }}></div>

        {/* Message/Mail Icons */}
        <svg className="absolute top-1/3 left-20 w-16 h-16 opacity-10 animate-float" style={{ animationDelay: '2.5s' }} xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="4" width="12" height="8" stroke="#8c0c0c" strokeWidth="1" fill="none"/>
          <path d="M2 4 L8 8 L14 4" stroke="#8c0c0c" strokeWidth="1" fill="none"/>
        </svg>

        {/* Phone Icons */}
        <svg className="absolute top-1/2 right-20 w-14 h-14 opacity-8 animate-pulse" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 1 L6 1 L7 4 L5 5 C5 5 6 8 9 9 L10 7 L13 8 L13 11 C13 11 8 12 3 7 Z" stroke="#8c0c0c" strokeWidth="1" fill="none"/>
        </svg>

        {/* Location Pin */}
        <svg className="absolute top-2/3 right-1/4 w-12 h-12 opacity-10 animate-float" style={{ animationDelay: '3.5s' }} xmlns="http://www.w3.org/2000/svg">
          <path d="M6 0 C3 0 0 3 0 6 C0 9 6 14 6 14 C6 14 12 9 12 6 C12 3 9 0 6 0 Z M6 8 A2 2 0 1 1 6 4 A2 2 0 1 1 6 8 Z" fill="#8c0c0c"/>
        </svg>

        {/* Circuit Board Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.015]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="contact-circuit" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="#8c0c0c"/>
              <path d="M50 50 L80 50 L80 80" stroke="#8c0c0c" strokeWidth="1" fill="none"/>
              <path d="M50 50 L20 50 L20 20" stroke="#8c0c0c" strokeWidth="1" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-circuit)"/>
        </svg>

        {/* Dotted Grid */}
        <div className="absolute top-1/3 left-1/3 w-40 h-40 bg-[radial-gradient(circle_at_4px_4px,rgba(140,12,12,0.06)_2px,transparent_2px)] bg-[size:24px_24px]"></div>

        {/* Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(140,12,12,0.03)_0%,transparent_60%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/5 border border-primary/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-sm font-bold text-primary uppercase tracking-wider">Get In Touch</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="text-gray-900">Let's Start Your </span>
            <span className="gradient-text">Dream Project</span>
          </h2>
          <p className="text-xl text-gray-600">
            Ready to transform your space? Contact us today for a free consultation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Map Section */}
          <div className="relative group animate-slide-in-left h-full">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200 h-full flex flex-col">
              {/* Map Container */}
              <div className="relative flex-1 bg-gray-100" style={{ minHeight: '400px' }}>
                {/* Embedded Google Map */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.8577!2d-113.9606!3d51.0870!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537170b7b3b3b3b3%3A0x0!2sUnit%204122%203961%2052nd%20Ave%20NE%2C%20Calgary%2C%20AB%20T3J%200J8!5e0!3m2!1sen!2sca!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="transition-all duration-500"
                ></iframe>

                {/* Location Badge */}
                <div className="absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2 animate-bounce">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>A&Y Cabinets LTD</span>
                </div>
              </div>

              {/* Contact Info Cards Below Map */}
              <div className="p-6 grid grid-cols-3 gap-4 bg-white">
                {/* Call */}
                <div className="flex flex-col items-center justify-center group/item cursor-pointer">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover/item:bg-primary transition-colors duration-300 flex-shrink-0">
                      <svg className="w-5 h-5 text-primary group-hover/item:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-xs font-bold text-gray-900 mb-0.5">Call</h4>
                  <p className="text-xs text-gray-600 text-center">403-890-9222</p>
                  <p className="text-xs text-gray-600 text-center">403 966 9190</p>
                </div>

                {/* Email */}
                <div className="flex flex-col items-center justify-center group/item cursor-pointer">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover/item:bg-primary transition-colors duration-300 flex-shrink-0">
                      <svg className="w-5 h-5 text-primary group-hover/item:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-xs font-bold text-gray-900 mb-0.5">Email</h4>
                  <p className="text-xs text-gray-600 text-center">aykitchencabinets@gmail.com</p>
                </div>

                {/* Location */}
                <div className="flex flex-col items-center justify-center group/item cursor-pointer">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover/item:bg-primary transition-colors duration-300 flex-shrink-0">
                      <svg className="w-5 h-5 text-primary group-hover/item:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-xs font-bold text-gray-900 mb-0.5">Location</h4>
                  <p className="text-xs text-gray-600 text-center">Unit 4122 3961 52nd Ave NE</p>
                  <p className="text-xs text-gray-600 text-center">Calgary AB, T3J 0J8</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative animate-slide-in-right h-full">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-200 h-full flex flex-col">
              <form onSubmit={handleSubmit} className="space-y-5 flex-1 flex flex-col">
                {/* Name Input */}
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-primary focus:bg-white transition-all duration-300 outline-none text-gray-900"
                    placeholder="Name"
                  />
                </div>

                {/* Email Input */}
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-primary focus:bg-white transition-all duration-300 outline-none text-gray-900"
                    placeholder="Email address"
                  />
                </div>

                {/* Phone Input */}
                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-primary focus:bg-white transition-all duration-300 outline-none text-gray-900"
                    placeholder="Phone number"
                  />
                </div>

                {/* Image Upload */}
                <div className="relative">
                  <label htmlFor="image-upload" className="block text-sm font-semibold text-gray-700 mb-2">
                    Upload Images (Optional)
                  </label>
                  <div className="relative">
                    {/* Upload Button */}
                    <label
                      htmlFor="image-upload"
                      className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary hover:bg-primary/5 transition-all duration-300 cursor-pointer mb-3"
                    >
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm text-gray-600">Click to upload images</span>
                    </label>

                    {/* Image Previews Grid */}
                    {imagePreviews.length > 0 && (
                      <div className="grid grid-cols-4 gap-2">
                        {imagePreviews.map((preview, index) => (
                          <div key={index} className="relative w-20 h-20 rounded-lg overflow-hidden border-2 border-primary group">
                            <img src={preview} alt={`Preview ${index + 1}`} className="w-full h-full object-cover" />
                            <button
                              type="button"
                              onClick={() => removeImage(index)}
                              className="absolute top-1 right-1 w-6 h-6 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors shadow-lg opacity-0 group-hover:opacity-100"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </div>
                        ))}
                      </div>
                    )}

                    <input
                      type="file"
                      id="image-upload"
                      accept="image/*"
                      multiple
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="relative flex-1">
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full h-full min-h-[200px] px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-primary focus:bg-white transition-all duration-300 outline-none resize-none text-gray-900"
                    placeholder="Message"
                  ></textarea>
                </div>

                {/* Success/Error Message */}
                {submitStatus && (
                  <div
                    className={`p-4 rounded-lg flex items-center gap-3 animate-fade-in ${
                      submitStatus === 'success'
                        ? 'bg-green-50 border-2 border-green-500'
                        : 'bg-red-50 border-2 border-red-500'
                    }`}
                  >
                    {submitStatus === 'success' ? (
                      <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    <p className={`font-semibold ${submitStatus === 'success' ? 'text-green-700' : 'text-red-700'}`}>
                      {submitMessage}
                    </p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    'Send now'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
