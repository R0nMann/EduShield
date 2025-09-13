// Drills.jsx
// import { Button } from "@/components/ui/button";

export default function Drills() {
  const drills = [
    {
      id: 1,
      level: "Beginner",
      title: "Earthquake Drill",
      description:
        "Practice drop, cover, and hold procedures in various school environments",
      link: "https://www.roblox.com/share?code=9f7bec04ed526544a1f1aee43a57b41f&type=ExperienceDetails&stamp=1757780375035",
      
      time: "8 mins",
     
      scenarios: ["Classroom", "Playground", "Library", "Cafeteria"],
      icon: "🪨",
    },
    {
      id: 2,
      level: "Intermediate",
      title: "Flood Response",
      description:
        "Learn evacuation and safety measures during flood situations",
      link: "https://www.roblox.com/share?code=dd53155ce1aed2438cae4bdb085981c6&type=ExperienceDetails&stamp=1757780298322",
      
      time: "15 mins",
      
      scenarios: ["Ground Floor", "Basement", "Sports Complex", "Bus Station"],
      icon: "💧",
    },
    {
      id: 3,
      level: "Beginner",
      title: "Thunderstorm Response",
      description:
        "Learn evacuation and safety measures during flood situations",
      link: "https://www.roblox.com/share?code=1caceb62e5ce8c40ad831f8d8ff06905&type=ExperienceDetails&stamp=1757780907050",
      
      time: "15 mins",
      
      scenarios: ["Ground Floor", "Basement", "Sports Complex", "Bus Station"],
      icon: "⛈",
    },
  ];

  return (
    <section className="px-6 py-14">
      <div className="text-center mb-10">
        <span className="text-sm text-blue-600 font-semibold bg-blue-50 px-3 py-1 rounded-full">
          Virtual Reality Training
        </span>
        <h2 className="text-3xl font-bold mt-4">Interactive Virtual Drills</h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Gamified virtual reality simulations that allow students and staff to
          practice emergency procedures in a safe, controlled environment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {drills.map((drill) => (
          <div
            key={drill.id}
            className="rounded-2xl border shadow-sm bg-white p-6 flex flex-col"
          >
            {/* Icon + Level */}
            <div className="flex justify-between items-start mb-3">
              <span className="text-2xl">{drill.icon}</span>
              <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                {drill.level}
              </span>
            </div>

            {/* Title & Description */}
            <h3 className="text-lg font-semibold">{drill.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{drill.description}</p>

            {/* Stats */}
            <div className="flex justify-between text-sm text-gray-700 mt-4">
              
              <div>
                <p className="font-semibold">{drill.time}</p>
                <p className="text-xs text-gray-500">Avg Time</p>
              </div>
              
            </div>

            {/* Scenarios */}
            <div className="mt-4">
              <p className="text-sm font-medium mb-2">Available Scenarios:</p>
              <div className="flex flex-wrap gap-2">
                {drill.scenarios.map((scenario, index) => (
                  <span
                    key={index}
                    className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600"
                  >
                    {scenario}
                  </span>
                ))}
              </div>
            </div>

            {/* Button */}
            <div className="mt-6">
              <a href={drill.link} target="_blank" rel="noopener" ><button className="w-full bg-blue-500 p-2 rounded-2xl text-white hover:bg-blue-600 cursor-pointer ">Start Simulation</button></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
