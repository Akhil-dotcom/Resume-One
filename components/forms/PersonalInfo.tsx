import { useState } from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';

function PersonalInfo() {
const [addInfo, setaddInfo] = useState<boolean>(false);
  return (
    <div className="max-w-screen-sm bg-gray-800 p-5 rounded-md mx-auto">
        {/* personal Info */}
        <div className="">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col">
                    <label className="text-xs text-slate-400 pb-2">First Name</label>
                    <input className="border-2 rounded-md p-2 bg-gray-700 border-gray-400 outline-none focus:border-cyan-500 text-gray-400 text-sm" />
                </div>
                <div className="flex flex-col">
                    <label className="text-xs text-slate-400 pb-2">Last Name</label>
                    <input className="border-2 rounded-md p-2 bg-gray-700 border-gray-400 outline-none focus:border-cyan-500 text-gray-400 text-sm" />
                </div>
                <div className="flex flex-col">
                    <label className="text-xs text-slate-400 pb-2">Email</label>
                    <input className="border-2 rounded-md p-2 bg-gray-700 border-gray-400 outline-none focus:border-cyan-500 text-gray-400 text-sm" />
                </div>
                <div className="flex flex-col">
                    <label className="text-xs text-slate-400 pb-2">Phone Number</label>
                    <input className="border-2 rounded-md p-2 bg-gray-700 border-gray-400 outline-none focus:border-cyan-500 text-gray-400 text-sm" />
                </div>
                {addInfo && <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:col-span-2">
                    <div className="flex flex-col">
                        <label className="text-xs text-slate-400 pb-2">Portfolio website</label>
                        <input className="border-2 rounded-md p-2 bg-gray-700 border-gray-400 outline-none focus:border-cyan-500 text-gray-400 text-sm" />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-xs text-slate-400 pb-2">Linked In</label>
                        <input className="border-2 rounded-md p-2 bg-gray-700 border-gray-400 outline-none focus:border-cyan-500 text-gray-400 text-sm" />
                    </div>
                </div>}
                <div onClick={() => setaddInfo(!addInfo)} className="text-cyan-500 text-sm flex items-center gap-1 cursor-pointer sm:col-span-2">
                    <AiFillPlusCircle />
                    <p>{!addInfo ? "Add Information" : "Collapse Information"}</p>
                </div>
            </form>
        </div>
    </div>
  );
}

export default PersonalInfo;
