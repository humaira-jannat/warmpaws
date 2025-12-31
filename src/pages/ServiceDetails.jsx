import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import servicesData from "../data/services.json";
import toast, { Toaster } from "react-hot-toast";


const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [service, setService] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "" });



  // 🔹 Load service by ID
  useEffect(() => {
    const foundService = servicesData.find(
      (item) => String(item.serviceId) === String(id)
    );
    setService(foundService);
  }, [id]);

  // 🔹 Input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 🔹 Handle booking
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(`Service booked successfully for ${formData.name}!`);
    setFormData({ name: "", email: "" });
  };

  if (!service) {
    return <p className="text-center mt-10">Service not found</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-10">
      <Toaster position="top-right" />

      {/* Service Info */}
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={service.image}
          alt={service.serviceName}
          className="w-full md:w-1/2 h-80 object-cover rounded-lg shadow-lg"
        />
        <div className="flex-1 space-y-3">
          <h1 className="text-3xl font-bold text-orange-500">
            {service.serviceName}
          </h1>
          <p className="text-gray-700">{service.description}</p>
          <p><strong>Provider:</strong> {service.providerName}</p>
          <p><strong>Email:</strong> {service.providerEmail}</p>
          <p><strong>Category:</strong> {service.category}</p>
          <p><strong>Rating:</strong> {service.rating} ⭐</p>
          <p><strong>Price:</strong> ${service.price}</p>
          <p><strong>Slots Available:</strong> {service.slotsAvailable}</p>
        </div>
      </div>

      {/* Booking Form */}
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
        <h2 className="text-2xl font-semibold text-orange-500 mb-4">
          Book This Service
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default ServiceDetails;
