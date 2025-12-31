import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import servicesData from "../data/services.json";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  const [services, setServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    setServices(servicesData);
  }, []);

  // 🔹 Get unique categories from JSON
  const categories = ["All", ...new Set(services.map((s) => s.category))];

  // 🔹 Filter services by search + category
  const filteredServices = services.filter((service) => {
    const matchesName = service.serviceName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || service.category === selectedCategory;
    return matchesName && matchesCategory;
  });

  return (
    <div className="bg-[#FFF8F0] min-h-screen text-gray-800 font-sans">
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6" data-aos="fade-up">
          <h1 className="text-3xl font-bold text-orange-500 mb-3 md:mb-0">
            All Services
          </h1>

          <div className="flex space-x-2">
            {/* 🔹 Search input */}
            <input
              type="text"
              placeholder="Search..."
              className="w-40 border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            {/* 🔹 Category dropdown */}
            <select
              className="w-40 border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((cat, idx) => (
                <option key={idx} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.serviceId}
              className="bg-white p-4 rounded-lg shadow hover:scale-105 transition cursor-pointer"
              onClick={() => navigate(`/services/${service.serviceId}`)}
              data-aos="fade-up"
            >
              <img
                src={service.image}
                alt={service.serviceName}
                className="w-full h-48 object-cover rounded mb-3"
              />
              <h3 className="font-bold text-xl">{service.serviceName}</h3>
              <p>Provider: {service.providerName}</p>
              <p>Rating: {service.rating} ⭐</p>
              <p>Price: ${service.price}</p>
              <p>Slots: {service.slotsAvailable}</p>

              <button className="mt-3 bg-orange-500 text-white px-4 py-1 rounded">
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
