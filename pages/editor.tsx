import React from 'react';
import EducationInfo from '../components/forms/EducationInfo';
import PersonalInfo from '../components/forms/PersonalInfo';
import SkillsInfo from '../components/forms/SkillsInfo';
import { MdClose } from 'react-icons/md'
import { useRouter } from 'next/router'
import { FormContext } from '../context/formContext';


function Editor() {
  const router = useRouter()
  return (
    <div className="font-raedex md:max-h-screen md:h-screen md:overflow-hidden relative">
        <div className="max-w-screen-xl mx-auto p-5 flex gap-5 h-full">
            <div className="flex-1">
              {/* <div className="text-white">Resume builder</div> */}
              {/* form and preview */}
              <div className="max-w-2xl mx-auto xl:max-w-none h-full md:overflow-y-scroll scrollbar-hide">
                  <div className="font-raedex">
                    <div className="text-2xl text-white font-bold"><span className="text-cyan-500">Resume</span> Details</div>
                    <div className="text-xs sm:text-sm pb-5 text-white">Enter your details and lets get on building your resume.</div>
                    {/* close btn */}
                    <div onClick={() => router.back()} className="absolute top-7 right-5 sm:top-5 sm:right-3">
                      <MdClose className="bg-slate-700 text-slate-400 shadow-lg hover:scale-105 active:scale-95 duration-200 cursor-pointer h-7 w-7 sm:h-8 sm:w-8 p-1 rounded-full" />
                    </div>
                  </div>
                  {/* forms */}
                  <FormContext.Provider value={"One two three"}>
                    <PersonalInfo />
                    <EducationInfo />
                    <SkillsInfo />
                  </FormContext.Provider>
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
