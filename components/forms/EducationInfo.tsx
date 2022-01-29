import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import { modules } from '../quillmodules'

const ReactQuill = dynamic(
    () => import('react-quill'),
    {
        ssr: false,
    }
)

function EducationInfo() {
  const [description, setdescription] = useState("");  
  const toolbarOptions = [['bold', 'italic'], ['link', 'image']];
  return (
    <div className="bg-gray-800 p-5 rounded-md mx-auto font-raedex my-5">
        <div className="text-xl text-white font-bold pb-3">Education Info</div>
        {/* form */}
        <div>
            <form className="grid gap-5">
                <div className="text-white">
                    <div className="text-lg font-bold">Undefined</div>
                    <div className="text-xs">Jan 2021 - Jun 2022</div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col">
                        <label className="text-xs text-slate-400 pb-2">School</label>
                        <input className="border-2 rounded-md p-2 bg-gray-700 border-gray-400 outline-none focus:border-cyan-500 text-gray-400 text-sm" />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-xs text-slate-400 pb-2">Degree</label>
                        <input className="border-2 rounded-md p-2 bg-gray-700 border-gray-400 outline-none focus:border-cyan-500 text-gray-400 text-sm" />
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="grid grid-cols-2 gap-5">
                        <div className="flex flex-col">
                            <label className="text-xs text-slate-400 pb-2">Start Date</label>
                            <input className="border-2 rounded-md p-2 bg-gray-700 border-gray-400 outline-none focus:border-cyan-500 text-gray-400 text-sm" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-xs text-slate-400 pb-2">End Date</label>
                            <input className="border-2 rounded-md p-2 bg-gray-700 border-gray-400 outline-none focus:border-cyan-500 text-gray-400 text-sm" />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-xs text-slate-400 pb-2">CGPA</label>
                        <input className="border-2 rounded-md p-2 bg-gray-700 border-gray-400 outline-none focus:border-cyan-500 text-gray-400 text-sm" />
                    </div>
                </div>
                <div>
                    <div className="flex flex-col">
                        <label className="text-xs text-slate-400 pb-2">Description</label>
                        <ReactQuill modules={modules} theme="snow" value={description} onChange={setdescription} />
                    </div>
                </div>
            </form>
        </div>
    </div>
  );
}

export default EducationInfo;
