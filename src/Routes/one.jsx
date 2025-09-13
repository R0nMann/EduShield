import { Shield } from "lucide-react";
import { Link } from "react-router-dom";
export default function One() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-gray-200 px-6 py-4">
        <div className="flex items-center space-x-3">
          <img className="w-10" src="logo.png" alt="" />
          <h1 className="text-2xl font-bold text-black">EduShield</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-12">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 max-w-4xl mx-auto leading-tight">
            Building Resilience Through Knowledge,
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-black max-w-4xl mx-auto leading-tight">
            empowering schools and communities with disaster readiness.
          </h3>
        </div>

        {/* Two Column Section */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16">
          {/* For Schools */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-black mb-6">For Schools</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-8 px-4">
              Institutions are enhancing disaster preparedness by implementing safety protocols, conducting regular drills, and emergency training.
            </p>
            <Link to="/login"><button className="bg-black text-white px-8 py-3 rounded font-semibold hover:bg-gray-800 transition-colors mb-8">
              Log in
            </button></Link>
            <div className="text-center">
              <p className="text-gray-600 mb-2">Don't have an account?</p>
              <Link to="/signin"><button className="text-black font-semibold underline hover:no-underline">
                Sign up
              </button></Link>
            </div>
          </div>

          {/* For Students */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-black mb-6">For Students</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-8 px-4">
              Disaster preparedness empowers students to stay safe, protect others, and respond confidently during emergencies.
            </p>
            <Link to="/login"><button className="bg-black text-white px-8 py-3 rounded font-semibold hover:bg-gray-800 transition-colors mb-8">
              Log in
            </button></Link>
            <div className="text-center">
              <p className="text-gray-600 mb-2">Don't have an account?</p>
              <Link to="/signin"><button className="text-black font-semibold underline hover:no-underline">
                Sign up
              </button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}