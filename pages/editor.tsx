import React from 'react';
import EducationInfo from '../components/forms/EducationInfo';
import PersonalInfo from '../components/forms/PersonalInfo';

function Editor() {
  return (
    <div className="font-raedex max-h-screen h-screen overflow-hidden relative">
        <div className="max-w-screen-xl mx-auto p-5 flex gap-5 h-full">
            <div className="flex-1">
              {/* <div className="text-white">Resume builder</div> */}
              {/* form and preview */}
              <div className="max-w-2xl mx-auto xl:max-w-none h-full overflow-y-scroll scrollbar scrollbar-thin scrollbar-thumb-cyan-700">
                  <div className="font-raedex">
                    <div className="text-2xl text-white">Resume Details</div>
                    <div className="text-xs sm:text-sm pb-5 text-white">Enter your details and lets get on building your resume.</div>
                    {/* close btn */}
                    <div>

                    </div>
                  </div>
                  <PersonalInfo />
                  <EducationInfo />
              </div>
            </div>
            <div className="hidden xl:inline-block flex-1 p-2">
              <div className="bg-gray-700 h-full p-5 rounded-md border-2 border-slate-400 text-white">Preview</div>
            </div>
        </div>
    </div>
  );
}

export default Editor;
