import React, { useState } from "react";

const Interests = () => {
  // handle state for modal
  const [state, setState] = useState(false);

  return (
    <section className="px-10 mb-10">
      <div className="flex items-center justify-between mb-3 mt-6">
        <div>
          <h1 className="text-text text-base font-bold uppercase">Interests</h1>
        </div>
        <div>
          <button
            onClick={() => setState(true)}
            className="bg-primary text-white rounded-md text-sm h-7 w-20 hover:bg-[#F3AA61] duration-150"
          >
            Edit
          </button>
        </div>
      </div>
      <div>
        <div className="bg-white text-primary p-3 rounded-md text-sm text-bold w-44 text-center shadow-md">
          Web Development
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
              <div className="p-4 grid grid-cols-2 gap-2">
                <button className="bg-body p-3 rounded-md text-sm text-semibold">
                  App Development
                </button>
                <button className="bg-body p-3 rounded-md text-sm text-semibold">
                  Web Development
                </button>
                <button className="bg-body p-3 rounded-md text-sm text-semibold">
                  Game Development
                </button>
                <button className="bg-body p-3 rounded-md text-sm text-semibold">
                  Data Structure
                </button>
                <button className="bg-body p-3 rounded-md text-sm text-semibold">
                  Programming
                </button>
                <button className="bg-body p-3 rounded-md text-sm text-semibold">
                  Machine Learning
                </button>
                <button className="bg-body p-3 rounded-md text-sm text-semibold">
                  Data Science
                </button>
                <button className="bg-body p-3 rounded-md text-sm text-semibold">
                  Others
                </button>
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

export default Interests;