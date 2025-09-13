import { useEffect, useRef, useState } from "react";
// import { Button } from "@/components/ui/button";

export default function DisasterModules() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // stop after first trigger
        }
      },
      { threshold: 0.1 } // trigger as soon as 10% is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const modules = [
    {
      id: 1,
      category: "Natural Disasters",
      image: "earthquake_module.jpeg",
      level: "Beginner",
      title: "Earthquake Safety & Response",
      description:
        "Learn essential earthquake preparedness, drop-cover-hold techniques, and post-earthquake safety measures.",
      duration: "45 mins",     
      action1: "Start Learning",
      action2: "Take Quiz",
      action1href: "",
      action2href: "https://docs.google.com/forms/d/e/1FAIpQLScsRtc5_38DQYZ_6iRpmGBQuInUzvkl-vCpzquoIpglaALMfg/viewform"
    },
    {
      id: 2,
      category: "Natural Disasters",
      image: "thunderstorm_module.jpg",
      level: "Beginner",
      title: "Thunderstorm Scenario",
      description:
        "Learn essential safety practices during thunderstorms, including protection from lightning, avoiding electrical hazards, and community response measures.",
      duration: "35 mins", 
      action1: "Start Learning",
      action2: "Take Quiz",
      action1href: "",
      action2href: ""
    },
    {
      id: 3,
      category: "Man-made Disasters",
      image: "fire_module.jpg",
      level: "Beginner",
      title: "Fire Safety & Emergency Exits",
      description:
        "Fire prevention, evacuation routes, and proper use of fire safety equipment in educational institutions.",
      duration: "40 mins",
      action1: "Start Learning",
      action2: "Take Quiz",
      action1href: "",
      action2href: ""
    },
    {
    id: 4,
      category: "First Aid and Medical Emergency",
      image: "first_aid_module.jpg",
      level: "Intermediate",
      title: "First Aid and Medical Emergency",
      description:
        "Basic first aid training and medical emergency response for students and teachers.",
      duration: "45 mins",
      action1: "Start Learning",
      action2: "Take Quiz",
      action1href: "",
      action2href: ""
    },
    {
      id: 5,
      category: "Natural Disasters",
      image: "flood-module.jpeg",
      level: "Intermediate",
      title: "Flood Management & Evacuation",
      description:
        "Understanding flood risks, evacuation procedures, and water safety during flood emergencies.",
      duration: "35 mins",
      action1: "Start Learning",
      action2: "Take Quiz",
      action1href: "",
      action2href: ""
    },
    {
      id: 6,
      category: "Man-made Disasters",
      image: "cyber_module.jpg",
      level: "Advanced",
      title: "Cyber Safety",
      description:
        "Understand the risks of cyber threats, safe internet practices, data protection strategies, and response measures for cyber incidents in educational settings.",
      duration: "40 mins",
      action1: "Start Learning",
      action2: "Take Quiz",
      action1href: "",
      action2href: ""
    },
    // ✅ you can keep adding more here safely
  ];

  return (
    <section ref={sectionRef} id="learning-modules" className="px-6 py-10">
      <div
        className={`text-center mb-10 transform transition-all duration-500 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <span className="text-sm text-blue-600 font-semibold bg-blue-50 px-3 py-1 rounded-full">
          Interactive Learning
        </span>
        <h2 className="text-3xl font-bold mt-2">
          Comprehensive Disaster Education Modules
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Region-specific, interactive learning modules designed to prepare
          students and educators for various disaster scenarios common in India.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {modules.map((module, index) => (
          <div
            key={module.id}
            className={`hover:shadow-lg transition-shadow rounded-2xl shadow-md bg-white p-4 flex flex-col
              transform  duration-50 ease-out
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: `${index * 150}ms` }} // staggered animation
          >
            {/* Image placeholder */}
            <div className="h-60 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
              <img src={module.image} alt="" className=" "/>
            </div>

            <div className="mt-4 flex flex-col flex-grow">
              <span className="text-xs text-blue-600 font-medium">
                {module.category}
              </span>
              <span className="text-xs text-gray-500 mt-1">{module.level}</span>

              <h3 className="text-lg font-semibold mt-2">{module.title}</h3>
              <p className="text-gray-600 text-sm mt-2 flex-grow">
                {module.description}
              </p>

              <div className="mt-4 text-sm text-gray-500 flex justify-between">
                <span>⏱ {module.duration}</span>
                
              </div>

              <div className="mt-2 flex justify-around  items-center">
                <a href={module.action1href}target="_blank" rel="noopener"><button className="cursor-pointer bg-blue-500 hover:bg-blue-600 rounded-3xl p-2 text-white pr-8 pl-8">{module.action1}</button></a>
                <a href={module.action2href}target="_blank" rel="noopener"><button className="cursor-pointer bg-blue-500 hover:bg-blue-600 rounded-3xl p-2 text-white pr-8 pl-8">{module.action2}</button></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
