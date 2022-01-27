import React from 'react';

function PersonalInfo() {
  return (
    <div className="max-w-screen-sm border p-5 rounded-md mx-auto">
        {/* personal Info */}
        <div className="">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col">
                    <label className="text-xs text-slate-400 pb-2">First Name</label>
                    <input className="border-2 rounded-md p-1 bg-slate-100 outline-none focus:ring-2 " />
                </div>
                <div className="flex flex-col">
                    <label className="text-xs text-slate-400 pb-2">Last Name</label>
                    <input className="border-2 rounded-md p-1 bg-slate-100 outline-none focus:ring-2 " />
                </div>
                <div className="flex flex-col">
                    <label className="text-xs text-slate-400 pb-2">Email</label>
                    <input className="border-2 rounded-md p-1 bg-slate-100 outline-none focus:ring-2 " />
                </div>
                <div className="flex flex-col">
                    <label className="text-xs text-slate-400 pb-2">Phone Number</label>
                    <input className="border-2 rounded-md p-1 bg-slate-100 outline-none focus:ring-2 " />
                </div>
            </form>
        </div>
    </div>
  );
}

export default PersonalInfo;
