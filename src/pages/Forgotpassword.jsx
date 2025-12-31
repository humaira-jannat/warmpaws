import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase.config";
import { useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const ForgotPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // ✅ Prefill email if coming from login
  const [email, setEmail] = useState(location.state?.email || "");

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent!");
      // ✅ Redirect to Gmail
      setTimeout(() => {
        window.location.href = "https://mail.google.com";
      }, 1500);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50">
      <Toaster />
      <form
        onSubmit={handleReset}
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center text-orange-500 mb-4">
          Reset Password
        </h2>

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border px-4 py-2 rounded mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
        >
          Send Reset Email
        </button>

        <button
          type="button"
          onClick={() => navigate("/login")}
          className="w-full mt-3 border py-2 rounded"
        >
          Back to Login
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;

