import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function SigninPage() {
    const [role, setRole] = useState("school");
    const [formData, setFormData] = useState({});
    const [submitted, setSubmitted] = useState(false);

    // Handle input change
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Handle submit
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    // Effect: save to localStorage if all fields are filled
    useEffect(() => {
        if (submitted) {
            if (role === "school") {
                if (formData.schoolName && formData.password) {
                    localStorage.setItem("schoolLogin", JSON.stringify(formData));
                } else {
                    alert("Please fill all fields before submitting ❌");
                }
            } else if (role === "student") {
                if (
                    formData.schoolName &&
                    formData.studentName &&
                    formData.class &&
                    formData.section &&
                    formData.rollNumber &&
                    formData.password
                ) {
                    localStorage.setItem("studentLogin", JSON.stringify(formData));
                } else {
                    alert("Please fill all fields before submitting ❌");
                }
            }
            setSubmitted(false); // reset flag
        }
    }, [submitted, role, formData]);

    return (
        <div className="flex h-screen">
            {/* Left side placeholder */}
            <div className="w-3/7 bg-gray-200 flex flex-col gap-6 items-center justify-center">
                <img className="w-80 pointer-events-none" src="log_l_pic.jpg" alt="" />
                <p className="text-2xl font-semibold text-black">
                    “Safety is not expensive, it’s priceless”
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
                                    setFormData({});
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
                                    setFormData({});
                                }}
                            />
                            <span>School</span>
                        </label>
                    </div>

                    {/* Login Form */}
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        {role === "school" ? (
                            <>
                                <input
                                    type="text"
                                    name="schoolName"
                                    placeholder="School Name"
                                    value={formData.schoolName || ""}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={formData.password || ""}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                />
                            </>
                        ) : (
                            <>
                                <input
                                    type="text"
                                    name="schoolName"
                                    placeholder="School Name"
                                    value={formData.schoolName || ""}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                />
                                <input
                                    type="text"
                                    name="studentName"
                                    placeholder="Student Name"
                                    value={formData.studentName || ""}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                />
                                <input
                                    type="text"
                                    name="class"
                                    placeholder="Class"
                                    value={formData.class || ""}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                />
                                <input
                                    type="text"
                                    name="section"
                                    placeholder="Section"
                                    value={formData.section || ""}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                />
                                <input
                                    type="text"
                                    name="rollNumber"
                                    placeholder="Roll Number"
                                    value={formData.rollNumber || ""}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={formData.password || ""}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                />
                            </>
                        )}

                        {/* Forgot Password */}
                        <div className="flex justify-end text-sm">
                            <a href="#" className="text-blue-500 hover:underline">
                                Forgot password?
                            </a>
                        </div>

                        {/* Submit Button */}
                        <Link to="/home"><button
                            type="submit"
                            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
                        >
                            {role === "school" ? "Sign in" : "Sign in"}
                        </button></Link>
                    </form>
                </div>
            </div>
        </div>
    );
}
