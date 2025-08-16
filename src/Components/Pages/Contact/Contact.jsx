"use client";

import { useState } from "react";
import { FaPaperPlane, FaUpload } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-hot-toast";

const SERVICES = [
  "Engine Electrical",
  "Programming",
  "Hybrid Vehicles",
  "Electric Vehicles",
  "Air Conditioning (AC)",
  "Mechanical Services (Engine, Transmission, Suspension & Steering)",
  "Other",
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    services: [],
    message: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleServiceToggle = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    } else {
      setImagePreview(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const payload = new FormData();
    payload.append("name", formData.name);
    payload.append("phone", formData.phone);
    payload.append("email", formData.email);
    payload.append("message", formData.message);
    payload.append("services", JSON.stringify(formData.services));
    if (imageFile) payload.append("image", imageFile);

    try {
      const res = await axios.post("/api/v1/contact", payload);
      toast.success(res.data.message || "Message sent successfully!");
      setFormData({
        name: "",
        phone: "",
        email: "",
        services: [],
        message: "",
      });
      setImageFile(null);
      setImagePreview(null);
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-4 md:mx-auto bg-[var(--white)] p-4 md:p-10 rounded-xl shadow-md mt-10 border border-[var(--gray-border)]">
      <h2 className="text-3xl font-bold text-[var(--primary-blue)] mb-6 text-center">
        Arshad Auto
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div>
          <label className="block text-[var(--gray-text-dark)] mb-1 font-medium">
            Name <span className="text-[var(--error-red)]">*</span>
          </label>
          <input
            required
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full border border-[var(--gray-border)] px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-blue-light)]"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-[var(--gray-text-dark)] mb-1 font-medium">
            Phone Number <span className="text-[var(--error-red)]">*</span>
          </label>
          <input
            required
            type="tel"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="w-full border border-[var(--gray-border)] px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-blue-light)]"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-[var(--gray-text-dark)] mb-1 font-medium">
            Email (optional)
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full border border-[var(--gray-border)] px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-blue-light)]"
          />
        </div>

        {/* Services Dropdown */}
        <div>
          <label className="block text-[var(--gray-text-dark)] mb-1 font-medium">
            Select Services <span className="text-[var(--error-red)]">*</span>
          </label>
          <div className="bg-[var(--gray-surface)] border border-[var(--gray-border)] rounded-lg p-4 overflow-y-auto shadow-sm">
            {SERVICES.map((service) => (
              <label
                key={service}
                className="flex items-center p-2 rounded-md cursor-pointer transition-colors hover:bg-[var(--gray-background)]"
              >
                <input
                  type="checkbox"
                  checked={formData.services.includes(service)}
                  onChange={() => handleServiceToggle(service)}
                  className="w-4 h-4 text-[var(--primary-green)] border-[var(--gray-border)] rounded focus:ring-[var(--primary-green)] cursor-pointer"
                />
                <span className="ml-3 text-sm text-[var(--gray-text-dark)]">
                  {service}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-[var(--gray-text-dark)] mb-1 font-medium">
            Upload Car Image (optional)
          </label>
          <div className="flex flex-col gap-4">
            <label className="flex items-center gap-2 bg-[var(--accent-orange)] text-[var(--white)] px-4 py-2 rounded-md cursor-pointer hover:opacity-80 active:opacity-80 transition w-28">
              <FaUpload />
              <span>Upload</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="w-auto md:w-60 h-auto object-cover rounded shadow border border-[var(--gray-border)]"
              />
            )}
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-[var(--gray-text-dark)] mb-1 font-medium">
            Message <span className="text-[var(--error-red)]">*</span>
          </label>
          <textarea
            required
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            rows="5"
            className="w-full border border-[var(--gray-border)] px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-blue-light)]"
          ></textarea>
        </div>

        {/* Display Error and Success Messages Here */}

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="bg-[var(--primary-green)] text-[var(--white)] px-4 py-2 font-bold text-center border-2 border-[var(--primary-green)] hover:bg-[var(--white)] hover:text-[var(--primary-green)] active:scale-95 active:bg-transparent active:text-[var(--primary-green)] cursor-pointer sm:transition-all sm:duration-300 ease-in-out rounded-full w-full flex items-center justify-center gap-4"
        >
          <FaPaperPlane />
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
