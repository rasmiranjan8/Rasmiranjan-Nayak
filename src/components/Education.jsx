import React from "react";

const Education = () => {
  const educationData = [
    {
      degree: "Secondary School",
      institution: "GOVT. HIGH SCHOOL,JHAJIA,BADAMBA,CUTTACK",
      duration: "2017 - 2019",
      description:
        "Excelled in Science and Mathematics, securing 83% in final examinations.",
    },
    {
      degree: "Higher Secondary School",
      institution: "COLLEGE OF BASIC SCIENCE AND HUMANITIES,BHUBANESWAR",
      duration: "2019 - 2021",
      description:
        "Completed with a focus on Physics, Chemistry, and Mathematics. Scored 85% in board exams.",
    },
    {
      degree: "Bachelor of Technology (B.Tech)",
      institution: "ODISHA UNIVERSITY OF TECHNOLOGY AND RESEARCH, BHUBANESWAR",
      duration: "2022 - 2026",
      description:
        "Specialized in Computer Science and Engineering. Focused on web development, data structures, and algorithms. Achieved a GPA of 9.1/10.",
    },
  ];

  return (
    <section
      id="education"
      className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white"
    >
      <div className="container mx-auto px-4">
        <h3 className="text-5xl font-bold text-center mb-12 bg-clip-text text-white">
          Education
        </h3>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 w-1 h-full bg-gray-600"></div>

          {/* Education Cards */}
          <div className="space-y-12">
            {educationData.map((item, index) => (
              <div
                key={index}
                className="relative flex items-start space-x-6 w-[70%]"
              >
                {/* Dot */}
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-white to-blue-500 border-4 border-gray-800 flex items-center justify-center z-10">
                  <span className="text-sm font-bold text-white">
                    {index + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="bg-gray-100 rounded-lg shadow-lg p-6 w-full ml-12">
                  <h4 className="text-2xl text-black font-bold">{item.degree}</h4>
                  <p className="text-lg text-black  mt-1">
                    {item.institution}
                  </p>
                  <p className="text-sm text-gray-900 italic">
                    {item.duration}
                  </p>
                  <p className="text-black text-300 mt-4">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
