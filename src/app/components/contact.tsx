"use client";
import React, { useState, FormEvent, ChangeEvent } from "react";

interface FormType {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}
interface ErrorType {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactCard() {
  const [formData, setFormData] = useState<FormType>({
    fullName: "",
    email: "",
    subject: "",
    message: ""
  });
  const [error, setError] = useState<ErrorType>({
    fullName: "",
    email: "",
    subject: "",
    message: ""
  });

  // Form logic
  const validateForm = () => {
    const formErrors: FormType = {
      fullName: "",
      email: "",
      subject: "",
      message: ""
    };
    if (!formData.fullName) {
      formErrors.fullName = "Full name is required";
    }
    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email address is invalid";
    }

    if (!formData.subject) {
      formErrors.subject = "Subject is required";
    }

    if (!formData.message) {
      formErrors.message = "Message is required";
    }

    return formErrors;
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setError(validationErrors);
    // If no errors
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Submitted Successfully", formData);
      // Clear form after submission
      setFormData({ fullName: "", email: "", subject: "", message: "" });
    }
  };

  // Handle change
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <section className="bg-bg py-16 px-8">
        <h1 className="text-4xl font-bold text-gray-800 text-center">
          Contact Us
        </h1>
      </section>
      <div className="bg-bg">
        <div className="flex flex-col md:flex-row items-center max-w-screen-xl p-9 md:p-10">
          {/* Form Section */}
          <form onSubmit={handleSubmit} className="flex-1 bg-white p-8 shadow-2xl rounded-md w-auto max-w-md mx-auto mb-10">
            {/* Name */}
            <div className="mb-4">
              <label className="block mb-2 text-gray-700">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              {error.fullName && <p className="text-red-500 text-sm">{error.fullName}</p>}
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block mb-2 text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              {error.email && <p className="text-red-500 text-sm">{error.email}</p>}
            </div>

            {/* Subject */}
            <div className="mb-4">
              <label className="block mb-2 text-gray-700">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              {error.subject && <p className="text-red-500 text-sm">{error.subject}</p>}
            </div>

            {/* Message */}
            <div className="mb-4">
              <label className="block mb-2 text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                rows={4}
              ></textarea>
              {error.message && <p className="text-red-500 text-sm">{error.message}</p>}
            </div>

            {/* Submit Button */}
            <button className="bg-black text-white py-2 px-4 rounded-md hover:bg-orange-600 transition">
              Submit
            </button>
          </form>

          {/* Text Section */}
          <div className="flex-1 p-5 mb-10 md:mb-0 md:pl-12">
            <h1 className="text-4xl md:text-5xl font-medium leading-tight hover:text-amber-700">
              Discover the Best
            </h1>
            <h1 className="text-4xl mt-2 md:text-5xl font-medium text-brown-800 leading-tight">
              Baked Goods for You
            </h1>
            <p className="text-gray-500 mt-11">
              At Our Bakery, we offer a delightful range of baked goods crafted with the finest ingredients. Whether youre looking for cakes, pastries, or breads, we have something for everyone.
            </p>
            <p className="text-gray-500 mt-4">
              Join us today to explore our delicious offerings and find your new favorite treat. Sign up now and enjoy exclusive deals!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
