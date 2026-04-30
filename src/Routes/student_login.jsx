import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiCall, API_ENDPOINTS } from "../config/api";

export default function LoginPage() {
    const [role, setRole] = useState("student");
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    // Handle input change
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        setError(""); // Clear error on input change
    };

    // Handle submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            // Prepare login data
            const loginData = {
                email: formData.email,
                password: formData.password,
                userType: role.toUpperCase() // "SCHOOL" or "STUDENT"
            };

            // Call login API
            const response = await apiCall(API_ENDPOINTS.LOGIN, 'POST', loginData);

            // Save token and user data to localStorage
            localStorage.setItem('token', response.token);
            localStorage.setItem('userType', response.userType);
            localStorage.setItem('userData', JSON.stringify(response.userData));

            // Show success message
            alert(`Login successful! Welcome ${response.userData.schoolName || response.userData.name}!`);

            // Navigate to home
            navigate('/home');

        } catch (err) {
            setError(err.message || "Login failed. Please check your credentials.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex h-screen">
            {/* Left side placeholder */}
            <div className="w-3/7 bg-gray-200 flex flex-col gap-6 items-center justify-center">
                <img className="w-80 pointer-events-none" src="log_l_pic.jpg" alt="" />
                <p className="text-2xl font-semibold text-black">
                    "Safety is not expensive, it's priceless"
                </p>
            </div>

            {/* Right side login form */}
            <div className="w-4/7 flex items-center justify-center">
                <div className="w-full max-w-md p-8">
                    {/* Logo + Title */}
                    <div className="flex justify-center gap-2 mb-3">
                        <img className='w-10 pointer-events-none' src="logo.png" alt="" />
                        <h1 className="text-3xl font-bold text-center mb-2">EduShield</h1>
                    </div>
                    <p className="text-sm text-gray-500 text-center mb-6">
                        Learn, prepare, and stay safe — turning disaster readiness into a smart, engaging journey
                    </p>

                    {/* Role Selection */}
                    <div className="flex justify-center space-x-6 mb-6">
                        <label className="flex items-center space-x-2">
                            <input
                                type="radio"
                                value="student"
                                checked={role === "student"}
                                onChange={() => {
                                    setRole("student");
                                    setFormData({ email: "", password: "" });
                                }}
                            />
                            <span>Student</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input
                                type="radio"
                                value="school"
                                checked={role === "school"}
                                onChange={() => {
                                    setRole("school");
                                    setFormData({ email: "", password: "" });
                                }}
                            />
                            <span>School</span>
                        </label>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                            {error}
                        </div>
                    )}

                    {/* Login Form */}
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                        />

                        {/* Forgot Password */}
                        <div className="flex justify-end text-sm">
                            <a href="#" className="text-blue-500 hover:underline">
                                Forgot password?
                            </a>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition disabled:bg-gray-400"
                        >
                            {loading ? "Logging in..." : "Log in"}
                        </button>
                    </form>

                    <div className="mt-4 text-center">
                        <p className="text-sm text-gray-600">
                            Don't have an account?{" "}
                            <Link to="/signin" className="text-black font-semibold hover:underline">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}