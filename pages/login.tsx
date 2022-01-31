import React from 'react';
import { CgGoogle } from 'react-icons/cg'
import { RiCheckboxMultipleBlankFill } from 'react-icons/ri'

function login() {
  return <div className="font-raedex min-h-[80vh] flex justify-center items-center">
      <div className="flex flex-col items-center w-max rounded-md mx-auto p-5 py-10">
        <RiCheckboxMultipleBlankFill size={45} className="mb-8 text-cyan-500" />
        <div className="text-3xl font-bold text-white pb-1"><span className="text-cyan-500">One</span>Resume Login</div>
        <div className="text-white">Login to oneresume for a better usecase.</div>
        <div className="pt-10 ">
          <button className="bg-white p-3 px-4 rounded-md text-sm font-medium shadow-lg hover:scale-105 active:scale-95 duration-200 flex items-center gap-3 hover:bg-cyan-500 hover:text-white">
            <CgGoogle className="text-xl" />
            <p>Sign In/Up with Google</p>
          </button>
        </div>
      </div>
  </div>;
}

export default login;
