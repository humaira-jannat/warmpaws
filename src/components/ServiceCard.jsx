import React from "react";
import { Link } from "react-router-dom";

export default function ServiceCard({ service }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1">
      <div className="h-48 overflow-hidden">
        <img
          src={service.image}
          alt={service.serviceName}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">
          {service.serviceName}
        </h3>

        <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
          <div className="flex items-center gap-2">
            <span className="font-medium text-orange-500">${service.price}</span>
            <span className="px-2 py-0.5 bg-orange-50 text-orange-600 rounded text-xs">
              {service.category || "General"}
            </span>
          </div>

          <div className="flex items-center gap-1">
            <span className="text-yellow-500 font-semibold">{service.rating}</span>
            <svg className="w-4 h-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.538 1.118L10 15.347l-3.35 2.578c-.783.57-1.838-.197-1.538-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.665 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
            </svg>
          </div>
        </div>

        <p className="text-sm text-gray-600 line-clamp-2 mb-4">
          {service.description || "A cozy winter care option to keep your pet safe and warm."}
        </p>

        <div className="flex gap-2">
          <Link
            to={`/services/${service.serviceId}`}
            className="flex-1 text-center bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
          >
            View Details
          </Link>

          <button
            className="px-3 py-2 border border-orange-500 text-orange-500 rounded hover:bg-orange-50 transition"
            onClick={() => alert("Add to favorites (client-only)")}
          >
            ♥
          </button>
        </div>
      </div>
    </div>
  );
}
