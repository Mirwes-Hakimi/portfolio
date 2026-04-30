import React from 'react';
import TestCarRentals from '../Assets/TestCarRentals.png';
import NorthCalFurniture from '../Assets/NorthCalFurniture.png';
import WindowCompany from '../Assets/WindowCompany.png';
import DanvilleDrivingSchool from '../Assets/DanvilleDrivingSchool.png';
import team_builder from '../Assets/team_builder.png';
import crypto2 from '../Assets/crypto2.png';
import NextGenDrivers from '../Assets/NextGenDrivers.png';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: NextGenDrivers,
      link: "https://next-gen-drivers.vercel.app/",
      title: "Next Gen Drivers",
      description: "Modern driving school platform with course listings, instructor profiles, and student enrollment.",
      tags: ["React", "CSS"],
    },
    {
      id: 2,
      src: TestCarRentals,
      link: "https://www.dmvtestcars.com/",
      title: "DMV Rental Car",
      description: "Business website for a car rental service with a streamlined booking flow.",
      tags: ["React", "Tailwind CSS"],
    },
    {
      id: 3,
      src: WindowCompany,
      link: "https://www.healthyhomeca.com/",
      title: "Healthy Home Window Company",
      description: "Business website built with React focused on clean UI and lead generation.",
      tags: ["React", "Tailwind CSS"],
    },
    {
      id: 4,
      src: team_builder,
      link: "https://team-builder-bice.vercel.app/",
      title: "Team Builder App",
      description: "React app for creating and managing teams using component-based architecture.",
      tags: ["React", "CSS"],
    },
    {
      id: 5,
      src: DanvilleDrivingSchool,
      link: "https://danville-driving-school.vercel.app/",
      title: "Danville Driving School",
      description: "Professional driving school website with course info, scheduling, and clean modern design.",
      tags: ["React", "Tailwind CSS"],
    },
    {
      id: 6,
      src: NorthCalFurniture,
      link: "https://north-cal-furniture-gallery.vercel.app/",
      title: "NorthCal Furniture Gallery",
      description: "Luxury furniture showroom site with curated product displays for a Sacramento-based gallery.",
      tags: ["React", "Tailwind CSS"],
    },
    {
      id: 7,
      src: crypto2,
      link: "https://w-s9-m3-mp.vercel.app/",
      title: "Crypto Dashboard",
      description: "Real-time cryptocurrency tracker with live market data and price charts.",
      tags: ["React", "CSS", "REST API"],
    },
  ];

  return (
    <div name="portfolio" className="bg-gradient-to-b from-gray-800 via-gray-700 to-gray-900 w-full text-white py-20">
      <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full">

        <div className="pb-12">
          <p className="text-4xl font-bold inline border-b-4 border-yellow-400">Portfolio</p>
          <p className="py-6 text-gray-300 text-lg">
            A selection from 50+ projects I've built — from business sites to full-stack apps.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {portfolios.map(({ id, src, link, title, description, tags }) => (
            <div
              key={id}
              className="group bg-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:border-yellow-400/60 shadow-lg hover:shadow-yellow-400/20 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="overflow-hidden h-44 bg-gray-700 flex-shrink-0">
                {src ? (
                  <img
                    src={src}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-yellow-500/30 to-gray-800">
                    <span className="text-yellow-300 text-sm font-semibold tracking-wide uppercase px-4 text-center">
                      {title}
                    </span>
                  </div>
                )}
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-base font-bold text-white mb-2 leading-snug">{title}</h3>
                <p className="text-gray-400 text-sm mb-4 flex-1 leading-relaxed">{description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-yellow-400/10 text-yellow-300 rounded-full border border-yellow-400/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-300 active:scale-95 transition-all duration-200 text-sm"
                >
                  View Live →
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Portfolio;
