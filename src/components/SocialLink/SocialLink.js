import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaGlobe,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const SocialLink = () => {
  return (
    <section className="px-10">
      <div>
        <div className="flex items-center justify-between mb-4 mt-6">
          <div>
            <h1 className="text-text text-base font-bold uppercase">
              On The Web
            </h1>
          </div>
          <div>
            <button className="bg-primary text-white rounded-md text-sm h-7 w-20 hover:bg-[#F3AA61] duration-150">
              Edit
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-5">
          <div>
            <label
              for=""
              className="block py-3 text-text text-base font-semibold"
            >
              Linkedin
            </label>
            <div className="flex items-center p-2 rounded-md bg-white">
              <div>
                <FaLinkedinIn className="bg-[#808191] text-white w-6 h-6 p-1 rounded-full" />
              </div>
              <input
                type="text"
                placeholder="Linkedin"
                id=""
                className="w-full py-1 ml-2 outline-none text-sm"
              />
            </div>
          </div>

          <div>
            <label
              for=""
              className="block py-3 text-text text-base font-semibold"
            >
              Github
            </label>
            <div className="flex items-center p-2 rounded-md bg-white">
              <div>
                <FaGithub className="bg-[#808191] text-white w-6 h-6 p-1 rounded-full" />
              </div>
              <input
                type="text"
                placeholder="Github"
                id=""
                className="w-full py-1 ml-2 outline-none text-sm"
              />
            </div>
          </div>

          <div>
            <label
              for=""
              className="block py-3 text-text text-base font-semibold"
            >
              Facebook
            </label>
            <div className="flex items-center p-2 rounded-md bg-white">
              <div>
                <FaFacebookF className="bg-[#808191] text-white w-6 h-6 p-1 rounded-full" />
              </div>
              <input
                type="text"
                placeholder="Facebook"
                id=""
                className="w-full py-1 ml-2 outline-none text-sm"
              />
            </div>
          </div>

          <div>
            <label
              for=""
              className="block py-3 text-text text-base font-semibold"
            >
              Twitter
            </label>
            <div className="flex items-center p-2 rounded-md bg-white">
              <div>
                <FaTwitter className="bg-[#808191] text-white w-6 h-6 p-1 rounded-full" />
              </div>
              <input
                type="text"
                placeholder="Twitter"
                id=""
                className="w-full py-1 ml-2 outline-none text-sm"
              />
            </div>
          </div>

          <div>
            <label
              for=""
              className="block py-3 text-text text-base font-semibold"
            >
              Instagram
            </label>
            <div className="flex items-center p-2 rounded-md bg-white">
              <div>
                <FaInstagram className="bg-[#808191] text-white w-6 h-6 p-1 rounded-full" />
              </div>
              <input
                type="text"
                placeholder="Instagram"
                id=""
                className="w-full py-1 ml-2 outline-none text-sm"
              />
            </div>
          </div>

          <div>
            <label
              for=""
              className="block py-3 text-text text-base font-semibold"
            >
              Website
            </label>
            <div className="flex items-center p-2 rounded-md bg-white">
              <div>
                <FaGlobe className="bg-[#808191] text-white w-6 h-6 p-1 rounded-full" />
              </div>
              <input
                type="text"
                placeholder="Website"
                id=""
                className="w-full py-1 ml-2 outline-none text-sm"
              />
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-6" />
    </section>
  );
};

export default SocialLink;