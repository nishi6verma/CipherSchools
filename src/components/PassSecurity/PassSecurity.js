import React, { useState } from "react";

const PassSecurity = () => {
  // handle state for modal
  const [state, setState] = useState(false);
  // password input visibility
  const [isPasswordHidden, setPasswordHidden] = useState(true);

  return (
    <section className="px-10">
      <div>
        <div className="flex items-center justify-between mb-4 mt-6">
          <div>
            <h1 className="text-text text-base font-bold uppercase">
              password & Security
            </h1>
          </div>
          <div>
            <button
              onClick={() => setState(true)}
              className="bg-primary text-white rounded-md text-sm h-7 w-20 hover:bg-[#F3AA61] duration-150"
            >
              Change
            </button>
          </div>
        </div>
        <div>
          <label
            for=""
            className="block py-3 text-text text-base font-semibold"
          >
            Password
          </label>
          <div className="flex items-center p-2 rounded-md bg-white">
            <input
              type="password"
              placeholder="*************"
              disabled
              id=""
              className="w-full py-1 ml-2 outline-none text-sm bg-white"
            />
          </div>
        </div>
      </div>
      {/* Modal */}
      {state && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div
            className="fixed inset-0 w-full h-full bg-black opacity-60"
            onClick={() => setState(false)}
          ></div>
          <div className="flex items-center min-h-screen px-4 py-8">
            <div className="relative w-full max-w-[500px] p-4 mx-auto bg-white rounded-2xl shadow-lg">
              {/* modal body */}
              <div className="p-4">
                <div className="w-full mb-2">
                  <label className="text-text text-sm font-semibold">
                    Current Password
                  </label>
                  <div className="relative mt-2">
                    <button
                      className="text-gray-400 absolute right-3 inset-y-0 my-auto active:text-gray-600"
                      onClick={() => setPasswordHidden(!isPasswordHidden)}
                    >
                      {isPasswordHidden ? (
                        <svg
                          className="w-6 h-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                          />
                        </svg>
                      )}
                    </button>
                    <input
                      type={isPasswordHidden ? "password" : "text"}
                      placeholder="Current Password"
                      className="p-3 outline-none text-sm rounded-md bg-body w-full"
                    />
                  </div>
                </div>
                <div className="w-full mb-2">
                  <label className="text-text text-sm font-semibold">
                    New Password
                  </label>
                  <div className="relative mt-2">
                    <button
                      className="text-gray-400 absolute right-3 inset-y-0 my-auto active:text-gray-600"
                      onClick={() => setPasswordHidden(!isPasswordHidden)}
                    >
                      {isPasswordHidden ? (
                        <svg
                          className="w-6 h-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                          />
                        </svg>
                      )}
                    </button>
                    <input
                      type={isPasswordHidden ? "password" : "text"}
                      placeholder="New Password"
                      className="p-3 outline-none text-sm rounded-md bg-body w-full"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <label className="text-text text-sm font-semibold">
                    Confirm Password
                  </label>
                  <div className="relative mt-2">
                    <button
                      className="text-gray-400 absolute right-3 inset-y-0 my-auto active:text-gray-600"
                      onClick={() => setPasswordHidden(!isPasswordHidden)}
                    >
                      {isPasswordHidden ? (
                        <svg
                          className="w-6 h-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                          />
                        </svg>
                      )}
                    </button>
                    <input
                      type={isPasswordHidden ? "password" : "text"}
                      placeholder="Confirm Password"
                      className="p-3 outline-none text-sm rounded-md bg-body w-full"
                    />
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
      {/* horizontal row added */}
      <hr className="mt-6" />
    </section>
  );
};

export default PassSecurity;