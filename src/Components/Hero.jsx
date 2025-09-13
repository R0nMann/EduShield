import { Menu, X, BookOpen, Zap, Phone, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 relative animate-fadeIn">
        
      <div className="max-w-4xl mx-auto text-center">
        {/* Platform Label */}
        <p className="text-m text-black mb-6">
          Disaster Preparedness Education Platform
        </p>
        
        {/* Main Heading */}
        <h1 className="text-4xl z-10 sm:text-5xl lg:text-6xl font-bold text-black  mb-6 leading-tight">
          Building Safer Schools Through Digital Disaster Education
        </h1>
        
        {/* Description */}
        <p className="text-lg z-10 text-black mb-10 max-w-3xl mx-auto leading-relaxed">
          Empowering Indian educational institutions with interactive disaster management 
          training, virtual drills, and localized emergency preparedness programs to create a 
          disaster-resilient society.
        </p>
        
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-3">
              <Users className="w-8 h-8 text-gray-700" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">50,000+</div>
            <div className="text-sm text-gray-600">Students Trained</div>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-3">
              <BookOpen className="w-8 h-8 text-gray-700" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">15+</div>
            <div className="text-sm text-gray-600">Learning Modules</div>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-3">
              <Zap className="w-8 h-8 text-gray-700" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">25+</div>
            <div className="text-sm text-gray-600">Virtual Drills</div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/bg_hero.jpeg" // replace with your image path
          alt="Background placeholder"
          className="w-full h-full object-cover opacity-25"
        />
      </div>
    </section>
  );
};
export default Hero
