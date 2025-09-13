import { useState } from "react";
import { Phone, Search, MapPin, Globe } from "lucide-react";

export default function Emergency() {
  const [activeTab, setActiveTab] = useState("national");
  const [selectedRegion, setSelectedRegion] = useState("All Regions");

  const nationalEmergencyServices = [
    {
      icon: "⚠️",
      title: "National Emergency Helpline",
      description: "Universal emergency number for all emergencies",
      number: "112",
      languages: ["Hindi", "English", "Regional"],
      available: true
    },
    {
      icon: "🔥",
      title: "Fire Brigade",
      description: "Fire emergency and rescue services",
      number: "101",
      languages: ["Hindi", "English"],
      available: true
    },
    {
      icon: "🛡️",
      title: "Police Emergency",
      description: "Police emergency services",
      number: "100",
      languages: ["Hindi", "English", "Regional"],
      available: true
    },
    {
      icon: "🚑",
      title: "Medical Emergency",
      description: "Medical emergency and ambulance services",
      number: "108",
      languages: ["Hindi", "English"],
      available: true
    }
  ];

  const localAuthorities = [
    {
      name: "Delhi Disaster Management Authority",
      location: "Delhi",
      email: "ddma@delhi.gov.in",

      website: "https://ddma.delhi.gov.in/"
    },
    {
      name: "Navi Mumbai Emergency Control Room",
      location: "Mumbai",
      email: "control@mcgm.gov.in",
 
      website: "https://navimumbaipolice.gov.in/special-unit/67e8f0ebe45d955c1b89b145"
    },
    {
      name: "Bangalore BBMP Emergency",
      location: "Bangalore",
      email: "emergency@bbmp.gov.in",

      website: "https://bbmp.gov.in/home"
    },
    {
      name: "Chennai Corporation Emergency",
      location: "Chennai",
      email: "emergency@chennaicorporation.gov.in",

      website: "https://chennai.nic.in/helpline/"
    },
    {
      name: "WB Relief and Disaster Management",
      location: "Kolkata",
      email: "mic@wbphed.gov.in",

      website: "https://www.wbphed.gov.in/en/disaster-management"
    }
  ];

  const handleCall = (number) => {
    window.open(`tel:${number}`, '_self');
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-100 min-h-screen">
      <div className="text-center mb-8">
        <p className="text-sm text-gray-600 mb-2">Emergency Response</p>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Emergency Contacts & Communication
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Quick access to emergency services, local authorities, and school contacts for immediate 
          response during disaster situations.
        </p>
      </div>

      {/* Emergency Alert */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
        <div className="flex items-start">
          <div className="text-red-500 mr-3 mt-1">⚠️</div>
          <div>
            <p className="text-red-800 font-medium">
              In case of immediate emergency, dial 112
            </p>
            <p className="text-red-700 text-sm">
              - India's universal emergency number available 24x7 in multiple languages.
            </p>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-lg shadow-sm mb-6">
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab("national")}
            className={`flex-1 px-6 py-4 text-center font-medium rounded-tl-lg transition-colors ${
              activeTab === "national"
                ? "bg-gray-100 text-gray-900 border-b-2 border-blue-500"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            }`}
          >
            National Emergency
          </button>
          <button
            onClick={() => setActiveTab("local")}
            className={`flex-1 px-6 py-4 text-center font-medium rounded-tr-lg transition-colors ${
              activeTab === "local"
                ? "bg-gray-100 text-gray-900 border-b-2 border-blue-500"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            }`}
          >
            Local Authorities
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === "national" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {nationalEmergencyServices.map((service, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{service.icon}</span>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-gray-900 mb-1">
                        {service.number}
                      </div>
                      {service.available && (
                        <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">
                          24x7 Available
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm text-gray-700 mb-2 font-medium">Available Languages:</p>
                    <div className="flex flex-wrap gap-2">
                      {service.languages.map((lang, langIndex) => (
                        <span key={langIndex} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>

                  
                </div>
              ))}
            </div>
          )}

          {activeTab === "local" && (
            <div>
              

              {/* Local Authorities List */}
              <div className="space-y-4">
                {localAuthorities.map((authority, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between">
                      <div className="flex items-start">
                        <MapPin className="w-5 h-5 text-gray-400 mt-1 mr-3" />
                        <div>
                          <h3 className="font-semibold text-gray-900 text-lg mb-1">
                            {authority.name}
                          </h3>
                          <p className="text-gray-600 text-sm mb-1">{authority.location}</p>
                          <p className="text-gray-500 text-sm">{authority.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => handleCall(authority.phone)}
                          className="bg-gray-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center"
                        >
                          <a href={authority.website} target="_blank" rel="noopener">
                          Go to website
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}