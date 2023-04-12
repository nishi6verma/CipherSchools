import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import profileBg from "../../assets/images/profile_bg.png";

const UserProfile = () => {
  // handle state for modal
  const [state, setState] = useState(false);

  return (
    <section
      className="flex items-center flex-col md:flex-row lg:flex-row justify-between bg-cover bg-center px-10 py-3"
      style={{
        background: `linear-gradient(to right, white, transparent),linear-gradient(to left, white, transparent), url(${profileBg})`,
      }}
    >
      <div className="flex items-center gap-6">
        <div className="relative">
          <img
            className="rounded-full w-16 h-16"
            src="https://med.gov.bz/wp-content/uploads/2020/08/dummy-profile-pic.jpg"
            alt=""
          />
          <button
            className="absolute -bottom-2 left-5"
            onClick={() => setState(true)}
          >
            <MdEdit className="text-white bg-text rounded-full p-1 w-6 h-6" />
          </button>
        </div>
        <div>
          <h6 className="text-text text-xl">Hello,</h6>
          <h6 className="text-text text-2xl font-bold">Nishi Verma</h6>
          <h6 className="text-text text-base">nishi6verma@gmail.com</h6>
        </div>
      </div>
      <div>
        <h6 className="text-text text-base font-semibold">0 Followers</h6>
      </div>
      {/* Modal */}
      {state && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div
            className="fixed inset-0 w-full h-full bg-black opacity-60"
            onClick={() => setState(false)}
          ></div>
          <div className="flex items-center min-h-screen px-4 py-8">
            <div className="relative w-full max-w-[700px] p-4 mx-auto bg-white rounded-2xl shadow-lg">
              {/* Modal header */}
              <div className="flex items-center justify-between">
                <h1 className="text-lg text-text font-bold">Profile Update</h1>
                <button
                  className="p-2 text-gray-400 rounded-md hover:bg-gray-100"
                  onClick={() => setState(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 mx-auto"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              {/* modal body */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center">
                <div className="relative flex items-center justify-center">
                  <img
                    className="rounded-full w-40 h-40"
                    src="https://med.gov.bz/wp-content/uploads/2020/08/dummy-profile-pic.jpg"
                    alt=""
                  />
                  <button className="absolute -bottom-3 left-1/2">
                    <MdEdit className="text-text bg-white rounded-full p-1 w-7 h-7" />
                  </button>
                </div>
                <div>
                  <div className="w-full">
                    <label
                      for=""
                      className="block py-3 text-text text-sm font-semibold"
                    >
                      First Name
                    </label>
                    <div className="flex items-center p-2 rounded-md bg-body">
                      <input
                        type="text"
                        defaultValue="Nishi"
                        id=""
                        className="py-1 px-2 outline-none text-sm bg-body w-full"
                      />
                    </div>
                  </div>{" "}
                  <div className="w-full">
                    <label
                      for=""
                      className="block py-3 text-text text-sm font-semibold"
                    >
                      Last Name
                    </label>
                    <div className="flex items-center p-2 rounded-md bg-body">
                      <input
                        type="text"
                        defaultValue="Verma"
                        id=""
                        className="py-1 px-2 outline-none text-sm bg-body w-full"
                      />
                    </div>
                  </div>{" "}
                  <div className="w-full">
                    <label
                      for=""
                      className="block py-3 text-text text-sm font-semibold"
                    >
                      Email
                    </label>
                    <div className="flex items-center p-2 rounded-md bg-body">
                      <input
                        type="text"
                        defaultValue="nishi6verma@gmail.com"
                        disabled
                        id=""
                        className="py-1 px-2 outline-none text-sm bg-body w-full"
                      />
                    </div>
                  </div>{" "}
                  <div className="w-full">
                    <label
                      for=""
                      className="block py-3 text-text text-sm font-semibold"
                    >
                      Mobile Number
                    </label>
                    <div className="flex items-center p-2 rounded-md bg-body">
                      <input
                        type="text"
                        placeholder="Mobile Number"
                        id=""
                        className="py-1 px-2 outline-none text-sm bg-body w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* modal footer */}
              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={() => setState(false)}
                  className="bg-slate-700 text-white rounded-md text-sm h-9 w-24 hover:bg-slate-600 duration-150"
                >
                  Cancel
                </button>
                <button className="bg-primary text-white rounded-md text-sm h-9 w-24 hover:bg-[#F3AA61] duration-150">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default UserProfile;