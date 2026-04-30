import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeftToLine,GraduationCap } from "lucide-react";
import { apiCall, API_ENDPOINTS } from "../config/api";

export default function SigninPage() {
    const [role, setRole] = useState("student");
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    // Handle input change
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        setError("");
    };

// Handle submit
const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
        let response;

            // Register Student
            const studentData = {
                studentId: formData.rollNumber || `STU${Date.now()}`,
                name: formData.studentName,
                email: formData.email,
                password: formData.password,
                schoolId: formData.schoolName,
                grade: formData.class || "",
                section: formData.section || ""
            };

            response = await apiCall(API_ENDPOINTS.REGISTER_STUDENT, 'POST', studentData);

        // Registration successful - now auto-login
        alert("Registration successful! Logging you in...");

        const loginData = {
            email: formData.email,
            password: formData.password,
            userType: role.toUpperCase()
        };

        const loginResponse = await apiCall(API_ENDPOINTS.LOGIN, 'POST', loginData);

        // Save token and user data
        localStorage.setItem('token', loginResponse.token);
        localStorage.setItem('userType', loginResponse.userType);
        localStorage.setItem('userData', JSON.stringify(loginResponse.userData));

        // Navigate to home
        navigate('/home');
    
    } catch (err) {
        setError(err.message || "Registration failed. Please try again.");
    } finally {
        setLoading(false);
    }
};

    return (
        <div className="flex flex-col md:flex-row min-h-screen">
    {/* Left side - hidden on mobile, shown on md+ */}
    <div className="hidden md:flex md:w-3/7 max-h-full bg-gray-200 flex-col gap-6 items-center justify-center">
        <img className="w-80 pointer-events-none" src="log_l_pic.jpg" alt="" />
        <p className="text-2xl font-semibold text-black text-center px-4">
            "Safety is not expensive, it's priceless"
        </p>
    </div>

    {/* Right side login form */}
    <div className="w-full md:w-4/7 flex min-h-screen md:max-h-full items-center justify-center">
        <div className="w-full max-w-md p-6 sm:p-8">
            {/* Logo + Title */}
            <div className="flex flex-col items-center gap-3 mb-3">
                <img className="size-16 sm:size-20 pointer-events-none" src="logo.png" alt="" />
                <div className="flex flex-row items-center gap-5">
                <GraduationCap />
                <h1 className="text-2xl sm:text-3xl font-bold mb-2">Student Sign-Up</h1>
                </div>
            </div>
            <p className="text-sm text-gray-500 text-center mb-6">
                Learn, prepare, and stay safe — turning disaster readiness into a smart, engaging journey
            </p>

            {/* Error Message */}
            {error && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                    {error}
                </div>
            )}

            {/* Registration Form */}
            <form className="space-y-4" onSubmit={handleSubmit}>
                {role === "school" ? (
                    <>
                        <input type="text" name="schoolName" placeholder="School Name"
                            value={formData.schoolName || ""} onChange={handleChange} required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
                        <input type="email" name="email" placeholder="Email"
                            value={formData.email || ""} onChange={handleChange} required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
                        <input type="text" name="address" placeholder="Address (Optional)"
                            value={formData.address || ""} onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
                        <input type="tel" name="contactNumber" placeholder="Contact Number (Optional)"
                            value={formData.contactNumber || ""} onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
                        <input type="password" name="password" placeholder="Password (min 6 characters)"
                            value={formData.password || ""} onChange={handleChange} required minLength="6"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
                    </>
                ) : (
                    <>
                        <input type="text" name="schoolName" placeholder="School ID/Name"
                            value={formData.schoolName || ""} onChange={handleChange} required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
                        <input type="text" name="studentName" placeholder="Student Name"
                            value={formData.studentName || ""} onChange={handleChange} required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
                        <input type="email" name="email" placeholder="Email"
                            value={formData.email || ""} onChange={handleChange} required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
                        <input type="text" name="class" placeholder="Class/Grade — e.g., 9"
                            value={formData.class || ""} onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
                        <input type="text" name="section" placeholder="Section"
                            value={formData.section || ""} onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
                        <input type="text" name="rollNumber" placeholder="Roll Number (Optional) — e.g., STUD001"
                            value={formData.rollNumber || ""} onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
                        <input type="password" name="password" placeholder="Password (min 6 characters)"
                            value={formData.password || ""} onChange={handleChange} required minLength="6"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
                    </>
                )}

                <button type="submit" disabled={loading}
                    className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition disabled:bg-gray-400">
                    {loading ? "Registering..." : "Sign up"}
                </button>
                <Link to="/">
                    <button className="w-full flex justify-center gap-4 bg-white text-black py-2 rounded-lg hover:bg-gray-400/20 border-2 border-black-100 transition">
                        <ArrowLeftToLine />
                        Go Back
                    </button>
                </Link>
            </form>

            <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">
                    Already have an account?{" "}
                    <Link to="/studentlogin" className="text-black font-semibold hover:underline">
                        Log in
                    </Link>
                </p>
            </div>
        </div>
    </div>
</div>
    );
}
