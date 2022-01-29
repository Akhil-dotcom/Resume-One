import React from 'react';
import { FiFolderPlus } from 'react-icons/fi'


function FormOpenBtn() {
  return <div className="hover:border-cyan-500 hover:border-solid group active:scale-95 duration-200 hover:text-cyan-500 group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3">
      <FiFolderPlus className="text-gray-400 text-2xl group-hover:text-cyan-500" />
      <div className="text-gray-400 group-hover:text-cyan-500">Form open</div>
  </div>;
}

export default FormOpenBtn;
