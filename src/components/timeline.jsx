import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import timelineData from '../data/timelineData';

const Timeline = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: true,    
    });
  }, []);

  return (
    <div className="relative px-6 sm:px-6 py-12">
      {/* Vertical Line */}
      <div className="absolute left-[2.4rem] md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200 z-0"></div>

      <div className="space-y-12">
        {timelineData.map((milestone, index) => (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row items-start ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Content Card */}
            <div
              className={`w-full md:w-[1000px] mb-2 mt-8 md:mb-0 md:mt-0 flex ${
                index % 2 === 0
                  ? 'md:justify-end md:pr-36 md:mr-24'
                  : 'md:justify-start md:pl-36 md:ml-24'
              }`}
            >
              <div
                data-aos="fade-up"
                className={`bg-white rounded-xl shadow-lg p-6 max-w-md ${
                  index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                } text-left ml-12 md:ml-0`}
              >
                <div className="text-[#2c789e] font-bold text-2xl mb-2">{milestone.year}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{milestone.title}</h3>
                <p className="text-gray-600">{milestone.description}</p>
              </div>
            </div>

            {/* Dot */}
            <div
              className="absolute top-14 md:top-6 md:left-1/2 md:transform md:-translate-x-1/2 
                         flex items-center justify-center"
            >
              <div className="h-8 w-8 rounded-full bg-[#2c789e] border-4 border-white"></div>
            </div>

            {/* Spacer */}
            <div className="hidden md:block md:w-1/2 md:pl-8 md:pr-0 pr-8"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
