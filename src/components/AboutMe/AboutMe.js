import React from "react";

const AboutMe = () => {
  return (
    <section className="px-10">
      <div>
        <div className="flex items-center justify-between mb-4 mt-6">
          <div>
            <h1 className="text-text text-base font-bold uppercase">
              About Me
            </h1>
          </div>
          <div>
            <button className="bg-primary text-white rounded-md text-sm h-7 w-20 hover:bg-[#F3AA61] duration-150">
              Edit
            </button>
          </div>
        </div>
        <div>
          <textarea
            className="w-full p-3 rounded-lg text-text text-sm outline-none"
            placeholder="Add something about you."
            style={{ resize: "none" }}
            name=""
            id=""
            rows="5"
          ></textarea>
        </div>
      </div>
      <hr className="mt-6" />
    </section>
  );
};

export default AboutMe;