"use client";
import { useState } from "react";
import { db } from "../../Firebase/firebaseConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false); // 👈 loading state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validatePhone = (phone) => /^03\d{9}$/.test(phone);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name) {
      return toast.error("Name is required.");
    }
    if (!validatePhone(formData.phone)) {
      return toast.error("Phone must be 11 digits and start with 03.");
    }
    if (!formData.subject) {
      return toast.error("Please tell us what you are looking for.");
    }
    if (!formData.message) {
      return toast.error("Message is required.");
    }
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      return toast.error("Invalid email format.");
    }

    try {
      setLoading(true); // start loading
      await addDoc(collection(db, "contacts"), {
        ...formData,
        status: "unread",   // 👈 added here
        createdAt: Timestamp.now(),
      });
      toast.success("Form submitted successfully!");
      setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false); // stop loading
    }
  };

  return (
    <div className="mx-2">
      <div className="bg-[var(--white)] rounded-2xl shadow-lg hover:shadow-xl transition max-w-2xl mx-auto my-4 md:my-8 py-10 px-4 md:px-6">
        <h1 className="text-3xl font-bold text-[var(--blue-dark)] mb-6 text-center">
          Contact Us
        </h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="text-[var(--green-dark)] text-lg font-bold"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-[var(--gray-light)] rounded-lg px-4 py-3 focus:ring-2 focus:ring-[var(--blue-light)] focus:outline-none"
              placeholder="Full Name"
            />
            <p className="text-[var(--gray)] mt-2">
              Please enter your full name.
            </p>
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="text-[var(--green-dark)] text-lg font-bold"
            >
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-[var(--gray-light)] rounded-lg px-4 py-3 focus:ring-2 focus:ring-[var(--blue-light)] focus:outline-none"
              placeholder="03XXXXXXXXX"
            />
            <p className="text-[var(--gray)] mt-2">
              Please enter your phone number.
            </p>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="text-[var(--green-dark)] text-lg font-bold"
            >
              Email (optional)
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-[var(--gray-light)] rounded-lg px-4 py-3 focus:ring-2 focus:ring-[var(--blue-light)] focus:outline-none"
              placeholder="Email (optional)"
            />
            <p className="text-[var(--gray)] mt-2">Please enter your email.</p>
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className="text-[var(--green-dark)] text-lg font-bold"
            >
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full border border-[var(--gray-light)] rounded-lg px-4 py-3 focus:ring-2 focus:ring-[var(--blue-light)] focus:outline-none"
              placeholder="What are you looking for. Service or Course?"
            />
            <p className="text-[var(--gray)] mt-2">
              Tell us what you are looking for. Mention the service or course
              you are interested in.
            </p>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="text-[var(--green-dark)] text-lg font-bold"
            >
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-[var(--gray-light)] rounded-lg px-4 py-3 focus:ring-2 focus:ring-[var(--blue-light)] focus:outline-none"
              placeholder="Your message..."
            ></textarea>
            <p className="text-[var(--gray)] mt-2">
              Please enter your query or message.
            </p>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg flex justify-center items-center gap-2 font-semibold transition cursor-pointer ${
              loading
                ? "bg-[var(--green-light)] text-[var(--white)]"
                : "bg-[var(--green)] hover:bg-[var(--green-dark)] text-[var(--white)]"
            }`}
          >
            {loading && (
              <svg
                className="animate-spin h-5 w-5 text-[var(--white)]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
            )}
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>

        {/* Toast Container */}
        <ToastContainer position="top-center" autoClose={3000} />
      </div>
    </div>
  );
};

export default Contact;
