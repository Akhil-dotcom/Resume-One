import React from 'react';
import PersonalInfo from '../components/forms/PersonalInfo';

function Editor() {
  return (
    <div className="font-raedex">
        <div className="max-w-screen-xl mx-auto p-5">
            <div className="text-white">Resume builder</div>
            {/* form and preview */}
            <div>
                <PersonalInfo />
            </div>
        </div>
    </div>
  );
}

export default Editor;
