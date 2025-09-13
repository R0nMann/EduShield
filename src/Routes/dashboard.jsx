import React, { useState } from "react";
import { ArrowLeftToLine } from "lucide-react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "class-progress", label: "Class Progress" },
    { id: "upcoming-drills", label: "Upcoming Drills" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform bg-white shadow-lg w-64 p-5 transition-transform duration-300 lg:relative lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        <nav className="space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setSidebarOpen(false);
              }}
              className={`w-full text-left px-4 py-2 rounded-lg ${
                activeTab === tab.id
                  ? "bg-black text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 p-6">
        {/* Mobile menu button */}
        <button
          className="lg:hidden mb-4 px-4 py-2 bg-black text-white rounded-lg"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? "Close Menu" : "Open Menu"}
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
            Administrative Dashboard
          </span>
          <h1 className="text-2xl font-bold mt-2">
            School Preparedness Analytics
          </h1>
          <p className="text-gray-600 text-sm">
            Track student progress, drill participation, and overall disaster
            preparedness metrics.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {[
            {
              label: "Total Students Enrolled",
              value: "2,456",
              growth: "+12% from last month",
            },
            {
              label: "Modules Completed",
              value: "8,234",
              growth: "+8% from last month",
            },
            {
              label: "Drills Conducted",
              value: "156",
              growth: "+23% from last month",
            },
            {
              label: "Preparedness Score",
              value: "87%",
              growth: "+5% from last month",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white p-4 rounded-xl shadow border"
            >
              <p className="text-gray-500 text-sm">{stat.label}</p>
              <h2 className="text-2xl font-bold">{stat.value}</h2>
              <p className="text-green-600 text-sm">{stat.growth}</p>
            </div>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === "overview" && (
            <>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Activity */}
            <div className="bg-white p-4 rounded-xl shadow border">
              <h3 className="font-semibold mb-3">Recent Activity</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between items-center">
                  <span>✅ Fire Drill Completed (Grade 10-A)</span>
                  <span className="text-gray-500">2h ago</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>🔵 Earthquake Module Started (Grade 8-B)</span>
                  <span className="text-gray-500">4h ago</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>✅ Emergency Contact Updated</span>
                  <span className="text-gray-500">6h ago</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>✅ Flood Awareness Module (Grade 9-C)</span>
                  <span className="text-gray-500">1d ago</span>
                </li>
              </ul>
            </div>

            {/* Preparedness Overview */}
            <div className="bg-white p-4 rounded-xl shadow border">
              <h3 className="font-semibold mb-3">Preparedness Overview</h3>
              <div className="space-y-3">
                {[
                  { label: "Module Completion", value: 82 },
                  { label: "Drill Participation", value: 91 },
                  { label: "Emergency Readiness", value: 76 },
                  { label: "Staff Training", value: 88 },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{item.label}</span>
                      <span>{item.value}%</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                      <div
                        className="bg-black h-2 rounded-full"
                        style={{ width: `${item.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Link to="/home"><button className="mt-5 p-3 pl-4 pr-4 flex gap-3 rounded-xl shadow border hover:shadow-2xl bg-black text-white">
            <ArrowLeftToLine />
            Go Back
            </button>
            </Link>
          </>
        )}

        {activeTab === "class-progress" && (
          <div className="bg-white p-4 rounded-xl shadow border">
            <h3 className="font-semibold mb-3">Class-wise Progress</h3>
            {[
              { grade: "Grade 10-A", done: 42, total: 45, percent: 93 },
              { grade: "Grade 10-B", done: 38, total: 43, percent: 88 },
              { grade: "Grade 9-A", done: 40, total: 48, percent: 83 },
              { grade: "Grade 9-B", done: 36, total: 46, percent: 78 },
            ].map((cls) => (
              <div
                key={cls.grade}
                className="flex items-center justify-between py-2 border-b last:border-0"
              >
                <div>
                  <p className="font-medium">{cls.grade}</p>
                  <p className="text-xs text-gray-500">
                    {cls.done} of {cls.total} students completed
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-32 bg-gray-200 h-2 rounded-full">
                    <div
                      className="bg-black h-2 rounded-full"
                      style={{ width: `${cls.percent}%` }}
                    ></div>
                  </div>
                  <span className="text-sm">{cls.percent}%</span>
                  <button className="px-3 py-1 border rounded-lg text-sm hover:bg-gray-100">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "upcoming-drills" && (
          <div className="bg-white p-4 rounded-xl shadow border">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Upcoming Drills</h3>
              <button className="px-4 py-2 bg-black text-white rounded-lg">
                + Schedule New Drill
              </button>
            </div>
            <ul className="space-y-4">
              {[
                {
                  title: "Fire Evacuation",
                  date: "Tomorrow, 10:30 AM",
                  grades: ["Grade 7-A", "Grade 7-B"],
                  status: "scheduled",
                },
                {
                  title: "Earthquake Response",
                  date: "Dec 15, 2:00 PM",
                  grades: ["Grade 6-A", "Grade 6-B", "Grade 6-C"],
                  status: "scheduled",
                },
                {
                  title: "Flood Awareness",
                  date: "Dec 18, 11:00 AM",
                  grades: ["Grade 5-A", "Grade 5-B"],
                  status: "pending",
                },
              ].map((drill) => (
                <li
                  key={drill.title}
                  className="flex justify-between items-center border p-3 rounded-lg"
                >
                  <div>
                    <h4 className="font-medium">{drill.title}</h4>
                    <p className="text-sm text-gray-500">{drill.date}</p>
                    <p className="text-xs text-gray-400">
                      {drill.grades.join(", ")}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        drill.status === "scheduled"
                          ? "bg-gray-200 text-gray-700"
                          : "bg-yellow-200 text-yellow-700"
                      }`}
                    >
                      {drill.status}
                    </span>
                    <button className="px-3 py-1 border rounded-lg text-sm hover:bg-gray-100">
                      Edit
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        
      </div>
    
    </div>
  );
}
