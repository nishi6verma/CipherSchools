import React from "react";

const ProfessionalInfo = () => {
  return (
    <section className="px-10">
      <div>
        <div className="flex items-center justify-between mb-4 mt-6">
          <div>
            <h1 className="text-text text-base font-bold uppercase">
              Professional Information
            </h1>
          </div>
          <div>
            <button className="bg-primary text-white rounded-md text-sm h-7 w-20 hover:bg-[#F3AA61] duration-150">
              Edit
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-5">
          {/* Higher education */}
          <div>
            <label
              for=""
              className="block py-3 text-text text-base font-semibold"
            >
              Highest education
            </label>
            <div className="relative w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 right-2.5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md outline-none appearance-none ">
                <option>Primary</option>
                <option>Secondary</option>
                <option>Higher Secondary</option>
                <option>Graduation</option>
                <option>Post Graduation</option>
              </select>
            </div>
          </div>{" "}
          {/* What do you... */}
          <div>
            <label
              for=""
              className="block py-3 text-text text-base font-semibold"
            >
              What do you do currently?
            </label>
            <div className="relative w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 right-2.5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md outline-none appearance-none ">
                <option>Schooling</option>
                <option>College Student</option>
                <option>Teaching</option>
                <option>Job</option>
                <option>Freelancing</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-6" />
    </section>
  );
};

export default ProfessionalInfo;