
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import AOS from "aos";
import "aos/dist/aos.css";
import servicesData from "../data/services.json";

// Expert vets
const experts = [
  { name: "Dr. Smith", image: "https://i.pravatar.cc/100?img=1" },
  { name: "Dr. Jane", image: "https://i.pravatar.cc/100?img=2" },
  { name: "Dr. Bob", image: "https://i.pravatar.cc/100?img=3" },
];

const Home = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    setServices(servicesData);
  }, []);

  const topServices = [...services]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  return (
    <div className="bg-[#FFF8F0] min-h-screen text-gray-800 font-sans">

      {/* 🔹 Hero Slider */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          loop
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
        >
          {topServices.map((service) => (
            <SwiperSlide key={service.serviceId}>
              <div className="relative rounded-xl overflow-hidden shadow-xl hover:scale-105 transition duration-500">
                <img
                  src={service.image}
                  alt={service.serviceName}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <h2 className="text-white text-3xl font-bold">
                    {service.serviceName}
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

{/* 🔹 Popular Services */}
<section className="max-w-6xl mx-auto px-6 py-12">
  <h2 className="text-3xl font-bold text-orange-500 mb-6" data-aos="fade-up">
    Popular Winter Care Services
  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {services.slice(0, 8).map((service) => (
      <div
        key={service.serviceId}
        className="bg-white rounded-lg shadow p-4 hover:scale-105 transition cursor-pointer"
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

  {/* View All Button */}
  <div className="text-center mt-8">
    <button
      onClick={() => navigate("/services")}
      className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition"
    >
      View All Services
    </button>
  </div>
</section>

      {/* 🔹 Winter Care Tips */}
      <section className="max-w-6xl mx-auto px-6 py-12 bg-orange-50 rounded-lg" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-orange-500 mb-6">
          Winter Care Tips for Pets
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Keep pets indoors during extreme cold.",
            "Provide warm bedding and blankets.",
            "Use paw balm for frost protection.",
            "Limit outdoor walks in icy weather.",
            "Ensure proper winter nutrition.",
          ].map((tip, i) => (
            <div key={i} className="bg-white p-4 rounded shadow hover:shadow-lg">
              {tip}
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 Expert Vets */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-orange-500 mb-6" data-aos="fade-up">
          Meet Our Expert Vets
        </h2>

        <div className="flex flex-wrap gap-6 justify-center">
          {experts.map((expert, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-lg shadow text-center hover:scale-105 transition"
              data-aos="zoom-in"
            >
              <img
                src={expert.image}
                alt={expert.name}
                className="w-24 h-24 rounded-full mx-auto mb-2"
              />
              <p className="font-semibold">{expert.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 Extra Section: Fun Winter Activities */}
      <section className="max-w-6xl mx-auto px-6 py-12 bg-orange-200 rounded-lg" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-orange-500 mb-6">
          Fun Winter Activities for Pets
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Snow walks with proper paw protection",
            "Indoor fetch games",
            "Cozy cuddle time by the fireplace",
            "Winter photo sessions",
            "Warm bath and grooming sessions"
          ].map((activity, idx) => (
            <div key={idx} className="bg-white p-4 rounded shadow hover:shadow-lg">
              {activity}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
