import React from 'react';
import Resume1 from '../components/resumes/Resume1';

function Templates() {
  return (
    <div className="font-raedex">
        <div className="max-w-screen-xl mx-auto p-5 flex flex-col gap-10">
           <h1 className="text-white text-4xl font-semibold">Templates</h1>
           {/* <canvas className="text-white border border-white bg-white" width="2480" height="3508">
             <Resume1 />
           </canvas> */}
           <div>
              <Resume1 />
           </div>
        </div>
    </div>
  );
}

export default Templates;
