import React from "react";
import teamData from "../data/teamData";

const Team = () => {
  return (
    <div className="px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Meet the Team</h2>
      <div className="flex flex-col md:flex-row md:justify-around overflow-x-auto space-x-6 pb-4 scrollbar-hide">
        {teamData.map((member) => (
          <div
            key={member.id}
            className="flex flex-col items-center justify-center mb-4"
          >
            <div className="p-4 text-center">
              <img
                src={member.image}
                alt={member.name}
                className="border-2 border-[#2d799e] p-2 md:p-4 w-36 h-36 md:w-52 md:h-52 object-cover rounded-full mx-auto mb-4 transform transition-all duration-300 hover:scale-110"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <div className="w-20 border border-[#2d799e] mx-auto my-2"></div>
              <p className="text-gray-600 text-sm mt-2">{member.description}</p>
            </div>
            {/* <div className='border-2 border-[#2d799e] rounded-3xl w-[115px] flex items-center hover:bg-[#2d799e] hover:text-white transition duration-300'> */}
            {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                width="30px" height='30px' className='cursor-pointer mr-1'
              >
                <g>
                  <g
                    fill="#ffffff"
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit="10"
                    fontFamily="none"
                    fontWeight="none"
                    fontSize="none"
                    textAnchor="none"
                    style={{ mixBlendMode: "normal" }}
                  >
                    <path d="M128,229.12c-55.84703,0 -101.12,-45.27297 -101.12,-101.12v0c0,-55.84703 45.27297,-101.12 101.12,-101.12v0c55.84703,0 101.12,45.27297 101.12,101.12v0c0,55.84703 -45.27297,101.12 -101.12,101.12z" />
                  </g>
                  <g
                    fill="#2d799e"
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit="10"
                    fontFamily="none"
                    fontWeight="none"
                    fontSize="none"
                    textAnchor="none"
                    style={{ mixBlendMode: "normal" }}
                  >
                    <g transform="scale(8.53333,8.53333)">
                      <path d="M15,3c-6.627,0 -12,5.373 -12,12c0,6.016 4.432,10.984 10.206,11.852v-8.672h-2.969v-3.154h2.969v-2.099c0,-3.475 1.693,-5 4.581,-5c1.383,0 2.115,0.103 2.461,0.149v2.753h-1.97c-1.226,0 -1.654,1.163 -1.654,2.473v1.724h3.593l-0.487,3.154h-3.106v8.697c5.857,-0.794 10.376,-5.802 10.376,-11.877c0,-6.627 -5.373,-12 -12,-12z" />
                    </g>
                  </g>
                </g>
              </svg> */}
            {/* Facebook */}
            {/* </div> */}
            <div className="flex space-x-4">
            <a
              to="#"
              className="hover:text-gray-400 transition-colors duration-300"
            >
              <span className="sr-only">LinkedIn</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#"
              className="hover:text-gray-400 transition-colors duration-300"
            >
              <span className="sr-only">Gmail</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 12.713L1.941 6.08C1.4 5.72 0.75 6.113 0.75 6.746v10.508c0 .646.495 1.246 1.108 1.246h20.284c.613 0 1.108-.6 1.108-1.246V6.746c0-.633-.65-1.026-1.191-.666L12 12.713zm0-2.07L21.218 3.25H2.782L12 10.643z" />
              </svg>
            </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
